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
        softElevatedShadow: "0px 1px 2px 0px #0A0D120D",
        subtleDeepShadow: "0px 1px 2px 0px #1018280D",
        'custom-light': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',      
        'custom-top-inset': '0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset',
        'custom-border-inset': '0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset',
        'custom_shadow': '0px 1px 2px 0px rgba(10, 13, 18, 0.05)',
        
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
