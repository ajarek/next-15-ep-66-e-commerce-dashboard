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
import { Button } from '@/components/ui/button'

const Dashboard = async () => {
  const suitsData = await fetchSuits()
  return (
    <div className='flex flex-col items-center px-8'>
      <h1 className='text-xl py-4 '>Lista Towarów</h1>
      <Table >
        <TableCaption>Koniec listy</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className=''>Foto</TableHead>
            <TableHead className=''>Nazwa</TableHead>
            <TableHead className=''>Opis</TableHead>
            <TableHead className=''>Kolor</TableHead>
            <TableHead className=''>Rozmiar</TableHead>
            <TableHead className=''>Cena</TableHead>
            <TableHead className=''>Akcja</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suitsData.map((suit) => (
            <TableRow key={suit?.id}>
              <TableCell className=''>
                <Image
                  src={suit?.image || ''}
                  alt='foto'
                  width={50}
                  height={50}
                />
              </TableCell>
              <TableCell className=''>{suit?.name}</TableCell>
              <TableCell className=''>
                {suit?.description.slice(0, 20)}...
              </TableCell>
              <TableCell className=''>{suit?.color}</TableCell>
              <TableCell className=''>{suit?.size}</TableCell>
              <TableCell className=''>{suit?.price.toFixed(2)}</TableCell>
              <TableCell className=''>
                <Button size={'icon'}>❌</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Dashboard
