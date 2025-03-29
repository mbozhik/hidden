import type {ButtonHTMLAttributes} from 'react'
import {cn} from '@/lib/utils'

import {H1} from '~/UI/Typography'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export default function Button({children, className, ...props}: ButtonProps) {
  return (
    <div className="p-[3px] bg-red rounded-[50px] xl:rounded-[40px] sm:rounded-[35px] duration-300 hover:scale-[1.025]">
      <button className={cn('px-16 py-3 bg-white text-red rounded-[50px] xl:rounded-[40px] sm:rounded-[35px] font-medium', className)} {...props}>
        <H1 className="sm:text-2xl">{children}</H1>
      </button>
    </div>
  )
}
