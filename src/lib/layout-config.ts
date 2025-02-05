import type {Metadata} from 'next'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'Hidden Collection',
  description: 'Anonymous vinyl-only record label',
}

export const involve = localFont({
  variable: '--font-involve',
  src: [
    {
      path: '../assets/fonts/Involve-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Involve-Oblique.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
})
