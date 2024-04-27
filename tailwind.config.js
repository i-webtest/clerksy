/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        // textMain: '#163a24',
      },
      backgroundColor: {
        bgMain: '#163a24',
        bgButton: '#198C36',
      },

      padding: {
        paddingBtn: '15px 25px',
      },

      borderRadius: {
        rBtn: '160px',
      },

      screens: {
        sm: '520px',
        md: '768px',
        lg: '1024px',
      },
    },
  },
  plugins: [],
};
