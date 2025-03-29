import type {ButtonHTMLAttributes} from 'react'
import {cn} from '@/lib/utils'

import {H1} from '~/UI/Typography'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export default function Button({variant, children, className, ...props}: ButtonProps) {
  return (
    <button className={cn('group/button relative overflow-hidden rounded-[30px] border-2  bg-white px-12 py-3 text-red transition-all duration-200 active:scale-95', variant === 'primary' ? 'border-red' : 'border-white', className)} {...props}>
      <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-red to-red/80 transition-all duration-500 group-hover/button:h-full" />
      <H1 className={cn('sm:text-2xl font-medium', 'relative z-10 transition-all duration-500 group-hover/button:text-white')}>{children}</H1>
    </button>
  )
}
