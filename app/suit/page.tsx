'use client'
import Counter from '@/components/Counter'
import SelectSize from '@/components/Select'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { use } from 'react'
import type { Item } from '@/store/cartStore'
import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'

const SuitId = ({
  searchParams,
}: {
  searchParams: Promise<{
    id: string
    price: number
    size: string
    name: string
    image: string
    description: string
    color: string
  }>
}) => {
  const { addItemToCart, items } = useCartStore()
  const router = useRouter()

  const [quantityItems, setQuantityItems] = useState(1)
  const [size, setSize] = useState('X')
  const params = use(searchParams)
  const { id, price, description, name, image, color } = params

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
      {true && (
        <div className='grid grid-cols-2 max-sm:grid-cols-1  gap-4 '>
          <div className='flex items-center justify-center'>
            <Image
              src={image}
              alt={name}
              width={342}
              height={480}
              priority
              className='rounded-xl shadow-md shadow-gray-400'
            />
          </div>
          <div className='flex flex-col items-start justify-center gap-4 '>
            <h1 className='text-xl'>{name}</h1>
            <div>Opis: {description}</div>
            <div>Kolor: {color}</div>
            <div className='flex items-center gap-4'>
              Rozmiar: <SelectSize onValueChange={handleSize} />
            </div>
            <div>Cena: {Number(price).toFixed(2)} PLN</div>
            <Counter
              quantityItems={quantityItems}
              increment={increment}
              decrement={decrement}
            />
            <Button
              onClick={() =>
                handleCart({
                  id: Number(id) || 0,
                  name: name || '',
                  price: price || 0,
                  quantity: quantityItems || 1,
                  image: image || '',
                  color: color || '',
                  size: size || 'X',
                })
              }
            >
              Dodaj do Koszyka <ShoppingBag />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SuitId
