import {cn} from '@/lib/utils'

import Divider from '~~/index/Divider'
import {H2, H4} from '~/UI/Typography'
import Link from 'next/link'

const RECORDS = {
  1: {
    a1: 'Upper Class',
    a2: 'Dirt300',
    a3: 'Sequoia',
    a4: 'Cool Down',
  },
  2: {
    b1: 'New Hamp',
    b2: 'Tamsyam',
    b3: 'Blade',
  },
}

const RecordsList = ({records}: {records: Record<string, string>}) => (
  <div className="flex flex-col gap-1">
    {Object.entries(records).map(([key, title]) => (
      <H2 className={cn('cursor-pointer border-b-2 border-transparent', 'hover:text-red hover:border-red duration-200')} key={key}>
        {key}. {title}
      </H2>
    ))}
  </div>
)

export default function Player({className}: {className?: string}) {
  return (
    <section data-section="player-index" className={cn(className)}>
      <div>music player</div>

      <Divider />

      <div className="grid grid-cols-2 py-2 xl:py-0">
        <div className="flex gap-28">
          <RecordsList records={RECORDS[1]} />
          <RecordsList records={RECORDS[2]} />
        </div>

        <div className={cn('justify-self-end', 'flex flex-col gap-4 justify-center')}>
          <H4 className="max-w-[29ch] not-italic font-normal">This website contains a hidden page. Find the page to receive your first code.</H4>

          <H4 className="max-w-[29ch] not-italic font-normal">
            <Link href="/secret" className="duration-300 text-red hover:text-red/50">
              «Silence reveals what noises obstruct»
            </Link>{' '}
            – Harpocrates says
          </H4>
        </div>
      </div>
    </section>
  )
}
