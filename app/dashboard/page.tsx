import React from 'react'
import { fetchSuits } from '@/lib/fetch'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'
import {  buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import ButtonDelete from '@/components/ButtonDelete'

const Dashboard = async () => {
  const suitsData = await fetchSuits()
  return (
    <div className='flex flex-col items-center px-8 max-sm:px-1'>
      <div className='flex items-center gap-8'>
      <h1 className='text-xl py-4 '>Lista Towarów</h1>
       <Link href='/add-suit' className={`${buttonVariants({variant: 'default', size:'icon'})} `}><Plus size={32} /></Link>
      </div>
      <Table >
        <TableCaption>Koniec listy</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='max-sm:hidden'>Foto</TableHead>
            <TableHead className=''>Nazwa</TableHead>
            <TableHead className='max-sm:hidden'>Opis</TableHead>
            <TableHead className='max-sm:hidden'>Kolor</TableHead>
            <TableHead className=''>Rozmiar</TableHead>
            <TableHead className=''>Cena</TableHead>
            <TableHead className=''>Akcja</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suitsData.map((suit) => (
            <TableRow key={suit?.id}>
              <TableCell className='max-sm:hidden'>
                <Image
                  src={suit?.image || ''}
                  alt='foto'
                  width={50}
                  height={50}
                />
              </TableCell>
              <TableCell className=''>{suit?.name}</TableCell>
              <TableCell className='max-sm:hidden'>
                {suit?.description.slice(0, 20)}...
              </TableCell>
              <TableCell className='max-sm:hidden'>{suit?.color}</TableCell>
              <TableCell className=''>{suit?.size}</TableCell>
              <TableCell className=''>{suit?.price.toFixed(2)}</TableCell>
              <TableCell className=''>
                <ButtonDelete id={suit?.id as number} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Dashboard
