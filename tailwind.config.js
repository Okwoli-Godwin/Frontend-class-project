/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'one': '#fd7e14'
      },

      keyframes: {
        slideDown: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      }
    },
  },
  plugins: [],
}
