/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Poppins", "sans-serif"]
      },

    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}