export {metadata} from '@/lib/layout-config'
import {involve} from '@/lib/layout-config'
import '@/app/globals.css'

import Header from '~/Global/Header'
import YandexMetrika from '~/Global/Analytics'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${involve.variable} relative bg-white text-black font-involve antialiased`}>
        <Header />
        {children}

        {process.env.NODE_ENV === 'production' && <YandexMetrika />}
      </body>
    </html>
  )
}
