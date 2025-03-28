import {SCREEN_HEIGHT, WEBSITE_MESSAGES} from '@/app/secret/page'

import {cn} from '@/lib/utils'

import {SPAN} from '~/UI/Typography'
import Badge from '~/UI/Badge'
import BackgroundImage from '~/UI/BackgroundImage'

export default function IndexPage() {
  return (
    <main className={cn('relative w-screen', SCREEN_HEIGHT)}>
      <div className={cn('relative z-10 size-full', 'px-12 py-5 sm:px-3 flex flex-col justify-end gap-10', 'bg-white text-black')}>
        <div className="grid w-full text-white place-items-center bg-red">some block</div>

        <div className="flex items-center justify-between w-full">
          <Badge content="designed by perevyazkinaaa" href="https://t.me/perevyazkinaaa" />

          <div className="flex flex-col gap-[1px] text-center">
            {WEBSITE_MESSAGES.map((message, index) => (
              <SPAN key={index}>{message}</SPAN>
            ))}
          </div>

          <Badge content="Other" href="https://snable.website" />
        </div>
        <BackgroundImage page="index" />
      </div>
    </main>
  )
}
