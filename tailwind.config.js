/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A1628',
          blue: '#0B4EA2',
          orange: '#E8631B',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-28px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(28px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'scale-in-bounce': {
          '0%':   { opacity: '0', transform: 'scale(0.85)' },
          '60%':  { opacity: '1', transform: 'scale(1.04)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'dropdown': {
          '0%': { opacity: '0', transform: 'translate(-50%, -6px)' },
          '100%': { opacity: '1', transform: 'translate(-50%, 0)' },
        },
        'counter': {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-6px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232, 99, 27, 0.0)' },
          '50%':       { boxShadow: '0 0 20px 4px rgba(232, 99, 27, 0.18)' },
        },
        'line-grow': {
          '0%':   { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
      },
      animation: {
        'fade-in-up':      'fade-in-up 0.55s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in-left':    'fade-in-left 0.55s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in-right':   'fade-in-right 0.55s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in':         'fade-in 0.4s ease-out both',
        'scale-in':        'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
        'scale-in-bounce': 'scale-in-bounce 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-down':      'slide-down 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'dropdown':        'dropdown 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'counter':         'counter 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        'float':           'float 3s ease-in-out infinite',
        'glow-pulse':      'glow-pulse 2.5s ease-in-out infinite',
        'shimmer':         'shimmer 2.5s linear infinite',
        'line-grow':       'line-grow 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
