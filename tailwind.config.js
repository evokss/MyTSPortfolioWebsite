/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slow-up-down": "updown 8s ease-in-out infinite", // Smooth up-and-down motion
        twinkle: "twinkle 3s infinite",
      },
      keyframes: {
        updown: {
          "0%, 100%": {
            transform: "translateY(-10px)", // Moves up by 20px
          },
          "50%": {
            transform: "translateY(10px)", // Moves down by 20px
          },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "0.2" },
        },
      },
    },
  },
  plugins: [],
};
