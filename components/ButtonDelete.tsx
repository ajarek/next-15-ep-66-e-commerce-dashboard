'use client'
import Form from 'next/form'
import { Button } from '@/components/ui/button'
import { deleteSuitId } from '@/lib/deleteSuitId'

const ButtonDelete = ({ id }: { id: number }) => {
  return (
    <Form
      action={async (formData) => {
        await deleteSuitId(formData)
      }}
      className='w-full flex flex-col  items-start gap-4'
    >
      <input
        type='hidden'
        name='id'
        value={id}
      />

      <Button
        className=' bg-transparent  rounded-sm hover:bg-transparent hover:scale-105  transition'
        type='submit'
        size='sm'
      >
        ❌
      </Button>
    </Form>
  )
}
export default ButtonDelete
