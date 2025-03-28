import {SCREEN_HEIGHT} from '@/app/secret/page'

import {cn} from '@/lib/utils'

import Info from '~~/index/Info'
import BackgroundImage from '~/UI/BackgroundImage'

export default function IndexPage() {
  return (
    <main className={cn('relative w-screen', SCREEN_HEIGHT)}>
      <div className={cn('relative z-10 size-full', 'px-12 py-5 sm:px-3 flex flex-col justify-end gap-10', 'bg-white text-black')}>
        <div className="grid w-full text-white place-items-center bg-red">some block</div>

        <Info />

        <BackgroundImage page="index" />
      </div>
    </main>
  )
}
