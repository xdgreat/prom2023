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
      colors: {
        text: "hsl(0, 0%, 100%)",
        background: "hsl(0, 0%, 0%)",
        primary: "hsl(249, 66%, 45%)",
        secondary: "hsl(0, 0%, 19%)",
        accent: "hsl(334, 75%, 47%)",
      },
    },
  },
  plugins: [],
};
