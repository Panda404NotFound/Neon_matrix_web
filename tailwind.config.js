/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'synth-green': '#00FF85',
        'synth-green-dark': '#00CC6A',
        'synth-black': '#0F0F0F',
        'synth-gray-dark': '#1A1A1A',
        'synth-gray': '#333333',
        'synth-gray-light': '#9CA3AF',
        'synth-white': '#F9F9F9',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 255, 133, 0.05), 0 2px 4px -1px rgba(0, 255, 133, 0.03)',
        'glow': '0 0 15px rgba(0, 255, 133, 0.15)',
      },
      backdropFilter: {
        'blur-sm': 'blur(4px)',
        'blur-md': 'blur(8px)',
        'blur-lg': 'blur(16px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-soft': 'linear-gradient(to right, rgba(0, 255, 133, 0.05), rgba(0, 255, 133, 0))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#F9F9F9',
            a: {
              color: '#00FF85',
              '&:hover': {
                color: '#00CC6A',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-blur': {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(15, 15, 15, 0.7)',
        },
        '.border-synth': {
          borderColor: 'rgba(0, 255, 133, 0.3)',
        },
      };
      addUtilities(newUtilities);
    }
  ],
} 