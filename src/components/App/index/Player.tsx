'use client'

import {useState, useRef, useEffect} from 'react'
import {cn} from '@/lib/utils'
import {RECORDS, AUDIO_URLS} from '@/lib/audio-records'

import {H2} from '~/UI/Typography'
import Divider from '~~/index/Divider'
import Details from '~~/index/Details'
import AudioPlayer from '~/UI/AudioPlayer'

const RecordsList = ({records, onSelect, activeTrack}: {records: Record<string, string>; onSelect: (key: string) => void; activeTrack: string | null}) => (
  <div className="flex flex-col gap-1 sm:gap-2">
    {Object.entries(records).map(([key, title]) => (
      <H2
        onClick={() => onSelect(key)} // play record
        className={cn('cursor-pointer border-b-2 border-transparent', 'hover:text-red hover:border-red duration-200', activeTrack === key && 'text-red border-red')}
        key={key}
      >
        {key}. {title}
      </H2>
    ))}
  </div>
)

export default function Player({className}: {className?: string}) {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null)
  const [shouldPlay, setShouldPlay] = useState<boolean>(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!selectedTrack) return

    clearTimeout(timeoutRef.current!)
    setShouldPlay(false)

    timeoutRef.current = setTimeout(() => setShouldPlay(true), 50)
    return () => clearTimeout(timeoutRef.current!)
  }, [selectedTrack])

  const handleTrackSelect = setSelectedTrack

  const handleAudioEnd = () => {
    setTimeout(() => {
      setSelectedTrack(null)
    }, 500)
  }

  return (
    <section data-section="player-index" className={cn(className)}>
      <Details view="mobile" className="sm:!mb-6" />

      {selectedTrack && <AudioPlayer audioUrl={AUDIO_URLS[selectedTrack as keyof typeof AUDIO_URLS]} autoPlay={shouldPlay} onEnded={handleAudioEnd} />}

      <Divider className="sm:hidden" />

      <div className="grid grid-cols-2 py-1 sm:flex sm:flex-col-reverse xl:py-0 sm:pt-4 sm:pb-10">
        <div className="flex gap-28 sm:gap-0 sm:justify-between">
          <RecordsList records={RECORDS[1]} onSelect={handleTrackSelect} activeTrack={selectedTrack} />
          <RecordsList records={RECORDS[2]} onSelect={handleTrackSelect} activeTrack={selectedTrack} />
        </div>

        <Details className="justify-self-end" view="desktop" />
      </div>
    </section>
  )
}
