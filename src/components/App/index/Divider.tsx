import Button from '@/components/UI/Button'
import {cn} from '@/lib/utils'
import Link from 'next/link'

export default function Divider({button, className}: {button?: boolean; className?: string}) {
  return (
    <section data-section="divider-index" className={cn(button && 'pb-10 sm:pb-8', className)}>
      <div className="relative w-full h-0.5 bg-black">
        {button && (
          <div className="absolute inset-0 grid w-full place-items-center">
            <Link className="absolute block" href="https://linktr.ee/hiddencollection" target="_blank">
              <Button className="uppercase">Buy vinyl</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
