import { ArrowRight, Github, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col p-4'>
      <div className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 py-4'>
        <div className=' w-full flex justify-start items-center gap-2'>
          <div className='w-8 h-8 bg-slate-300 flex justify-center items-center rounded-full shadow-slate-400 shadow-md '>
            <Image
              src='/images/logo.png'
              alt='logo'
              width={60}
              height={60}
              aria-label='logo'
            />
          </div>
          <h1 className='flex items-center gap-2 text-2xl font-bold text-primary italic '>
            Garniaki
          </h1>
        </div>
        <div className=' w-full flex flex-col gap-2'>
           <h1 className='text-xl font-bold'>Uzyskaj pomoc</h1>
          <Link className='flex items-center gap-2' href='/about-us'><ArrowRight/>O nas</Link>
          <Link className='flex items-center gap-2' href='/contact-us'><ArrowRight/>Kontakt</Link>
        </div>
        <div className=' w-full flex flex-col gap-2'>
           <h1 className='text-xl font-bold'>Informacje</h1>
          <Link className='flex items-center gap-2' href='/career'><ArrowRight/>Kariera</Link>
          <Link className='flex items-center gap-2' href='/suits'><ArrowRight/>Zakupy</Link>
          <Link className='flex items-center gap-2' href='/about-us'><ArrowRight/>O nas</Link>
        </div>
        <div className=' w-full flex flex-col gap-2'>
           <h1 className='text-xl font-bold'>Obsługa klienta</h1>
          <Link className='flex items-center gap-2' href='/complaints'><ArrowRight/>Reklamacje</Link>
          <Link className='flex items-center gap-2' href='/payments'><ArrowRight/>Płatności</Link>
          <Link className='flex items-center gap-2' href='/security'><ArrowRight/>Bezpieczeństwo</Link>
        </div>
       
      </div>
      <div className='w-full flex  items-center justify-between border-t-2 pt-4'>
        <h2>Wszelkie prawa zastrzeżone © 2024 Garniaki</h2>
        <div className='flex items-center gap-4'>
          <Link
            href={'https://github.com/'}
            target='_blank'
          >
            <Github className='w-6 h-6' />
          </Link>
          <Link
            href={'https://github.com/'}
            target='_blank'
          >
            <Instagram className='w-6 h-6' />
          </Link>
          <Link
            href={'https://github.com/'}
            target='_blank'
          >
            <Linkedin className='w-6 h-6' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
