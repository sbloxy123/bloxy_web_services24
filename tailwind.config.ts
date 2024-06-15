import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        theme_green: {
          900: "rgb(180, 217, 153, 1)",
        },
        theme_peach: {
          900: "rgb(247, 214, 182, 1)",
        },
        theme_white: {
          900: "rgb(247, 248, 250, 1)",
        },
        theme_brown: {
          900: "rgb(115, 81, 80, 1)",
        },
        theme_dark_brown: {
          900: "rgb(46, 33, 34, 1)",
        },
        theme_gray: {
          900: "rgb(213, 218, 224, 1)",
        },
        theme_black: {
          900: "rgb(15, 22, 36, 1)",
        },
        theme_yellow: {
          900: "rgb(246, 249, 163, 1)",
        },
        theme_light_orange: {
          900: "rgb(250, 222, 89, 1)",
        },
        theme_dark_orange: {
          900: "rgb(212, 135, 50, 1)",
        },
        hero_light_orange: {
          900: "rgb(255, 175, 122, 1)",
        },
        hero_dark_orange: {
          900: "rgb(255, 120, 31, 1)",
        },
      },
      fontFamily: {
        sans: [
          "var--font-mulish",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ],
        display: ["var--font-poppins"],
      },
      screens: {
        "2xsmall": "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      padding: {
        "layout-small": "clamp(8rem,11.1vw,16rem)", // Define your custom padding size here
      },
      margin: {
        "section-gap": "64px",
        "section-gap-xsmall": "72px",
        "section-gap-small": "80px",
        "layout-small": "clamp(8rem,11.1vw,16rem)",
      },
    },
  },
  plugins: [],
};
export default config;
