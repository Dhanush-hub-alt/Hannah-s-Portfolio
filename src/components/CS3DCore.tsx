"use client";

import React, { useEffect, useRef, useState } from "react";
import { Cpu, Terminal, Activity, Zap } from "lucide-react";

interface Node3D {
  x: number;
  y: number;
  z: number;
}

export function CS3DCore() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 360);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 360);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate 3D Cube & Neural Node Vertices for Computer Science Core
    const nodes: Node3D[] = [];
    const size = 95;

    // 8 vertices of outer computing cube
    for (let x of [-1, 1]) {
      for (let y of [-1, 1]) {
        for (let z of [-1, 1]) {
          nodes.push({ x: x * size, y: y * size, z: z * size });
        }
      }
    }

    // 6 central octahedral processing hubs
    nodes.push({ x: 0, y: 0, z: size * 1.3 });
    nodes.push({ x: 0, y: 0, z: -size * 1.3 });
    nodes.push({ x: size * 1.3, y: 0, z: 0 });
    nodes.push({ x: -size * 1.3, y: 0, z: 0 });
    nodes.push({ x: 0, y: size * 1.3, z: 0 });
    nodes.push({ x: 0, y: -size * 1.3, z: 0 });

    // Floating Binary & CS Tokens
    const codeTokens = ["0", "1", "0x77", "C++", "PY", "AI", "RADAR", "DAX", "01", "10", "λ", "{ }"];
    const particles = Array.from({ length: 28 }, (_, i) => ({
      x: (Math.random() - 0.5) * 300,
      y: (Math.random() - 0.5) * 300,
      z: (Math.random() - 0.5) * 300,
      speed: 0.4 + Math.random() * 0.6,
      char: codeTokens[i % codeTokens.length],
      opacity: 0.3 + Math.random() * 0.5,
    }));

    let angleX = 0.005;
    let angleY = 0.008;
    let targetAngleX = 0.005;
    let targetAngleY = 0.008;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      setMousePos({ x, y });
      targetAngleY = x * 0.04;
      targetAngleX = -y * 0.04;
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseenter", () => setIsHovered(true));
    canvas.addEventListener("mouseleave", () => {
      setIsHovered(false);
      targetAngleX = 0.005;
      targetAngleY = 0.008;
    });

    let currentRotX = 0;
    let currentRotY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth rotation velocity interpolation
      angleX += (targetAngleX - angleX) * 0.05;
      angleY += (targetAngleY - angleY) * 0.05;
      currentRotX += angleX;
      currentRotY += angleY;

      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);

      const fov = 340;
      const cx = width / 2;
      const cy = height / 2;

      // Project vertices to 2D screen
      const projectedNodes = nodes.map((node) => {
        // Rotate around Y
        let x1 = node.x * cosY + node.z * sinY;
        let z1 = -node.x * sinY + node.z * cosY;

        // Rotate around X
        let y2 = node.y * cosX - z1 * sinX;
        let z2 = node.y * sinX + z1 * cosX;

        // Perspective scale
        const scale = fov / (fov + z2 + 180);
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          scale,
          z: z2,
        };
      });

      // Draw 3D Edges / Wireframe (HackerRank electric green)
      ctx.lineWidth = 1;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          // Connect adjacent cube edges and octahedral lines
          if (dist < size * 2.1) {
            const avgScale = (projectedNodes[i].scale + projectedNodes[j].scale) / 2;
            const alpha = Math.max(0.1, Math.min(0.65, avgScale * 0.8));
            ctx.strokeStyle = `rgba(0, 234, 100, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projectedNodes[i].x, projectedNodes[i].y);
            ctx.lineTo(projectedNodes[j].x, projectedNodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw Nodes / Processor Vertices
      projectedNodes.forEach((p, idx) => {
        const radius = Math.max(1.8, 3.2 * p.scale);
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = idx >= 8 ? "#FFFFFF" : "#00EA64";
        ctx.shadowColor = "#00EA64";
        ctx.shadowBlur = 10 * p.scale;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Central Quantum / CPU Processor Core
      const centerScale = fov / (fov + 180);
      const coreRadius = 14 * centerScale;
      const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, coreRadius * 2);
      grad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      grad.addColorStop(0.3, "rgba(0, 234, 100, 0.8)");
      grad.addColorStop(1, "rgba(0, 234, 100, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius * 2, 0, Math.PI * 2);
      ctx.fill();

      // Render 3D Floating Binary Tokens
      ctx.font = "10px 'Manrope', monospace";
      ctx.textAlign = "center";
      particles.forEach((pt) => {
        // Orbit particle around Y
        pt.z -= pt.speed;
        if (pt.z < -150) pt.z = 150;

        let px1 = pt.x * cosY + pt.z * sinY;
        let pz1 = -pt.x * sinY + pt.z * cosY;
        let py2 = pt.y * cosX - pz1 * sinX;
        let pz2 = pt.y * sinX + pz1 * cosX;

        const pScale = fov / (fov + pz2 + 180);
        const screenX = cx + px1 * pScale;
        const screenY = cy + py2 * pScale;

        ctx.fillStyle = `rgba(0, 234, 100, ${pt.opacity * pScale})`;
        ctx.fillText(pt.char, screenX, screenY);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[360px] rounded-3xl bg-black/60 border border-[#00EA64]/20 p-4 overflow-hidden backdrop-blur-md shadow-[0_0_35px_rgba(0,234,100,0.12)] group">
      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />

      {/* Top Left Status Badge */}
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E141E]/80 border border-[#00EA64]/30 text-[#00EA64] text-[10px] font-mono tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00EA64] animate-ping" />
        <span>3D CS COMPUTING ENGINE</span>
      </div>

      {/* Bottom Telemetry HUD */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-zinc-400 bg-black/75 px-3 py-1.5 rounded-xl border border-white/5">
        <div className="flex items-center gap-1.5 text-[#00EA64]">
          <Cpu className="w-3 h-3 text-[#00EA64]" />
          <span>ALGORITHMIC MATRIX</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span>INTERACTIVE GYRO 3D</span>
          <span className="text-white">60 FPS</span>
        </div>
      </div>
    </div>
  );
}
