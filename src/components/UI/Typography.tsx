import {cn} from '@/lib/utils'

type Props = {
  type: TypoTypes
  className?: string
  children: React.ReactNode
}

export type TypoTypes = keyof typeof typoClasses

export const typoClasses = {
  h1: 'text-[32px] xl:text-3xl !leading-[1.1]',
  h2: 'text-[32px] xl:text-2xl sm:text-xl !leading-none uppercase',
  h4: 'text-2xl xl:text-xl !leading-[1.2] font-light italic',
  h6: 'text-base !leading-none',
  p: 'text-lg xl:text-base !leading-[1.2]',
  span: 'text-sm sm:text-xs !leading-[1.1]',
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
export const H2 = createTypography('h2')
export const H4 = createTypography('h4')
export const H6 = createTypography('h6')
export const P = createTypography('p')
export const SPAN = createTypography('span')
