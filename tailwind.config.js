/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'meu-background': '#140312', // Substitua 'SUA_COR_HEX' pela sua cor personalizada em hexadecimal
        'corPadrao': '#1F2B39',
        'corContraste': '#6F77C3'
      },
    },
  },
  plugins: [],
}

