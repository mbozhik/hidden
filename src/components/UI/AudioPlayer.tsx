'use client'

import {Play, Pause, Volume2, VolumeX} from 'lucide-react'

import {useState, useRef, useEffect} from 'react'
import {cn} from '@/lib/utils'

export default function AudioPlayer({audioUrl, autoPlay = false, onEnded}: {audioUrl?: string; autoPlay?: boolean; onEnded?: () => void}) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const volumeBarRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState({
    isPlaying: false,
    isMuted: false,
    volume: 0.3,
    currentTime: 0,
    duration: 0,
  })

  const audio = audioRef.current

  useEffect(() => {
    if (!audio) return

    if (autoPlay) {
      const playAudio = async () => {
        try {
          await audio.play()
          setState((prev) => ({...prev, isPlaying: true}))
        } catch (error) {
          console.error('Playback failed:', error)
        }
      }
      playAudio()
    }
  }, [autoPlay, audio])

  useEffect(() => {
    if (!audio) return
    audio.volume = state.volume
  }, [state.volume, audio])

  useEffect(() => {
    if (!audioUrl) {
      setState((prev) => ({
        ...prev,
        isPlaying: false,
        currentTime: 0,
        duration: 0,
      }))
    }
  }, [audioUrl])

  const handlers = {
    togglePlay: async () => {
      if (!audio) return
      try {
        if (state.isPlaying) {
          audio.pause()
        } else {
          await audio.play()
        }
        setState((prev) => ({...prev, isPlaying: !prev.isPlaying}))
      } catch (error) {
        console.error('Playback failed:', error)
      }
    },

    toggleMute: () => {
      if (!audio) return
      audio.muted = !state.isMuted
      setState((prev) => ({...prev, isMuted: !prev.isMuted}))
    },

    timeUpdate: () => {
      if (!audio) return
      setState((prev) => ({...prev, currentTime: audio.currentTime}))
    },

    loadedMetadata: () => {
      if (!audio) return
      setState((prev) => ({...prev, duration: audio.duration}))
    },

    seek: (e: React.MouseEvent<HTMLDivElement>) => {
      if (!audio || !progressBarRef.current || !state.duration) return
      const rect = progressBarRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = x / rect.width
      const time = percentage * state.duration
      audio.currentTime = time
      setState((prev) => ({...prev, currentTime: time}))
    },

    volumeChange: (e: React.MouseEvent<HTMLDivElement>) => {
      if (!audio || !volumeBarRef.current) return
      const rect = volumeBarRef.current.getBoundingClientRect()
      const y = rect.bottom - e.clientY
      const percentage = y / rect.height
      const volume = Math.max(0, Math.min(1, percentage))
      audio.volume = volume
      setState((prev) => ({...prev, volume}))
    },
  }

  const iconConfig = {
    default: {
      wrapper: 'grid place-items-center size-8',
      icon: 'size-full',
    },
    style: 'stroke-red',
  }

  const iconStyles = cn(iconConfig.default.icon, iconConfig.style)

  return (
    <div data-block="audio-player" className={cn('!mb-10 xl:!mb-4', 'w-[30vw] sm:w-full flex items-center gap-4 sm:gap-3 py-3.5 sm:py-2 px-6 sm:px-3', 'bg-white border-2 border-black rounded-xl')}>
      <audio ref={audioRef} src={audioUrl} onTimeUpdate={handlers.timeUpdate} onLoadedMetadata={handlers.loadedMetadata} onEnded={onEnded} />

      <button onClick={handlers.togglePlay} className={cn(iconConfig.default.wrapper)}>
        {state.isPlaying ? <Pause className={cn(iconStyles, 'fill-red')} /> : <Play className={cn(iconStyles, 'fill-red')} />}
      </button>

      <div className="relative group">
        <button onClick={handlers.toggleMute} className="grid place-items-center size-8">
          {state.isMuted ? <VolumeX className="size-full stroke-red" /> : <Volume2 className="size-full stroke-red" />}
        </button>

        <div className="sm:!hidden absolute hidden -translate-x-1/2 group-hover:block hover:block left-1/2 bottom-full">
          <div className="p-1.5 bg-white border-2 rounded-xl border-gray">
            <div ref={volumeBarRef} onClick={handlers.volumeChange} className="w-2.5 h-24 overflow-hidden rotate-180 cursor-pointer rounded-xl bg-gray">
              <div
                className="w-full bg-red"
                style={{
                  height: `${state.volume * 100}%`,
                  marginTop: 'auto',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div ref={progressBarRef} onClick={handlers.seek} className="flex-1 h-2.5 overflow-hidden cursor-pointer bg-gray rounded-xl">
        <div
          className="h-full bg-red"
          style={{
            width: state.duration ? `${(state.currentTime / state.duration) * 100}%` : '0%',
          }}
        />
      </div>
    </div>
  )
}
