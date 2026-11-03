"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface StaticStar {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
}

interface TravelingStar {
  x: number;
  y: number;
  z: number;
  pz: number;
}

interface Comet {
  x: number;
  y: number;
  length: number;
  speed: number;
  size: number;
  angle: number;
  opacity: number;
  active: boolean;
  delayTimer: number;
}

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 1. Static Small Stars (small small stars at static positions)
    const STATIC_STAR_COUNT = 85;
    const staticStars: StaticStar[] = [];
    for (let i = 0; i < STATIC_STAR_COUNT; i++) {
      staticStars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.7 + 0.8, // 0.8px to 1.5px: crisp and visible
        baseAlpha: Math.random() * 0.35 + 0.45,
        twinkleSpeed: Math.random() * 0.03 + 0.015,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // 2. 3D Traveling Stars (slightly increased count: 85, slightly increased size: 1.0px to 2.8px)
    const TRAVELING_STAR_COUNT = 85;
    const MAX_DEPTH = 1000;
    const TRAVEL_SPEED = 1.35;
    const travelingStars: TravelingStar[] = [];
    for (let i = 0; i < TRAVELING_STAR_COUNT; i++) {
      travelingStars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * MAX_DEPTH + 1,
        pz: MAX_DEPTH,
      });
    }

    // 3. Comets / Shooting Stars going across the sky (for both themes)
    const COMET_COUNT = 2;
    const createComet = (initialDelay = 0): Comet => {
      const angle = (Math.PI / 180) * (32 + Math.random() * 16); // ~32° to 48° diagonal trajectory
      return {
        x: (Math.random() - 0.2) * width,
        y: -50 - Math.random() * 100,
        length: Math.random() * 90 + 170, // 170px to 260px tail
        speed: Math.random() * 4 + 9,     // 9px to 13px per frame
        size: Math.random() * 1.0 + 2.4,   // 2.4px to 3.4px bright head
        angle,
        opacity: Math.random() * 0.3 + 0.7,
        active: initialDelay === 0,
        delayTimer: initialDelay,
      };
    };

    const comets: Comet[] = [
      createComet(20),  // Starts quickly
      createComet(140), // Staggered second comet
    ];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      // Reposition static stars proportionally on resize
      for (let i = 0; i < STATIC_STAR_COUNT; i++) {
        staticStars[i].x = Math.random() * width;
        staticStars[i].y = Math.random() * height;
      }
    };

    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.05;

      const cx = width / 2;
      const cy = height / 2;
      const fov = width * 0.75;
      const isDark = document.documentElement.classList.contains("dark");

      // ==========================================
      // LAYER 1: Small Static Stars with gentle twinkling
      // ==========================================
      for (let i = 0; i < STATIC_STAR_COUNT; i++) {
        const star = staticStars[i];
        const alpha = Math.min(
          0.9,
          Math.max(0.3, star.baseAlpha + Math.sin(time * star.twinkleSpeed * 10 + star.phase) * 0.25)
        );

        ctx.save();
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        if (isDark) {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        } else {
          // Slightly dark and clearly visible in light mode (deep slate / midnight navy)
          ctx.fillStyle = `rgba(30, 41, 59, ${alpha * 0.85})`;
        }
        ctx.fill();
        ctx.restore();
      }

      // ==========================================
      // LAYER 2: 3D Traveling Stars ("Stars going effects" - slightly increased size & count)
      // ==========================================
      for (let i = 0; i < TRAVELING_STAR_COUNT; i++) {
        const star = travelingStars[i];

        star.pz = star.z;
        star.z -= TRAVEL_SPEED;

        // Reset when star reaches the near plane
        if (star.z <= 0) {
          star.z = MAX_DEPTH;
          star.pz = MAX_DEPTH;
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
        }

        const k = fov / star.z;
        const px = cx + star.x * k;
        const py = cy + star.y * k;

        const prevK = fov / star.pz;
        const prevPx = cx + star.x * prevK;
        const prevPy = cy + star.y * prevK;

        if (px < -25 || px > width + 25 || py < -25 || py > height + 25) {
          continue;
        }

        const depthRatio = 1 - star.z / MAX_DEPTH;
        // Slightly increased size: 1.0px up to 2.8px
        const radius = Math.max(1.0, depthRatio * 2.0 + 0.6);
        const alpha = Math.min(0.9, Math.max(0.18, depthRatio * 0.95));

        ctx.save();

        if (isDark) {
          // Glowing white head and ice-cyan streak in dark mode
          ctx.strokeStyle = `rgba(186, 230, 253, ${alpha * 0.65})`;
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        } else {
          // Vivid royal electric blue in light mode
          ctx.strokeStyle = `rgba(37, 99, 235, ${alpha * 0.55})`;
          ctx.fillStyle = `rgba(29, 78, 216, ${alpha * 0.85})`;
        }

        // Motion trail streak
        ctx.lineWidth = radius * 0.9;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(prevPx, prevPy);
        ctx.lineTo(px, py);
        ctx.stroke();

        // Star head circle
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // ==========================================
      // LAYER 3: Majestic Comets Streaking Across the Sky (Both Themes)
      // ==========================================
      for (let i = 0; i < COMET_COUNT; i++) {
        const comet = comets[i];

        if (!comet.active) {
          comet.delayTimer -= 1;
          if (comet.delayTimer <= 0) {
            comet.active = true;
          }
          continue;
        }

        // Advance comet along diagonal trajectory
        comet.x += Math.cos(comet.angle) * comet.speed;
        comet.y += Math.sin(comet.angle) * comet.speed;

        // Calculate tail origin behind the head
        const tailX = comet.x - Math.cos(comet.angle) * comet.length;
        const tailY = comet.y - Math.sin(comet.angle) * comet.length;

        ctx.save();

        // Tail gradient fading from head to transparent
        const tailGradient = ctx.createLinearGradient(tailX, tailY, comet.x, comet.y);

        if (isDark) {
          tailGradient.addColorStop(0, "rgba(56, 189, 248, 0)");
          tailGradient.addColorStop(0.4, "rgba(56, 189, 248, 0.2)");
          tailGradient.addColorStop(0.8, "rgba(186, 230, 253, 0.6)");
          tailGradient.addColorStop(1, "rgba(255, 255, 255, 0.95)");
        } else {
          // Radiant electric blue to sky cyan in light mode
          tailGradient.addColorStop(0, "rgba(14, 165, 233, 0)");
          tailGradient.addColorStop(0.4, "rgba(14, 165, 233, 0.25)");
          tailGradient.addColorStop(0.8, "rgba(37, 99, 235, 0.65)");
          tailGradient.addColorStop(1, "rgba(29, 78, 216, 0.95)");
        }

        // Draw elongated glowing tail line
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(comet.x, comet.y);
        ctx.strokeStyle = tailGradient;
        ctx.lineWidth = comet.size * 1.35;
        ctx.lineCap = "round";
        ctx.stroke();

        // Draw glowing outer aura around comet head
        const glowRadius = comet.size * 2.8;
        const glowGradient = ctx.createRadialGradient(
          comet.x,
          comet.y,
          0,
          comet.x,
          comet.y,
          glowRadius
        );

        if (isDark) {
          glowGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
          glowGradient.addColorStop(0.4, "rgba(56, 189, 248, 0.7)");
          glowGradient.addColorStop(1, "rgba(56, 189, 248, 0)");
        } else {
          glowGradient.addColorStop(0, "rgba(37, 99, 235, 1)");
          glowGradient.addColorStop(0.4, "rgba(14, 165, 233, 0.65)");
          glowGradient.addColorStop(1, "rgba(14, 165, 233, 0)");
        }

        ctx.beginPath();
        ctx.arc(comet.x, comet.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Draw brilliant comet nucleus point
        ctx.beginPath();
        ctx.arc(comet.x, comet.y, comet.size * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "#FFFFFF" : "#1D4ED8";
        ctx.fill();

        ctx.restore();

        // Respawn comet once it traverses past the screen
        if (comet.x > width + 250 || comet.y > height + 250) {
          const newAngle = (Math.PI / 180) * (30 + Math.random() * 18);
          comet.x = (Math.random() - 0.2) * width;
          comet.y = -60 - Math.random() * 80;
          comet.length = Math.random() * 90 + 170;
          comet.speed = Math.random() * 4 + 9;
          comet.size = Math.random() * 1.0 + 2.4;
          comet.angle = newAngle;
          comet.active = false;
          // Random respawn delay (1.5 to 3.5 seconds)
          comet.delayTimer = Math.floor(Math.random() * 120 + 90);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
