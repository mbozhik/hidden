import type {Config} from 'tailwindcss'
import {fontFamily} from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      mono: ['var(--font-geist-mono)', ...fontFamily.mono],
    },
    colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config
