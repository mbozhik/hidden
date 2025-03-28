import {WEBSITE_MESSAGES} from '@/app/secret/page'

import {cn} from '@/lib/utils'

import {H6, SPAN} from '~/UI/Typography'
import Badge from '~/UI/Badge'

export default function Info() {
  return (
    <section data-section="info-index" className="grid items-center w-full grid-cols-3">
      <div className="flex gap-2">
        <Badge content="designed by perevyazkinaaa" href="https://t.me/perevyazkinaaa" />
        <Badge content="developed by bozzhik" href="https://bozzhik.com" />
      </div>

      <div className={cn('justify-self-center', 'flex flex-col gap-[1px] text-center')}>
        {WEBSITE_MESSAGES.map((message, index) => (
          <SPAN key={index}>{message}</SPAN>
        ))}
      </div>

      <div className={cn('justify-self-end', 'flex items-center gap-4')}>
        <H6>2025</H6>

        <div className="flex gap-2">
          <Badge content="@h1ddencollection" href="https://www.instagram.com/h1ddencollection?igsh=enhhejlnaWE2M3U5" />
          <Badge content="hiddencollection.ltd@gmail.com" href="mailto:hiddencollection.ltd@gmail.com" />
        </div>
      </div>
    </section>
  )
}
