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
      medium: '500',
      semibold: '600',
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gray: '#D9D9D9',
      red: '#C20000',
      transparent: 'transparent',
    },
    extend: {
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        marquee: {
          from: {transform: 'translateX(0)'},
          to: {transform: 'translateX(calc(-100% - var(--gap)))'},
        },
        'marquee-vertical': {
          from: {transform: 'translateY(0)'},
          to: {transform: 'translateY(calc(-100% - var(--gap)))'},
        },
      },
    },
  },
  plugins: [],
} satisfies Config
