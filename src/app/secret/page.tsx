import {cn} from '@/lib/utils'

import {SPAN} from '~/UI/Typography'
import SecretForm from '~~/secret/SecretForm'
import BackgroundImage from '~/UI/BackgroundImage'

export const SCREEN_HEIGHT = 'h-screen !h-svh'

export const WEBSITE_MESSAGES = ['Anonymous vinyl-only record label', 'Not for the masses', 'Deep & rough cuts']

export default function SecretPage() {
  return (
    <main className={cn('relative w-screen', SCREEN_HEIGHT)}>
      <div className="relative z-10 size-full grid place-items-center bg-red text-white">
        <div className="h-full grid place-items-center sm:px-2">
          <SecretForm />
        </div>

        <div className="absolute bottom-5 flex flex-col gap-[1px]  text-center">
          {WEBSITE_MESSAGES.map((message, index) => (
            <SPAN key={index}>{message}</SPAN>
          ))}
        </div>

        <BackgroundImage page="secret" />
      </div>
    </main>
  )
}
