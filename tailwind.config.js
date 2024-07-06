/** @type {import('tailwindcss').Config} */
export default {
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      padding: "16px",
      screens: {
        xl: "1332px",
        "2xl": "1332px",
      },
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
