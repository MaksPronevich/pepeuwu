/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      amazing: "Amazing Views",
      jua: "Jua",
    },
    colors: {
      white: "#FFFFFF",
      violet: "#441948",
      "violet-light": "#55306C",
      "purple-light": "#664890",
      purple: "#452D67",
      pink: "#CD4BE9",
      teal: "#79FFF2",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
