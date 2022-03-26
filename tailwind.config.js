module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
   
      fontFamily:{
        'pokemon-hollow':['pkmh','cursive'],
        'pokemon-solid':['pkms','cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
