"use client";

import React, { useEffect, useRef, useState } from "react";
import { Cpu, Terminal, Activity } from "lucide-react";

interface Node3D {
  x: number;
  y: number;
  z: number;
}

export function CS3DCore() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 360);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 340);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate 3D Cube & Neural Node Vertices for Computer Science Core
    const nodes: Node3D[] = [];
    const size = 90;

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
    const codeTokens = ["0", "1", "0x77", "C++", "PYTHON", "AI", "RADAR", "DAX", "01", "10", "λ", "{ }", "O(1)"];
    const particles = Array.from({ length: 24 }, (_, i) => ({
      x: (Math.random() - 0.5) * 280,
      y: (Math.random() - 0.5) * 280,
      z: (Math.random() - 0.5) * 280,
      speed: 0.35 + Math.random() * 0.45,
      char: codeTokens[i % codeTokens.length],
      opacity: 0.4 + Math.random() * 0.4,
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
      targetAngleY = x * 0.035;
      targetAngleX = -y * 0.035;
    };

    canvas.addEventListener("mousemove", onMouseMove);

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
        let x1 = node.x * cosY + node.z * sinY;
        let z1 = -node.x * sinY + node.z * cosY;
        let y2 = node.y * cosX - z1 * sinX;
        let z2 = node.y * sinX + z1 * cosX;

        const scale = fov / (fov + z2 + 180);
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          scale,
          z: z2,
        };
      });

      // Draw 3D Edges / Wireframe (Flat Solid Green - NO GLOW)
      ctx.lineWidth = 1.2;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < size * 2.1) {
            const avgScale = (projectedNodes[i].scale + projectedNodes[j].scale) / 2;
            const alpha = Math.max(0.2, Math.min(0.85, avgScale * 0.9));
            ctx.strokeStyle = `rgba(0, 234, 100, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projectedNodes[i].x, projectedNodes[i].y);
            ctx.lineTo(projectedNodes[j].x, projectedNodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw Nodes / Processor Vertices (Crisp Flat Circles - NO GLOW)
      projectedNodes.forEach((p, idx) => {
        const radius = Math.max(2, 3.5 * p.scale);
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = idx >= 8 ? "#FFFFFF" : "#00EA64";
        ctx.fill();
      });

      // Central Quantum CPU Core (Solid Green Circle with Border)
      const centerScale = fov / (fov + 180);
      const coreRadius = 8 * centerScale;
      ctx.fillStyle = "#00EA64";
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Render 3D Floating Binary Tokens (Solid Green text)
      ctx.font = "11px 'Manrope', monospace";
      ctx.textAlign = "center";
      particles.forEach((pt) => {
        pt.z -= pt.speed;
        if (pt.z < -140) pt.z = 140;

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
    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[350px] rounded-2xl bg-black border border-[#00EA64]/30 p-3 overflow-hidden">
      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />

      {/* Top Left Badge */}
      <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-md bg-black border border-[#00EA64]/40 text-[#00EA64] text-[10px] font-mono tracking-wider font-bold">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00EA64]" />
        <span>3D CS COMPUTING ENGINE</span>
      </div>

      {/* Bottom Telemetry HUD */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-[#A7F3D0] bg-black px-3 py-1.5 rounded-lg border border-[#00EA64]/20">
        <div className="flex items-center gap-1.5 text-[#00EA64] font-semibold">
          <Cpu className="w-3.5 h-3.5 text-[#00EA64]" />
          <span>ALGORITHMIC MATRIX</span>
        </div>
        <div className="flex items-center gap-3">
          <span>GYRO 3D</span>
          <span className="text-[#00EA64] font-bold">60 FPS</span>
        </div>
      </div>
    </div>
  );
}
