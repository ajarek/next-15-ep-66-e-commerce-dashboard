'use client'
import Form from 'next/form'
import { createNewSuit } from '@/lib/createNewSuit'
import { useRef } from 'react'
const AddSuit = () => {
  const ref = useRef<HTMLFormElement>(null)
  return (
    <div className='min-h-screen flex flex-col justify-center items-center p-24'>
      <Form
       action={async (formData) => {
        await createNewSuit(formData)
        ref.current?.reset()
      }}
        className='flex flex-col gap-4'
      >
        <input name='name' />
        <input name='image' />
        <input name='description' />
        <input name='price' />
        <input name='category' />
        <input name='color' />
        <input name='size' />

        <button type='submit'>Submit</button>
      </Form>
    </div>
  )
}

export default AddSuit
