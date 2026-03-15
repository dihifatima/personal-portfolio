/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#87C9EB',  // exemple bleu clair de ta palette
        secondary: '#3993B3',
        accent: '#F37000',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'], // ou ta police préférée
      },
    },
  },
  plugins: [],
}