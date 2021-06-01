module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        hero: "url('@/assets/images/hero.webp')"
      }),
      fontFamily: {
        Rubik: 'Rubik',
        Inter: 'Inter'
      },
      fontSize: {
        hero: '110px',
        heading: '240px',
        '70px': '70px',
        '60px': '60px',
        '30px': '30px',
        '25px': '25px',
        '15px': '15px'
      },
      colors: {
        primary: '#2f80ed',
        secondary: '#ffa41b',
        black: '#101010',
        gray: '#eeeeee',
        lightGray: '#686868',
        darkGray: '#242424',
        borderGray: '#404040'
      },
      width: {
        '180px': '180px'
      },
      height: {
        '56px': '56px'
      }
    }
  },
  variants: {
    extend: {
      grayscale: ['hover', 'focus']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
