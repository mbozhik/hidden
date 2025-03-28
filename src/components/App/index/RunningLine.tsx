import {Marquee} from '~/Modules/Marquee'
import {H2} from '~/UI/Typography'

const text = 'Collect 3 records & decipher 3 codes to receive a free special 12'

export default function RunningLine() {
  return (
    <section data-section="runningline-index" className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-gray">
      <Marquee className="p-1.5 [--duration:20s]">
        {Array(3)
          .fill(text)
          .map((text, idx) => (
            <H2 className="mr-6 sm:mr-0" key={idx}>
              {text} <span className="ml-10 sm:ml-4">/</span>
            </H2>
          ))}
      </Marquee>

      <div className="absolute inset-y-0 left-0 w-[15%] pointer-events-none bg-gradient-to-r from-gray"></div>
      <div className="absolute inset-y-0 right-0 w-[15%] pointer-events-none bg-gradient-to-l from-gray"></div>
    </section>
  )
}
