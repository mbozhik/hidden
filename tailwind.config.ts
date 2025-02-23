import type {Config} from 'tailwindcss'
import {fontFamily} from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xl: {max: '1780px'},
      sm: {max: '500px'},
    },
    fontFamily: {
      involve: ['var(--font-gilroy)', ...fontFamily.sans],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      semibold: '600',
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gray: '#D9D9D9',
      red: '#C20000',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config
