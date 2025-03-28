import {SCREEN_HEIGHT} from '@/app/secret/page'

import {cn} from '@/lib/utils'

import Info from '~~/index/Info'
import RunningLine from '~~/index/RunningLine'
import BackgroundImage from '~/UI/BackgroundImage'

const websitePX = 'px-12 xl:px-8 sm:px-3'

export default function IndexPage() {
  return (
    <main className={cn('relative w-screen', SCREEN_HEIGHT)}>
      <div className={cn('relative z-10 size-full', 'py-5  flex flex-col justify-end gap-6 sm:gap-5', 'bg-white text-black')}>
        <RunningLine />
        <Info className={websitePX} />

        <BackgroundImage page="index" />
      </div>
    </main>
  )
}
