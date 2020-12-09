/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    ripple: (theme) => ({
      colors: theme('colors'),
      darken: 0.1,
    }),
    screens: {
      sm: { min: '600px' },
      mid: { min: '768px'},
      md: { min: '960px' },
    
      lg: { min: '1264px' },
      xl: { min: '1904px' },
    },
    fill: (theme) => ({
      secondary: theme('colors.secondary'),
      accent: theme('colors.accent'),
      accent2: theme('colors.accent2'),
    }),
    extend: {
      fontSize: {
        xxs: '.625rem',
        tinier: '.813rem',
        '1xl': '1.375rem',
        '2-5xl': '1.75rem',
        '3-5xl': '2rem',
        '4-5xl': '2.5rem',
        'xxs-important': '.625rem !important',
        'tinier-important': '.813rem !important',
        'sm-important': '.875rem !important',
        '1xl-important': '1.375rem !important',
        '2-5xl-important': '1.75rem !important',
        '3-5xl-important': '2rem !important',
        '4-5xl-important': '2.5rem !important',
      },
      colors: {
        primary: {
          default: '#4d31bf',
          light: '#6B4FDD',
          lighter: '#715ACC',
          variant: '#775FDA',
          'variant-light': '#E0D9FF',
          variant1: 'rgba(225, 222, 239, 0.4)',
          variant2: 'rgba(225, 222, 239, 0)',
          variant3: '#6B52D2',
        },
        secondary: {
          default: '#ffc510',
          dark: '#FFC100',
          light: 'rgba(255, 193, 0, 0.6)',
        },
        black: {
          default: '#000000',
          100: 'rgba(0, 0, 0, 0.1)',
          200: 'rgba(0, 0, 0, 0.2)',
          300: 'rgba(0, 0, 0, 0.3)',
          400: 'rgba(0, 0, 0, 0.4)',
          500: 'rgba(0, 0, 0, 0.5)',
          600: 'rgba(0, 0, 0, 0.6)',
          700: 'rgba(0, 0, 0, 0.7)',
          800: 'rgba(0, 0, 0, 0.8)',
          900: 'rgba(0, 0, 0, 0.9)',
        },
        'black-variant': {
          default: '#121212',
          100: 'rgba(18, 18, 18, 0.1)',
          200: 'rgba(18, 18, 18, 0.2)',
          300: 'rgba(18, 18, 18, 0.3)',
          400: 'rgba(18, 18, 18, 0.4)',
          500: 'rgba(18, 18, 18, 0.5)',
          600: 'rgba(18, 18, 18, 0.6)',
          700: 'rgba(18, 18, 18, 0.7)',
          800: 'rgba(18, 18, 18, 0.8)',
          900: 'rgba(18, 18, 18, 0.9)',
        },
        accent: {
          default: '#ea218d',
          light: '#FB0977',
          variant: '#ef2492',
          'variant-light': '#FFDBEE',
        },
        accent2: '#5ee2b3',
        accent3: '#1930AD',
        accent4: '#2C35FF',
        error: {
          default: '#E53E3E',
          light: 'rgba(229, 62, 62, 0.5)',
          lighter: 'rgba(229, 62, 62, 0.2)',
          variant: '#FF6F6F',
        },
        info: '#2196f3',
        success: '#4caf50',
        'success-variant': '#5EE2B3',
        'success-variant1': '#3BD79F',
        warning: '#ffc107',
        'gray-variant': '#c4c4c4',
        'gray-variant1': '#f0f0f0',
        'gray-variant2': '#b5b5b5',
        'gray-variant3': '#8b8b8b',
        'gray-variant4': '#f4f4f4',
        'gray-variant5': '#909090',
        'gray-variant6': '#fafafa',
        'gray-variant7': '#f8f9fa',
        'gray-variant8': '#2D3748',
        Photographers: '#9FEFD2',
        'Catering-Service': '#FFDC70',
        DJs: '#FC6CAD',
        Bouncers: '#9483D9',
        MCs: '#707070',
        Rentals: '#D180D8',
        'dashboard-accent': '#DBFFF2',
        'dashboard-accent-variant': '#22BAB1',
        // ...
      },
      backgroundImage: theme => ({
      
        'card': "url('~@/assets/images/card.svg')",
        }),
      fontFamily: {
        inter: ['Inter'],
        quicksand: ['Quicksand'],
        josefinsans: ['JosefinSans'],
      },
      zIndex: {
        '-1': '-1',
      },
      borderWidth: {
        3: '3px',
      },
      borderRadius: {
        xl: '1rem',
      },
      height: {
        70: '20rem',
      },
      minHeight: {
        260: '65rem',
        220: '55rem',
      },
      margin: {
        7: '1.8rem',
      },
      width: {
        fit: 'fit-content',
        '1-5/12': '12.5%',
        '2-5/12': '20.835%',
        '5-5/12': '45.835%',
        '7-5/12': '61%',
        '9-5/12': '79.165%',
        72: '18rem',
        76: '19rem',
        80: '20rem',
        96: '24rem',
      },
      minWidth: { 76: '19rem' },
      inset: {
        '0-5/12': '4.165%',
        '1-5/12': '12.5%',
        // '2-5/12': '20.835%',
        // '7-5/12': '61%',
        // '9-5/12': '79.165%',
      },
      boxShadow: {
        outline: '0 0 0 0.8px rgba(0, 0, 0, 0.2)',
        'outline-accent': '0 0 0 0.8px #ea218d',
        'outline-primary': '0 0 0 0.5px #775FDA',
        'outline-dashboard-accent': '0 0 0 0.5px #22BAB1',
      },
      translate: {
        '10/12': '83.333333%',
        '5/12': '41.666667%',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    padding: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    margin: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'first'],
    animation: ['responsive', 'hover', 'focus', 'active'],
    transitionProperty: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionDuration: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  // plugins: [require('tailwindcss-ripple')()],
  // purge: {
  //   // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
  //   enabled: process.env.NODE_ENV === 'production',
  //   content: [
  //     'components/**/*.vue',
  //     'layouts/**/*.vue',
  //     'pages/**/*.vue',
  //     'plugins/**/*.js',
  //     'nuxt.config.js',
  //   ],
  // },
}
