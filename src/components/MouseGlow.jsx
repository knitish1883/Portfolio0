'use client';

import { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      glow.style.left = clientX - 75 + 'px';
      glow.style.top = clientY - 75 + 'px';
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed w-40 h-40 rounded-full pointer-events-none opacity-20 blur-3xl"
      style={{
        background: 'radial-gradient(circle, #00d9ff 0%, transparent 70%)',
        zIndex: 1,
      }}
    />
  );
}
