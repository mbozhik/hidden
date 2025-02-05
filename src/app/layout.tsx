export {metadata} from '@/lib/layout-config'
import {involve} from '@/lib/layout-config'
import '@/app/globals.css'

import YandexMetrika from '~/Global/Analytics'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${involve.variable} bg-white text-black font-involve antialiased`}>
        {children}

        {process.env.NODE_ENV === 'production' && <YandexMetrika />}
      </body>
    </html>
  )
}
