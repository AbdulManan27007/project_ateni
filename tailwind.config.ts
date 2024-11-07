import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom_shadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        softElevatedShadow: "0px 1px 2px 0px #0A0D120D",
        subtleDeepShadow: "0px 1px 2px 0px #1018280D",
        // subtleDeepShadow1: '0px -2px 0px 0px #0A0D120D inset',
        // subtleDeepShadow2: '0px 0px 0px 1px #0A0D122E inset',
      },
      fontSize: {
        h1: ["30px", { lineHeight: "38px" }],
        h2: ["24px", { lineHeight: "32px" }],
        h3: ["18px", { lineHeight: "28px" }],
        h4: ["16px", { lineHeight: "24px" }],
        h5: ["14px", { lineHeight: "20px" }],
      },
      colors: {
        darkGray: "#181D27",
        parrotGreen: "#079455",
        lightGray: "#535862",
        midgray: "#414651",
        blue: "#3373F5",
      },
      fontFamily: {
        plus_jakarta_sans: ["Plus Jakarta Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
