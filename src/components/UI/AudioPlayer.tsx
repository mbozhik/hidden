'use client'

import {Play, Pause, Volume2, VolumeX} from 'lucide-react'

import {useState, useRef, useEffect} from 'react'
import {cn} from '@/lib/utils'

export default function AudioPlayer({audioUrl, className, autoPlay = false}: {audioUrl?: string; className?: string; autoPlay?: boolean}) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [state, setState] = useState({
    isPlaying: false,
    isMuted: false,
    volume: 1,
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

    seek: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!audio) return
      const time = Number(e.target.value)
      audio.currentTime = time
      setState((prev) => ({...prev, currentTime: time}))
    },

    volumeChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!audio) return
      const value = Number(e.target.value)
      audio.volume = value
      setState((prev) => ({...prev, volume: value}))
    },
  }

  return (
    <div data-block="audio-player" className={cn('flex items-center gap-4 py-8 px-6', 'bg-white border-2 border-black rounded-xl', className)}>
      <audio ref={audioRef} src={audioUrl} onTimeUpdate={handlers.timeUpdate} onLoadedMetadata={handlers.loadedMetadata} />

      <button onClick={handlers.togglePlay}>{state.isPlaying ? <Pause /> : <Play />}</button>

      <div className="relative group">
        <button onClick={handlers.toggleMute}>{state.isMuted ? <VolumeX /> : <Volume2 />}</button>

        <div className="absolute hidden mb-2 -translate-x-1/2 bottom-full left-1/2 group-hover:block">
          <input type="range" min="0" max="1" step="0.1" value={state.volume} onChange={handlers.volumeChange} className="w-24 h-1 rotate-270" />
        </div>
      </div>

      <input type="range" min="0" max={state.duration || 100} value={state.currentTime} onChange={handlers.seek} className="flex-1 h-1" disabled={!audioUrl} />
    </div>
  )
}
