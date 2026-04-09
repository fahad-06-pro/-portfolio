/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        galaxy: {
          bg: '#0B0C2A',
          primary: '#7B2FBE',
          accent: '#00D4FF',
          highlight: '#FF6B6B',
          text: '#FFFFFF',
          muted: '#8892B0',
          card: '#12144A',
          border: '#1E2050',
        },
        light: {
          bg: '#F8F9FF',
          primary: '#7B2FBE',
          accent: '#5B8DEF',
          highlight: '#FF6B6B',
          text: '#0B0C2A',
          muted: '#4A5568',
          card: '#FFFFFF',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #7B2FBE, 0 0 10px #7B2FBE' },
          '100%': { boxShadow: '0 0 20px #00D4FF, 0 0 40px #00D4FF' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'galaxy-gradient': 'linear-gradient(135deg, #0B0C2A 0%, #1a1b4b 50%, #0B0C2A 100%)',
        'purple-glow': 'radial-gradient(circle, #7B2FBE 0%, transparent 70%)',
        'cyan-glow': 'radial-gradient(circle, #00D4FF 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, #12144A 0%, #1E2050 100%)',
        'hero-gradient': 'linear-gradient(135deg, #0B0C2A 0%, #1a1b4b 100%)',
      },
      boxShadow: {
        'galaxy': '0 0 30px rgba(123, 47, 190, 0.3)',
        'cyan': '0 0 30px rgba(0, 212, 255, 0.3)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glow-purple': '0 0 20px rgba(123, 47, 190, 0.5)',
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.5)',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}