/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        aura: '#fece01',
        offblack: '#0d0d0d',
      },
    },
  },
  plugins: [],
}
