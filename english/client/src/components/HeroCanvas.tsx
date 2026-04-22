/*
 * HeroCanvas — Machine Society v7
 * Design: Ink & Void / Sci-fi restraint
 *
 * v7 changes:
 * - COUNT: 55 → 75 nodes
 * - NODE_ALPHA: 0.28 → 0.45
 * - EDGE_ALPHA_MAX: 0.10 → 0.18
 * - LINK_DIST: 160 → 180px
 * - Scan line opacity doubled, speed slightly increased
 */

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let scanY = -100;

    const getW = () => canvas.offsetWidth;
    const getH = () => canvas.offsetHeight;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = getW() * dpr;
      canvas.height = getH() * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── Particles ─────────────────────────────────────────────
    const COUNT = 75;
    const particles: Particle[] = [];

    const spawnParticles = () => {
      const w = getW();
      const h = getH();
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.5 + 0.5,
        });
      }
    };
    spawnParticles();

    // ── Animation loop ─────────────────────────────────────────
    const LINK_DIST = 180;
    const NODE_ALPHA = 0.45;
    const EDGE_ALPHA_MAX = 0.18;
    const SCAN_SPEED = 0.7;

    const draw = () => {
      const w = getW();
      const h = getH();

      ctx.clearRect(0, 0, w, h);

      // Update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      // Draw edges
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = EDGE_ALPHA_MAX * (1 - dist / LINK_DIST);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(140, 175, 230, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160, 195, 245, ${NODE_ALPHA})`;
        ctx.fill();
      }

      // Scan line sweep
      scanY += SCAN_SPEED;
      if (scanY > h + 100) scanY = -100;

      const scanGrad = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50);
      scanGrad.addColorStop(0, "rgba(100, 160, 255, 0)");
      scanGrad.addColorStop(0.5, "rgba(100, 160, 255, 0.08)");
      scanGrad.addColorStop(1, "rgba(100, 160, 255, 0)");
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 50, w, 100);

      // Thin bright line at scan center
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(w, scanY);
      ctx.strokeStyle = "rgba(140, 190, 255, 0.12)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
