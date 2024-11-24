/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        "50%": "50%",
        16: "4rem",
      },
      backgroundImage: {
        "react-logo": "url('/src/assets/react.svg')",
      },
      backgroundOpacity: {
        10: "0.1",
        20: "0.2",
        50: "0.5",
        75: "0.75",
      },
    },
  },
  plugins: [],
};
