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
        }
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.25rem' }],    // 13px (was ~12px)
        sm: ['0.9375rem', { lineHeight: '1.375rem' }],   // 15px (was ~14px)
        base: ['1.0625rem', { lineHeight: '1.625rem' }], // 17px (was 16px)
        lg: ['1.1875rem', { lineHeight: '1.75rem' }],    // 19px (was ~18px)
        xl: ['1.3125rem', { lineHeight: '1.875rem' }],   // 21px (was 20px)
      },
    },
  },
  plugins: [],
}
