import type {Metadata} from 'next'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'Hidden Collection',
  description: 'Anonymous vinyl-only record label',
}

export const involve = localFont({
  variable: '--font-gilroy',
  src: [
    {
      path: '../assets/fonts/Gilroy-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Gilroy-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Gilroy-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Gilroy-SemiboldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
  ],
})
