/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#FFDD00', // Amarillo brillante moderno
          'dark': '#FFC700',  // Amarillo dorado
          'light': '#FFF5CC', // Amarillo pálido
          'accent': '#FFB800', // Amarillo ámbar para acentos
        },
        'neutral': {
          DEFAULT: '#1A1A1A', // Negro rico
          'dark': '#000000',  // Negro puro
          'light': '#2D2D2D', // Negro carbón
          'gray': '#ADADAD',  // Gris neutro
          'light-gray': '#F5F5F5', // Gris muy claro
        },
      },
    },
  },
  plugins: [],
}
