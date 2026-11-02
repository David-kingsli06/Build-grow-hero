"use client";

import React, { useEffect, useRef } from "react";

export default function ParticleWave() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle 3D Grid Configuration
    const cols = 65;
    const rows = 40;
    const spacingX = 36;
    const spacingY = 28;

    let time = 0;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 3D camera / projection settings
    const fov = 400;
    const cameraY = -90;
    const cameraZ = -280;

    const render = () => {
      time += 0.016;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // --- Interactive Ambient Mouse Glow Spotlight ---
      const glowGrad = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        420
      );
      glowGrad.addColorStop(0, "rgba(255, 255, 255, 0.065)");
      glowGrad.addColorStop(0.35, "rgba(220, 230, 255, 0.025)");
      glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      const gridCenterX = (cols * spacingX) / 2;
      const gridCenterY = (rows * spacingY) / 2;

      // Mouse influence angles
      const rotY = ((mouseX - width / 2) / width) * 0.22;
      const rotX = 0.52 + ((mouseY - height / 2) / height) * 0.14;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Render points
      for (let iy = 0; iy < rows; iy++) {
        for (let ix = 0; ix < cols; ix++) {
          const x0 = ix * spacingX - gridCenterX;
          const z0 = iy * spacingY - gridCenterY;

          // Undulating wave calculation
          const distFromCenter = Math.sqrt(x0 * x0 + z0 * z0) * 0.0055;
          const wave1 = Math.sin(distFromCenter * 3.8 - time * 1.8) * 32;
          const wave2 = Math.cos(x0 * 0.007 + time * 1.2) * Math.sin(z0 * 0.007 + time * 0.9) * 24;
          const y0 = wave1 + wave2;

          // Rotation around Y
          const x1 = x0 * cosY - z0 * sinY;
          const z1 = x0 * sinY + z0 * cosY;

          // Rotation around X (tilt)
          const y2 = y0 * cosX - (z1 - cameraZ) * sinX;
          const z2 = y0 * sinX + (z1 - cameraZ) * cosX;

          // Apply camera offset
          const camY = y2 - cameraY;
          const camZ = z2 + 420;

          if (camZ > 10) {
            const scale = fov / camZ;
            const screenX = width / 2 + x1 * scale;
            const screenY = height / 2 + 110 + camY * scale;

            // Distance & edge vignette fade
            const normDistEdge = Math.max(
              0,
              1 - Math.hypot(screenX - width / 2, screenY - height / 2) / (Math.max(width, height) * 0.75)
            );

            // Proximity to cursor adds a subtle extra brightness flare to nearby particles
            const distToMouse = Math.hypot(screenX - mouseX, screenY - mouseY);
            const cursorProximityBoost = Math.max(0, 1 - distToMouse / 280) * 0.45;

            const depthFade = Math.min(Math.max((camZ - 100) / 750, 0), 1);
            const baseAlpha = Math.max(0, Math.min(1, (1 - depthFade * 0.5) * normDistEdge * 0.95));
            const finalAlpha = Math.min(1, baseAlpha * 1.25 + cursorProximityBoost);

            if (finalAlpha > 0.05 && screenX >= -20 && screenX <= width + 20 && screenY >= -20 && screenY <= height + 20) {
              const radius = Math.max(1.1, Math.min(2.8, 1.8 * scale)) + (cursorProximityBoost > 0.1 ? 0.4 : 0);

              ctx.beginPath();
              ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha.toFixed(3)})`;
              ctx.fill();

              // Ambient halo glow
              if (scale > 0.9 && finalAlpha > 0.3) {
                ctx.beginPath();
                ctx.arc(screenX, screenY, radius * 2.2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(220, 235, 255, ${(finalAlpha * 0.22).toFixed(3)})`;
                ctx.fill();
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}
