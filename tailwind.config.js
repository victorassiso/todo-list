/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,css}'],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#1E6F9F',
        blue: '#4EA8DE',
        'purple-dark': '#5E60CE',
        purple: '#8284FA',
        gray: {
          100: '#F2F2F2 ',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        danger: '#E25858',
      },
    },
  },
  plugins: [],
}
