import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        "heroimg": "url('/social.png')",
        "heroimg2": "url('/webdev.png')",
      },
      colors: {
        logowhite: "#eaeff0",
        logoblack: "#222627",
        logoblue: "#275d8c"
      },
      keyframes: {
        herobounce: {
          '0%, 100%': { translate: '0 0'},
          '20%': { translate: '0 -5px'},
          '40%': { translate: '0 -10px'},
          '50%': { translate: '0 -12.5px'},
          '60%': { translate: '0 -10px'},
          '80%': { translate: '0 -5px'},
        },
        
      },
      animation: {
        'herobounce': 'herobounce 3.5s ease-in-out infinite'
      }
    } 
  },
  plugins: [],
};
export default config;
