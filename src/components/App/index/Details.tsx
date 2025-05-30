import {cn} from '@/lib/utils'

import Link from 'next/link'
import {H4} from '~/UI/Typography'

export default function Details({view, className}: {view: 'desktop' | 'mobile'; className?: string}) {
  const isDesktop = view === 'desktop'

  return (
    <div data-block="details-player" className={cn('flex flex-col gap-4 justify-center', isDesktop ? 'sm:hidden' : 'hidden sm:flex', className)}>
      <H4 className="max-w-[29ch] not-italic font-normal">
        <Link href="/secret" className="duration-300 text-red hover:text-red/50">
          «Silence reveals what noises obstruct»
        </Link>{' '}
        – Harpocrates says
      </H4>
    </div>
  )
}
