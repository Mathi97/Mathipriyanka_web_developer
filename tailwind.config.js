/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  plugins: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      tertiary: '#aaa',
      text_on_primary: '#155270'
    },
    extend: {
      maxWidth: {
        '1/2': '50%',
      }
    },
  },
}

