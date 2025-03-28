'use client'

import logoImage from '$/logo.svg'
import logoInvertImage from '$/logo-invert.svg'

import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isSecretPage = pathname === '/secret'

  return (
    <header className="z-[99] absolute inset-12 xl:inset-8 sm:inset-3 size-fit xl:size-[17vw] sm:size-[40vw]">
      <Link href="/">
        <Image src={isSecretPage ? logoImage : logoInvertImage} alt="h1dden logo" />
      </Link>
    </header>
  )
}
