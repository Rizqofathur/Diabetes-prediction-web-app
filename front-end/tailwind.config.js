/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FAFFE7',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
