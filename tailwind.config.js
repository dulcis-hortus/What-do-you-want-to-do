/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        crackle: "crackle 1s ease-in-out infinite",
      },
      keyframes: {
        crackle: {
          "0%, 100%": { transform: "rotate(-35deg)" },
          "50%": { transform: "rotate(35deg)" },
        },
      },
    },

    fontFamily: {
      Cafe24Shiningstar: ["Cafe24Shiningstar"],
    },
  },
  plugins: [],
};
