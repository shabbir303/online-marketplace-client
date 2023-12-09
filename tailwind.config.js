/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
    // "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        Montstreet: ['Montserrat', "sans-serif"]
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui"),
            require('preline/plugin'),
            require('@sira-ui/tailwind') ,
            // require('flowbite/plugin')       
  ],
}

