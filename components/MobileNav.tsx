'use client'

import { Menu, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetFooter } from '@/components/ui/sheet'



const MobileNav = () => {
 
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='border-none bg-card text-card-foreground  shadow-none lg:hidden '
      >
         <SheetTitle className='text-xl font-semibold uppercase italic '>Garniaki</SheetTitle>
        <div className='flex flex-col gap-4 mt-4 '>
          

        <Link
          href='/'
          className={`  text-xl hover:text-primary focus:text-primary `}
          aria-label='Home'
        >
          Główna
        </Link>

        <Link
          href='/about-us'
          className={`  text-xl hover:text-primary focus:text-primary `}
          aria-label='Shop'
        >
          O nas
        </Link>
        <Link
          href='/blogs'
          className={`  text-xl hover:text-primary focus:text-primary `}
          aria-label='Blogs'
        >
          Blogi
        </Link>
        <Link
          href='/suits'
          className={`  text-xl hover:text-primary focus:text-primary `}
          aria-label='About Us'
        >
          Garnitury
        </Link>
        <Link
          href='/contact-us'
          className={`  text-xl hover:text-primary focus:text-primary `}
          aria-label='Contact Us'
        >
          Kontakt
        </Link>

        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
