'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function SpaceBackground() {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animRef = useRef(null);

    const init = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        // Stars
        const stars = Array.from({ length: 200 }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.5 + 0.3,
            opacity: Math.random() * 0.6 + 0.1,
            speed: Math.random() * 0.15 + 0.02,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.02 + 0.005,
        }));

        // Floating particles (larger)
        const particles = Array.from({ length: 40 }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 3 + 1,
            hue: Math.random() > 0.5 ? 220 : 270,
            opacity: Math.random() * 0.3 + 0.05,
            pulse: Math.random() * Math.PI * 2,
        }));

        // Nebula clouds
        const nebulae = Array.from({ length: 6 }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            radius: Math.random() * 300 + 200,
            hue: [220, 260, 280, 190][Math.floor(Math.random() * 4)],
            opacity: Math.random() * 0.04 + 0.01,
            drift: Math.random() * 0.1,
            angle: Math.random() * Math.PI * 2,
        }));

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        const handleMouse = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouse);

        let time = 0;

        const animate = () => {
            time += 0.01;
            ctx.clearRect(0, 0, w, h);

            // Deep void background
            const bg = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.8);
            bg.addColorStop(0, 'rgba(6, 6, 20, 1)');
            bg.addColorStop(0.5, 'rgba(4, 4, 12, 1)');
            bg.addColorStop(1, 'rgba(3, 3, 8, 1)');
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, w, h);

            // Nebulae
            nebulae.forEach((n) => {
                n.angle += n.drift * 0.01;
                const nx = n.x + Math.sin(n.angle) * 30;
                const ny = n.y + Math.cos(n.angle * 0.7) * 20;
                const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, n.radius);
                grad.addColorStop(0, `hsla(${n.hue}, 60%, 40%, ${n.opacity})`);
                grad.addColorStop(0.5, `hsla(${n.hue}, 50%, 30%, ${n.opacity * 0.3})`);
                grad.addColorStop(1, 'transparent');
                ctx.fillStyle = grad;
                ctx.fillRect(nx - n.radius, ny - n.radius, n.radius * 2, n.radius * 2);
            });

            // Stars
            stars.forEach((s) => {
                s.pulse += s.pulseSpeed;
                const flicker = Math.sin(s.pulse) * 0.3 + 0.7;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 210, 255, ${s.opacity * flicker})`;
                ctx.fill();

                // Subtle glow on brighter stars
                if (s.r > 1) {
                    ctx.beginPath();
                    ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(150, 180, 255, ${s.opacity * flicker * 0.1})`;
                    ctx.fill();
                }

                s.y += s.speed;
                if (s.y > h + 5) {
                    s.y = -5;
                    s.x = Math.random() * w;
                }
            });

            // Floating particles with mouse reactivity
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            particles.forEach((p) => {
                // Mouse repulsion
                const dx = p.x - mx;
                const dy = p.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200 && dist > 0) {
                    const force = (200 - dist) / 200 * 0.5;
                    p.vx += (dx / dist) * force * 0.1;
                    p.vy += (dy / dist) * force * 0.1;
                }

                // Friction
                p.vx *= 0.99;
                p.vy *= 0.99;
                p.x += p.vx;
                p.y += p.vy;
                p.pulse += 0.02;

                // Wrap
                if (p.x < -10) p.x = w + 10;
                if (p.x > w + 10) p.x = -10;
                if (p.y < -10) p.y = h + 10;
                if (p.y > h + 10) p.y = -10;

                const glow = Math.sin(p.pulse) * 0.3 + 0.7;

                // Outer glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${p.opacity * glow * 0.15})`;
                ctx.fill();

                // Core
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity * glow})`;
                ctx.fill();
            });

            // Draw connections between close particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 180) {
                        const alpha = (1 - dist / 180) * 0.06;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(120, 160, 255, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Mouse glow orb
            if (mx > 0 && my > 0) {
                const mouseGlow = ctx.createRadialGradient(mx, my, 0, mx, my, 150);
                mouseGlow.addColorStop(0, 'rgba(77, 159, 255, 0.06)');
                mouseGlow.addColorStop(0.5, 'rgba(139, 92, 246, 0.03)');
                mouseGlow.addColorStop(1, 'transparent');
                ctx.fillStyle = mouseGlow;
                ctx.fillRect(mx - 150, my - 150, 300, 300);
            }

            animRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouse);
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, []);

    useEffect(() => {
        const cleanup = init();
        return cleanup;
    }, [init]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full"
            style={{ zIndex: 0 }}
        />
    );
}
