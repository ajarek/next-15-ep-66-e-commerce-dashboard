'use client'
import Counter from '@/components/Counter'
import { Button } from '@/components/ui/button'
import suitsData from '@/data/suits.json'
import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { use } from "react"
type Suit =
  | {
      id: number
      name: string
      image: string
      description: string
      price: number
      category: string
      color: string
      size: string
    }
  | undefined
  
const SuitId = ({ params }:{ params: Promise<{ id: string }> }) => {
  const paramsId=use(params)
  const suit = suitsData.find((st) => st.id === Number(paramsId.id)) as Suit
  const [quantityItems, setQuantityItems] = useState(1)
  if (!suit) {
    return <div>Suit not found</div>
  }
  const increment = () => {
    const actualQuantity = Number(quantityItems) + 1
    setQuantityItems(actualQuantity)
  }

  const decrement = () => {
    const actualQuantity = +quantityItems > 1 ? Number(quantityItems) - 1 : 1
    setQuantityItems(actualQuantity)
  }
  return (
    <div className=' min-h-screen p-8'>
      {suit && (
        <div className='grid grid-cols-2 gap-4 '>
          <div className='flex items-center justify-center'>
            <Image
              src={suit.image}
              alt={suit.name}
              width={342}
              height={480}
              priority
              className='rounded-xl shadow-md shadow-gray-400'
            />
          </div>
          <div className='flex flex-col items-start justify-center gap-4 '>
            <h1 className='text-xl'>{suit.name}</h1>
            <p>Opis: {suit.description}</p>
            <p>Kolor: {suit.color}</p>
            <p>Rozmiar: {suit.size}</p>
            <p>Cena: {suit.price.toFixed(2)} PLN</p>
            <Counter quantityItems={quantityItems} increment={increment} decrement={decrement} />
            <Button>
              Dodaj do Koszyka <ShoppingBag />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SuitId
