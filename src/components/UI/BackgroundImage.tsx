import indexBgImage from '$/index-bg.png'
import secretBgImage from '$/secret-bg.jpg'
import {cn} from '@/lib/utils'

import Image from 'next/image'

export default function BackgroundImage({page}: {page: 'index' | 'secret'}) {
  const secretPage = page === 'secret'
  return (
    <div className="absolute inset-0 grid h-full -z-20 place-items-center">
      <Image priority quality={100} className={cn('absolute object-contain sm:object-cover h-full sm:opacity-70', secretPage && 'opacity-95')} src={secretPage ? secretBgImage : indexBgImage} alt="h1dden secret background" />

      {page === 'index' && <div className="absolute bottom-0 w-full h-[10vh] bg-gradient-to-b from-white/40 to-white"></div>}
    </div>
  )
}
