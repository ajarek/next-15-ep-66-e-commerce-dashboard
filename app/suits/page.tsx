import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { fetchSuits } from '@/lib/fetch'

const Suits = async () => {
  const suitsData = await fetchSuits()
  return (
    <div className='w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-8 p-8 '>
      {suitsData.map((suit) => (
        <Card
          key={suit?.id}
          className='overflow-hidden shadow-md shadow-gray-400'
        >
          <CardHeader className='bg-white'>
            <Image
              src={suit?.image || ''}
              alt={suit?.name || ''}
              width={200}
              height={280}
            />
          </CardHeader>
          <CardContent className='flex flex-col gap-2 mt-4'>
            <CardTitle>{suit?.name}</CardTitle>
            <CardDescription>
              {suit?.description.slice(0, 60)}...
            </CardDescription>
            <p>{suit?.price.toFixed(2)} PLN</p>
          </CardContent>
          <CardFooter>
            <Link
              href={`/suit?id=${suit?.id}&name=${suit?.name}&price=${suit?.price}&image=${suit?.image}&description=${suit?.description}&size=${suit?.size}&color=${suit?.color}`}
              className={`${buttonVariants({})}  text-xl`}
            >
              Zobacz Szczegóły <ArrowRight />{' '}
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default Suits
