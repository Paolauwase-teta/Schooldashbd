import type { Config } from "tailwindcss";

const config: Config = {
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
      lamaYellowLight: "#FEFCE8",
      lamaYellow: "#FAE27C",
      lamaSkyLight: "#EDF9FD",
      lamaSky: "#C3EBFA",  
      lamaPurpleLight: "#F1F0FF",
      lamaPurple: "#CFCEFF",
     
    }
    },
    
  },
  plugins: [],
};
export default config;
