import {cn} from '@/lib/utils'

const textStyles = {
  h2: 'text-3xl sm:text-2xl',
  h3: 'text-2xl sm:text-xl',
}

export default function IndexPage() {
  return (
    <main className="grid place-items-center h-svh">
      <section className="flex flex-col gap-24 items-center">
        <div className="space-y-1.5 text-center">
          <h2 className={cn(textStyles.h2, 'max-w-[55ch]')}>“The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.”</h2>

          <h3 className={textStyles.h3}>― Socrates</h3>
        </div>

        <div className="text-center">
          <h2 className={cn(textStyles.h2)}>HIDDEN001</h2>
          <h3 className={cn(textStyles.h3, 'animate-pulse')}>coming soon</h3>
        </div>
      </section>
    </main>
  )
}
