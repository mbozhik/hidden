import {Marquee} from '~/Modules/Marquee'
import {H1} from '~/UI/Typography'

const text = 'Collect 3 records & decipher 3 codes to receive a free special 12'

export default function RunningLine() {
  return (
    <section data-section="runningline-index" className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-gray">
      <Marquee pauseOnHover className="p-1.5 [--duration:20s]">
        {Array(3)
          .fill(text)
          .map((text, idx) => (
            <H1 className="mr-6 !leading-none uppercase" key={idx}>
              {text} <span className="ml-10">/</span>
            </H1>
          ))}
      </Marquee>

      <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-gray"></div>
      <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-gray"></div>
    </section>
  )
}
