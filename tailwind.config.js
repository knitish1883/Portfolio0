/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'void': {
          DEFAULT: '#030308',
          deep: '#06060f',
          light: '#0c0c18',
        },
        'neon-blue': '#4d9fff',
        'neon-violet': '#8b5cf6',
        'neon-cyan': '#22d3ee',
        'neon-purple': '#a855f7',
        'neon-pink': '#ec4899',
        'chrome': {
          white: '#e2e8f0',
          silver: '#94a3b8',
          dim: '#64748b',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(77, 159, 255, 0.4), 0 0 60px rgba(77, 159, 255, 0.1)',
        'glow-violet': '0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.1)',
        'glow-cyan': '0 0 30px rgba(34, 211, 238, 0.4), 0 0 60px rgba(34, 211, 238, 0.1)',
        'glow-soft': '0 0 20px rgba(77, 159, 255, 0.08)',
        'panel': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(77, 159, 255, 0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(34, 211, 238, 0.04) 0px, transparent 50%)',
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-medium': 'float-medium 6s ease-in-out infinite',
        'float-fast': 'float-fast 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      backdropBlur: {
        'xs': '2px',
        '3xl': '64px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
