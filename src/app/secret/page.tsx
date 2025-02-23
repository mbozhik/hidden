import logoImage from '$/logo.svg'
import {cn} from '@/lib/utils'

import Image from 'next/image'

const screenHeight = 'h-screen !h-svh'

export default function SecretPage() {
  return (
    <main className={cn('relative grid place-items-center w-screen bg-red text-white', screenHeight)}>
      <div className="absolute inset-12">
        <Image src={logoImage} alt="h1dden logo" />
      </div>

      <div className="h-full flex flex-col items-center justify-center gap-2">
        <h1>You found the hidden page</h1>
        <p>*аttach the photo of your HIDDEN001 record and enter your email to receive your first code</p>
      </div>

      <div className="absolute bottom-10 text-center">
        {['Anonymous vinyl-only record label', 'Not for the masses', 'Deep & rough cuts'].map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </main>
  )
}
