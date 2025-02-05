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
      involve: ['var(--font-involve)', ...fontFamily.sans],
    },
    fontWeight: {
      normal: '400',
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config
