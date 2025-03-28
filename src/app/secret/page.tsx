import logoImage from '$/logo.svg'
import secretBgImage from '$/secret-bg.jpg'

import {cn} from '@/lib/utils'

import Image from 'next/image'
import {SPAN} from '~/UI/Typography'
import SecretForm from '~~/secret/SecretForm'

const screenHeight = 'h-screen !h-svh'

export default function SecretPage() {
  return (
    <main className={cn('relative w-screen', screenHeight)}>
      <div className="relative z-10 size-full grid place-items-center bg-red text-white">
        <div className="absolute inset-12 sm:inset-3 size-fit xl:size-[17vw] sm:size-[40vw]">
          <Image src={logoImage} alt="h1dden logo" />
        </div>

        <div className="h-full grid place-items-center sm:px-2">
          <SecretForm />
        </div>

        <div className="absolute bottom-5 flex flex-col gap-0.5 text-center">
          {['Anonymous vinyl-only record label', 'Not for the masses', 'Deep & rough cuts'].map((message, index) => (
            <SPAN key={index}>{message}</SPAN>
          ))}
        </div>

        <div className="absolute inset-0 -z-20 grid place-items-center h-full">
          <Image quality={100} priority className="absolute object-contain sm:object-cover h-full opacity-95" src={secretBgImage} alt="h1dden secret background" />
        </div>
      </div>
    </main>
  )
}
