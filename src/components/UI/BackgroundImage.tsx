import indexBgImage from '$/index-bg.png'
import secretBgImage from '$/secret-bg.jpg'

import Image from 'next/image'

export default function BackgroundImage({page}: {page: 'index' | 'secret'}) {
  return (
    <div className="absolute inset-0 -z-20 grid place-items-center h-full">
      <Image quality={100} priority className="absolute object-cover h-full opacity-95" src={page === 'secret' ? secretBgImage : indexBgImage} alt="h1dden secret background" />
    </div>
  )
}
