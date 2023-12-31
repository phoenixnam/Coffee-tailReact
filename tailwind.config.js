/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#9bce26',
        'price': '#f27370',
        'footer': '#666',
        'coffee-200': '#C89F94',
        'coffee-400': '#A25F4B',
        'coffe-600': '#744838'
      },
      screens: {
        'xxs': '70px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        fadeIn: {from: {opacity: 0}, to: {opacity: 1}}
      },
      animation: {
        fadeIn :'fadeIn .5s ease-in-out'
      },
      margin: {
        'xs': '-16px',
      },
      maxHeight: {
        'h-[540px]': '540px'
      },
    },
  },
  plugins: [],
}

