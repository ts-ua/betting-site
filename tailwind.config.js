/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      letterSpacing: {
        'extra-widest': '0.15em', // Custom value for extra wide spacing
      },
      textShadow: {
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        md: '3px 3px 5px rgba(0, 0, 0, 0.5)',
        lg: '4px 4px 6px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
      spicy: ['"Spicy Rice"', 'cursive'],
      roboto: ['Roboto', 'sans-serif'],
        barlow: ['"Barlow Semi Condensed"', 'sans-serif'],
        righteous: ['Righteous', 'sans-serif'],
      // Add Roboto as a custom font
    },
      colors: {
        darkGray: " #2D1D4C",
        lightBlue: "#5DC2FA",
        violet: "#8158E7",
        darkViolet: '#11112D',
        table_head: "#19193C",
        table_body: "#35235B",
        lightGreen: "#00FF93",
        modalbody: "#22224B",
        modalborder:"#4E2DA0",
      },
      fontSize: {
        lg: "37px"
      },
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2rem',
      },
    },
  },
   plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 6px rgba(0, 0, 0, 0.9)',
        },
      }, ['responsive', 'hover'])
    }
  ],
}

