import React from 'react'
import { Button } from './ui/button'

const Counter = ({
  quantityItems,
  increment,
  decrement,
}: {
  quantityItems: number
  increment: () => void
  decrement: () => void
}) => {
  return (
    <div className='flex items-center gap-2 '>
      <span className=' text-lg '>Quantity: </span>
      <Button
        size={'icon'}
        className='bg-transparent rounded-full'
        onClick={() => decrement()}
        aria-label='Decrement quantity'
      >
        ➖
      </Button>
      <div className='w-9 h-9 flex items-center justify-center  rounded-full border-2 border-violet-500'>
        {quantityItems.toString()}
      </div>
      <Button
        size={'icon'}
        className='bg-transparent rounded-full'
        onClick={() => increment()}
        aria-label='Increment quantity'
      >
        ➕
      </Button>
    </div>
  )
}

export default Counter
