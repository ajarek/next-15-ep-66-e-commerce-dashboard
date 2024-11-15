'use client'
import Form from 'next/form'
import { createNewSuit } from '@/lib/createNewSuit'
import { useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const FormAddSuit = () => {
  const ref = useRef<HTMLFormElement>(null)
  return (
    <Form
      action={async (formData) => {
        await createNewSuit(formData)
        ref.current?.reset()
      }}
      className='w-full flex flex-col gap-4'
    >
      <div className='flex   items-center gap-4'>
        <Label className='w-24'>Nazwa</Label>
        <Input name='name' />
      </div>
      <div className='flex   items-center gap-4'>
        <Label className='w-24'>Foto</Label>
        <Input name='image' />
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Opis</Label>
        <Input name='description' />
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Cena</Label>
        <Input name='price' />
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Kategoria</Label>
        <Input name='category' />
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Kolor</Label>
        <Input name='color' />
      </div>
      <div className='flex  items-center gap-4'>
        <Label className='w-24'>Rozmiar</Label>
        <Input name='size' />
      </div>

      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default FormAddSuit
