'use client'
import Counter from '@/components/Counter'
import SelectSize from '@/components/Select'
import { Button } from '@/components/ui/button'
import suitsData from '@/data/suits.json'
import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { use } from "react"
import type { Item } from '@/store/cartStore'
import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'

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

  const { addItemToCart, items } = useCartStore()
  const router = useRouter()
  const paramsId=use(params)
  const suit = suitsData.find((st) => st.id === Number(paramsId.id)) as Suit
  const [quantityItems, setQuantityItems] = useState(1)
  const [size, setSize] = useState('X')
  
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

  const handleSize = (size: string) => {
    setSize(size)
  }

  const handleCart = (item: Item) => {
    if (items.some((i) => i.id === item.id)) return
    const newItem = { ...item }
    addItemToCart(newItem)
    router.push('/suits')
    setQuantityItems(1)
    setSize('X')
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
            <div>Opis: {suit.description}</div>
            <div>Kolor: {suit.color}</div>
            <div className='flex items-center gap-4'>Rozmiar: <SelectSize onValueChange={handleSize} /></div>
            <div>Cena: {suit.price.toFixed(2)} PLN</div>
            <Counter quantityItems={quantityItems} increment={increment} decrement={decrement} />
            <Button onClick={()=>handleCart({
                    id: Number(suit?.id) || 0,
                    name: suit?.name || '',
                    price: suit?.price || 0,
                    quantity: quantityItems || 1,
                    image: suit?.image || '',
                    color: suit?.color || '',
                    size: size || 'X',
                  })}>
              Dodaj do Koszyka <ShoppingBag />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SuitId
