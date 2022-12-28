/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        toggle: "toggle .3s linear",
      },
      keyframes: {
        toggle: {
          "0%": { transform: "translateY(-8%)", transform: "translateY(-20%)" },
          //  '50%': { transform: 'translate(0,70%)' },

          // '0%,50%': 'opacity-0, mt-[-20%]',
          // '100%': 'opacity-100 mt-0'
        },
      },
    },
    colors: {
      "soft-blue": "hsl(231, 69%, 60%)",
      "grayish-blue": "hsl(229, 8%, 60%)",
      "dark-blue": "hsl(229, 31%, 21%)",
      "soft-red": "hsl(0, 94%, 66%)",
      white: "#fff",
    },
    screens: {
      "3xl": { min: "1536px" },
      // => @media (max-width: 1535px) { ... }

      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "420px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
