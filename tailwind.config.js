/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "997px",
        // => @media (min-width: 768px) { ... }

        lg: "1408px",
        // => @media (min-width: 1024px) { ... }

        xl: "1680px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
};
