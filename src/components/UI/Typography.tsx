import {cn} from '@/lib/utils'

type Props = {
  type: TypoTypes
  className?: string
  children: React.ReactNode
}

export type TypoTypes = keyof typeof typoClasses

export const typoClasses = {
  h1: 'text-[32px] !leading-[1.1]',
  h4: 'text-2xl !leading-[1.2] font-light italic',
  p: 'text-lg !leading-[1.2]',
  span: 'text-sm !leading-[1.1]',
} as const

function Typography({type, className, children}: Props) {
  const Element = type
  return <Element className={cn(typoClasses[type], className)}>{children}</Element>
}

function createTypography(type: TypoTypes) {
  const Component = ({className, children}: Omit<Props, 'type'>) => (
    <Typography type={type} className={className}>
      {children}
    </Typography>
  )
  Component.displayName = `Typography(${type.toUpperCase()})`
  return Component
}

export const H1 = createTypography('h1')
export const P = createTypography('p')
export const SPAN = createTypography('span')
