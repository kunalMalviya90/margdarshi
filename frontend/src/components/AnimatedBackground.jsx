import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const AnimatedBackground = () => {
    const { isDark } = useTheme();
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Particle configuration
        const particles = [];
        const particleCount = 50;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size * 3
                );

                if (isDark) {
                    gradient.addColorStop(0, `rgba(255, 215, 0, ${this.opacity})`);
                    gradient.addColorStop(0.5, `rgba(255, 153, 51, ${this.opacity * 0.5})`);
                    gradient.addColorStop(1, 'rgba(255, 153, 51, 0)');
                } else {
                    gradient.addColorStop(0, `rgba(0, 0, 128, ${this.opacity})`);
                    gradient.addColorStop(0.5, `rgba(255, 153, 51, ${this.opacity * 0.5})`);
                    gradient.addColorStop(1, 'rgba(0, 0, 128, 0)');
                }

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isDark]);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Animated gradient background */}
            <motion.div
                className="absolute inset-0 bg-animated-gradient opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: isDark ? 0.6 : 0.8 }}
                transition={{ duration: 1 }}
            />

            {/* Mandala pattern overlay */}
            <div className="absolute inset-0 mandala-bg" />

            {/* Floating particles canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 opacity-70"
            />

            {/* Radial gradient overlay for depth */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: isDark
                        ? 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.8) 100%)'
                        : 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.5) 100%)'
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
