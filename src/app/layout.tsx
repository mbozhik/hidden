export {metadata} from '@/lib/layout-config'
import {involve} from '@/lib/layout-config'
import './globals.css'

import YandexMetrika from '@/app/components/Global/Analytics'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${involve.variable} font-involve antialiased`}>
        {children}

        {process.env.NODE_ENV === 'production' && <YandexMetrika />}
      </body>
    </html>
  )
}
