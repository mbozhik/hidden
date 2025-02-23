'use client'

import {useRef, useState} from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import Image from 'next/image'
import {Download} from 'lucide-react'

import {H1, P, typoClasses} from '~/UI/Typography'
import {cn} from '@/lib/utils'

type FormData = {
  email: string
  file: FileList
}

export default function SecretForm() {
  const {register, handleSubmit, setValue, watch} = useForm<FormData>()
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const file = watch('file')?.[0]

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Form submitted:')
    console.log('Email:', data.email)
    if (data.file && data.file.length > 0) {
      console.log('Selected file:', data.file[0])
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setValue('file', event.target.files as FileList)
      setPreview(URL.createObjectURL(file))
      console.log('Selected file:', file)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file) {
      setValue('file', event.dataTransfer.files as FileList)
      setPreview(URL.createObjectURL(file))
      console.log('Dropped file:', file)
      event.dataTransfer.clearData()
    }
  }

  return (
    <form className="p-14 pb-16 xl:p-10 sm:p-4 flex flex-col items-center justify-center gap-10 xl:gap-8 sm:gap-7 bg-red/10 border border-white rounded-[50px] xl:rounded-[40px] sm:rounded-[35px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full space-y-4 xl:space-y-3">
        <div className="w-full py-5 bg-red border border-white rounded-[50px] xl:rounded-[40px] sm:rounded-[35px] flex flex-col items-center justify-center cursor-pointer" onClick={() => fileInputRef.current?.click()} onDragOver={handleDragOver} onDrop={handleDrop}>
          <div className="flex flex-col gap-3.5 items-center">
            {preview ? <Image className="rounded-xl object-cover w-[10vw]" src={preview} width={200} height={200} alt="" /> : <Download className="size-14" />}
            <div className="inline-flex gap-1 italic">
              <P className="font-medium">{file ? 'File selected' : 'Select a file'}</P>
              {!file && <P className="font-light"> or drag it here</P>}
            </div>
          </div>

          <input type="file" accept=".jpg, .jpeg, .png" {...register('file')} ref={fileInputRef} style={{display: 'none'}} onChange={handleFileChange} />
        </div>

        <input className={cn('w-full px-8 py-5 outline-none', typoClasses.h4, 'bg-red text-white placeholder:text-white border border-white rounded-[50px] xl:rounded-[40px] sm:rounded-[35px]')} type="email" placeholder="e-mail" {...register('email', {required: true})} />
      </div>

      <div className="flex flex-col justify-center items gap-6 xl:gap-5 sm:gap-4">
        <H1 className="sm:max-w-[15ch] text-center mx-auto">You found the hidden page</H1>
        <P className="text-center">
          *Attach the photo of your HIDDEN001 record <br className="sm:hidden" /> and enter your email to receive <br /> your first code
        </P>
      </div>

      <div className="p-[3px] border border-transparent bg-red rounded-[50px] xl:rounded-[40px] sm:rounded-[35px] duration-300 hover:border-white/80">
        <button type="submit" className="px-16 py-3 bg-white text-red rounded-[50px] xl:rounded-[40px] sm:rounded-[35px] font-medium">
          <H1 className="sm:text-2xl">SEND</H1>
        </button>
      </div>
    </form>
  )
}
