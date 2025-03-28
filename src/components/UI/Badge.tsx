import {cn} from '@/lib/utils'

import Link from 'next/link'
import {H6} from '~/UI/Typography'

type Props = {
  content: string
  href: string
  className?: string
}

export default function Badge({content, href, className}: Props) {
  return (
    <Link href={href} target="_blank" className={cn('flex items-center gap-2', 'size-fit px-1.5 pr-2 py-[3px] rounded-3xl', 'bg-gray text-white', 'group hover:bg-[#CECECE] duration-300', className)}>
      <div className="size-2.5 bg-white rounded-full group-hover:scale-[1.1] duration-300"></div>

      <H6>{content}</H6>
    </Link>
  )
}
