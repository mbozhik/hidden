import {cn} from '@/lib/utils'

import {H2} from '~/UI/Typography'
import Divider from '~~/index/Divider'
import Details from '~~/index/Details'

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
  <div className="flex flex-col gap-1 sm:gap-2">
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
      <Details view="mobile" />

      <div>music player</div>

      <Divider className="sm:hidden" />

      <div className="grid grid-cols-2 py-1 sm:flex sm:flex-col-reverse xl:py-0 sm:pt-4 sm:pb-10">
        <div className="flex gap-28 sm:gap-0 sm:justify-between">
          <RecordsList records={RECORDS[1]} />
          <RecordsList records={RECORDS[2]} />
        </div>

        <Details className="justify-self-end" view="desktop" />
      </div>
    </section>
  )
}
