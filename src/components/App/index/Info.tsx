import {WEBSITE_MESSAGES} from '@/app/secret/page'

import {cn} from '@/lib/utils'

import {H6, SPAN} from '~/UI/Typography'
import Badge from '~/UI/Badge'

export default function Info({className}: {className?: string}) {
  return (
    <section data-section="info-index" className={cn('grid items-center w-full grid-cols-3 sm:grid-cols-1', className)}>
      <div className="flex gap-2 sm:hidden">
        <Badge content="design — perevyazkinaaa" href="https://www.behance.net/c53dab80" />
        <Badge content="dev — bozzhik" href="https://bozzhik.com" />
      </div>

      <div className={cn('justify-self-center', 'flex flex-col gap-[1px] text-center')}>
        {WEBSITE_MESSAGES.map((message, index) => (
          <SPAN key={index}>{message}</SPAN>
        ))}
      </div>

      <div className={cn('justify-self-end', 'flex items-center gap-4')}>
        <H6 className="xl:hidden">2025</H6>

        <div className="flex gap-2 sm:hidden">
          <Badge content="@h1ddencollection" href="https://www.instagram.com/h1ddencollection?igsh=enhhejlnaWE2M3U5" />
          <Badge content="hiddencollection.ltd@gmail.com" href="mailto:hiddencollection.ltd@gmail.com" />
        </div>
      </div>
    </section>
  )
}
