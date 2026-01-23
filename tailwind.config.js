/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#111111',
          light: '#1a1a1a',
        },
        bg: {
          primary: '#0a0a0a',
          secondary: '#111111',
          card: 'rgba(23, 23, 23, 0.5)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      spacing: {
        'section': '3rem', // 48px
        'section-lg': '4rem', // 64px
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      transitionDuration: {
        '400': '400ms',
      },
      screens: {
        'touch': { 'raw': '(hover: hover) and (pointer: fine)' },
      },
    },
  },
  plugins: [],
}
