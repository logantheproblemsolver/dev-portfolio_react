module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          '25': '#FFEE21',
        }
        //portfolioYellow: '#FFEE21',
      },
      screens: {
        '1.5xl': '1400px',
        '3xl': '1600px',
      },
      backgroundImage: theme => ({
        'mobileResumeBackground': "url('/src/assets/images/mobileResumeBackground.png')",
        'regularResumeBackground': "url('/src/assets/images/regularResumeBackground.png')",
       })
    },
       
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
