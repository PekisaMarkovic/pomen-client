import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        overlay: "var(--overlay)",
        "overlay-dark": "var(--overlay-dark)",
      },
      boxShadow: {
        faq: "1px 4px 10px 0px #00000040",
        "drop-down": "rgba(64, 64, 65, 0.16) 0px 12px 24px 0px",
      },
      fontFamily: {
        inter: "Montserrat",
      },
      borderWidth: {
        1: "1px",
        5: "5px",
      },
      borderRadius: {
        none: "0",
        xs: "4px",
        "xs-plus": "5px",
        sm: "10px",
        md: "12px",
        large: "18px",
        xl: "23px",
        xxl: "40px",
        "xxl-plus": "48px",
        xxxl: "56px",
        full: "50%",
      },

      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
  },
  plugins: [],
};
export default config;
