/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#F6D300',
        'nass-black': '#0C0A04',
        olive: '#494118',
        surface: '#EEEDE5',
        'surface-2': '#E5E3D8',
        'off-white': '#F9F8F3',
        primary: '#7A5F00',
        secondary: '#494118',
        bg: '#F9F8F3',
        card: '#E5E3D8',
        border: '#D4D0C4',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      boxShadow: {
        'gold-sm': '0 0 10px rgba(246,211,0,0.35)',
        'gold-md': '0 0 20px rgba(246,211,0,0.45)',
        'gold-lg': '0 0 40px rgba(246,211,0,0.55)',
        'olive-sm': '0 0 10px rgba(73,65,24,0.2)',
        'olive-md': '0 0 20px rgba(73,65,24,0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
        'ticker': 'ticker 35s linear infinite',
        'bounce-gold': 'bounceGold 1.8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGold: {
          '0%,100%': { boxShadow: '0 0 8px rgba(246,211,0,0.2)' },
          '50%': { boxShadow: '0 0 28px rgba(246,211,0,0.5)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        bounceGold: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}
