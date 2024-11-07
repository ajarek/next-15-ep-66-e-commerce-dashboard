import { Button } from '@/components/ui/button'
import suitsData from '@/data/suits.json'
import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
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

const SuitId = ({ params }: { params: { id: string } }) => {
  const suit = suitsData.find((st) => st.id === Number(params.id)) as Suit
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
