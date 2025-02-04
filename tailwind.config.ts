import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        
        darkPurple: "#2E294E",
        subtleGray: "#D1D5DB",
      }
    },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl':  '1280px',
        '2xl':  '1536px',
        'custom': '1400px',
      
    },
  },
  plugins: [],
 
  };

