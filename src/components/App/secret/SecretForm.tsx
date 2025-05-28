'use client'

import {useState, useEffect} from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'

import {supabase} from '@/lib/supabaseClient'
import {cn} from '@/lib/utils'

import {H1, typoClasses} from '~/UI/Typography'
import Button from '~/UI/Button'

type FormData = {
  email: string
  code: string
}

const formatCode = (value: string) => {
  const code = value.replace(/[^A-Za-z0-9]/g, '').substring(0, 12)
  const upperCode = code.toUpperCase()
  return upperCode.match(/.{1,4}/g)?.join('-') || upperCode
}

export default function SecretForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: {errors},
  } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const code = watch('code')
  useEffect(() => {
    if (code) {
      const formattedCode = formatCode(code)
      if (formattedCode !== code) {
        setValue('code', formattedCode)
      }
    }
  }, [code, setValue])

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (isSubmitting) return
    setIsSubmitting(true)

    try {
      const {error: insertError} = await supabase.from('secret').insert({email: data.email, code: data.code})

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
    <form className="p-14 pb-16 xl:p-10 sm:p-4 w-[30vw] sm:w-auto flex flex-col items-center justify-center gap-10 xl:gap-8 sm:gap-7 bg-red/30 border border-white rounded-[50px] xl:rounded-[40px] sm:rounded-[35px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full space-y-4 xl:space-y-3">
        <div className="w-full">
          <input
            className={cn(
              'w-full px-8 py-5 outline-none',
              typoClasses.h4,
              'bg-red text-white placeholder:text-white border border-white rounded-[50px] xl:rounded-[40px] sm:rounded-[35px]',
              errors.email && 'border-[#ff3030]', // error
            )}
            type="email"
            placeholder="e-mail"
            {...register('email', {
              required: 'Е-майл обязателен',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Неверный формат е-майла',
              },
            })}
          />
          {errors.email && <p className="mt-2 text-white/80 text-sm">{errors.email.message}</p>}
        </div>

        <div className="w-full">
          <input
            className={cn(
              'w-full px-8 py-5 outline-none',
              typoClasses.h4,
              'bg-red text-white placeholder:text-white border border-white rounded-[50px] xl:rounded-[40px] sm:rounded-[35px] uppercase',
              errors.code && 'border-[#ff3030]', // error
            )}
            type="text"
            placeholder="XXXX-XXXX-XXXX"
            maxLength={14}
            {...register('code', {
              required: 'Код обязателен',
              pattern: {
                value: /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/,
                message: 'Код должен быть в формате XXXX-XXXX-XXXX',
              },
            })}
          />
          {errors.code && <p className="mt-2 text-white/80 text-sm">{errors.code.message}</p>}
        </div>
      </div>

      <H1 className="sm:max-w-[15ch] text-center mx-auto">You found the hidden page</H1>

      <Button variant="secondary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'SENDING...' : 'SEND'}
      </Button>
    </form>
  )
}
