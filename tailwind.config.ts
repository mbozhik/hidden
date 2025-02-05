import type {Config} from 'tailwindcss'
import {fontFamily} from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      involve: ['var(--font-involve)', ...fontFamily.sans],
    },
    fontWeight: {
      normal: '400',
    },
    colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config
