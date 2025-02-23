'use client'

import {useRef} from 'react'
import {Download} from 'lucide-react'

import {P} from '~/UI/Typography'

export default function FileInput() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      console.log('Selected file:', file)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0]
      console.log('Dropped file:', file)
      event.dataTransfer.clearData()
    }
  }

  return (
    <div className="w-full py-5 bg-red border border-white rounded-[50px] flex flex-col items-center justify-center cursor-pointer" onClick={() => fileInputRef.current && fileInputRef.current.click()} onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="flex flex-col gap-3.5 items-center">
        <Download className="size-14" />

        <div className="inline-flex gap-1 italic">
          <P className="font-medium ">select a file</P>
          <P className="font-light"> or drag it here</P>
        </div>
      </div>

      <input type="file" accept=".jpg, .jpeg, .png" ref={fileInputRef} style={{display: 'none'}} onChange={handleFileChange} />
    </div>
  )
}
