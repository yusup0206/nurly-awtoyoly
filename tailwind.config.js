/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#013564',
          // 100: '#566D94',
          // 100: '#1869FE',
          200: '#024c8d',
          // 200: '#1357d4',
          300: '#566d94',
        },
        cBlack: {
          100: '#333',
        },
        transparentBlack: {
          300: 'rgba(0,0,0,0.3)',
          400: 'rgba(0,0,0,0.4)',
          500: 'rgba(0,0,0,0.5)',
        },
      },
    },
  },
  plugins: [],
};
