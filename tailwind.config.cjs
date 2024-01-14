/** @type {import('tailwindcss').Config} */
module.exports = {
  darkmode: "class",
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  }
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("nightwind")],
}

