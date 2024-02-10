/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        rocketseat: "#8257e6",
        rocketseatFocus: "#D64AFF",
        rocketseatHover: "#CB61CD",
        rocketseatBG: "#260131",
        rocketseatText: "#210222",
        rocketseatTextLight: "#BA26FF",
      },
      fontFamily: {
        sans: ["Inter", "sans-sefir"],
      },
    },
  },
  plugins: [],
}
