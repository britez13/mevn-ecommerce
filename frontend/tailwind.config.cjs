/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto", sans-serif'],
        poppins: ['"Poppins", sans-serif'],
      },
      colors: {
        blackish: "rgba(0, 0, 0, 0.2)",
        // pink: "#ff49db",
      },
    },
  },
  plugins: [],
};
