import {cn} from '@/lib/utils'

import {TextEffect} from '~/UI/TextEffect'

const textStyles = {
  h2: 'text-3xl sm:text-2xl',
  h3: 'text-2xl sm:text-xl',
}

export default function IndexPage() {
  return (
    <main className="grid place-items-center h-svh">
      <section className="flex flex-col gap-24 sm:gap-16 items-center">
        <div className="space-y-1.5 text-center">
          <TextEffect per="word" as="h2" preset="slide" className={cn(textStyles.h2, 'max-w-[55ch]')}>
            “The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.”
          </TextEffect>

          <TextEffect per="word" as="h3" preset="slide" className={textStyles.h3}>
            ― Socrates
          </TextEffect>
        </div>

        <div className="text-center">
          <TextEffect per="word" as="h2" preset="slide" className={textStyles.h2}>
            HIDDEN001
          </TextEffect>

          <TextEffect per="word" as="h3" preset="slide" className={cn(textStyles.h3, 'animate-pulse')}>
            coming soon
          </TextEffect>
        </div>
      </section>
    </main>
  )
}
