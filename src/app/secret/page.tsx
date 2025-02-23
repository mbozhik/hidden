import logoImage from '$/logo.svg'
import secretBgImage from '$/secret-bg.jpg'

import {cn} from '@/lib/utils'

import Image from 'next/image'
import {H1, P, SPAN, typoClasses} from '~/UI/Typography'

const screenHeight = 'h-screen !h-svh'

export default function SecretPage() {
  return (
    <main className={cn('relative w-screen', screenHeight)}>
      <div className="relative z-10 size-full grid place-items-center bg-red text-white">
        <div className="absolute inset-12 size-fit">
          <Image src={logoImage} alt="h1dden logo" />
        </div>

        <div className="h-full grid place-items-center">
          <section className={cn('px-12 py-10 flex flex-col items-center justify-center gap-10', 'border border-white rounded-[50px]')}>
            <input className={cn('w-full px-8 py-5 outline-none', typoClasses.h4, 'bg-red text-white placeholder:text-white border border-white rounded-[50px]')} type="email" placeholder="e-mail" />

            <div className="space-y-6">
              <H1>You found the hidden page</H1>
              <P className="text-center">
                *аttach the photo of your HIDDEN001 record <br /> and enter your email to receive <br /> your first code
              </P>
            </div>

            <div className="p-[3px] border border-transparent bg-red rounded-[50px] group duration-300 hover:border-white/70">
              <button className="px-12 py-2 bg-white text-red rounded-[50px] font-medium group-hover:shadow-2xl shadow-black duration-300">
                <H1>SEND</H1>
              </button>
            </div>
          </section>
        </div>

        <div className="absolute bottom-5 flex flex-col gap-0.5 text-center">
          {['Anonymous vinyl-only record label', 'Not for the masses', 'Deep & rough cuts'].map((message, index) => (
            <SPAN key={index}>{message}</SPAN>
          ))}
        </div>

        <div className="absolute inset-0 -z-20 grid place-items-center h-full">
          <Image quality={100} priority className="absolute object-contain h-full opacity-80" src={secretBgImage} alt="h1dden secret background" />
        </div>
      </div>
    </main>
  )
}
