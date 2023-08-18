/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors:{
        Orange: "#ffa500",
        // brightOrange: "#FFA41B",
        darkOrange: "#fa9806",
        RedOrange: "#572301",
        // black: "#000000",
        // antiquewhite: '#fff3e2',
        // thickSkyBlue: "#161B40",
        white: '#ffffff',
        azure: "#f0ffff",
        grayishBlack: "#0c0c0c",
        grayishBlack2: "#5f5d5d",
        // puffOrange: "#FFD6A5",
        // whitishOrange: "#c4893d",
        hrColor: "#5f5d5d ",
        random1: "#abcdef",
        random2: "#a22def",
        random3: "#4bcd01",
        random4: "#334bca",
      }
    },
  },
  plugins: [],
}

