'use client'

import {useState} from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'

import {supabase} from '@/lib/supabaseClient'
import {cn} from '@/lib/utils'

import {H1, typoClasses} from '~/UI/Typography'
import Button from '~/UI/Button'

type FormData = {
  email: string
}

export default function SecretForm() {
  const {register, handleSubmit, reset} = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (isSubmitting) return
    setIsSubmitting(true)

    try {
      const {error: insertError} = await supabase.from('secret').insert({email: data.email})

      if (insertError) {
        throw new Error('Error submitting form')
      }

      console.log('Form submitted successfully')
      reset()
    } catch (error) {
      console.error('Error:', error)
      alert(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="p-14 pb-16 xl:p-10 sm:p-4 w-[33vw] flex flex-col items-center justify-center gap-10 xl:gap-8 sm:gap-7 bg-red/30 border border-white rounded-[50px] xl:rounded-[40px] sm:rounded-[35px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full space-y-4 xl:space-y-3">
        <input className={cn('w-full px-8 py-5 outline-none', typoClasses.h4, 'bg-red text-white placeholder:text-white border border-white rounded-[50px] xl:rounded-[40px] sm:rounded-[35px]')} type="email" placeholder="e-mail" {...register('email', {required: true})} />
      </div>

      <H1 className="sm:max-w-[15ch] text-center mx-auto">You found the hidden page</H1>

      <Button variant="secondary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'SENDING...' : 'SEND'}
      </Button>
    </form>
  )
}
