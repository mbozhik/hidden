import {cn} from '@/lib/utils'

const textStyles = {
  h2: 'text-4xl sm:text-2xl',
}

export default function IndexPage() {
  return (
    <main className="grid place-items-center h-svh">
      <div className="text-center space-y-2 xl:space-y-1.5">
        <h2 className={textStyles.h2}> HIDDEN001</h2>

        <h3 className={cn(textStyles.h2, 'animate-pulse sm:!mt-0')}>coming soon</h3>
      </div>
    </main>
  )
}
