'use client'

import { Menu, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet'
import { useCartStore } from '@/store/cartStore'

const MobileNav = () => {
  const { items } = useCartStore()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='border-none bg-card text-card-foreground  shadow-none lg:hidden '
      >
        <SheetTitle className='text-xl font-semibold uppercase italic '>
          <Link href='/'>Garniaki</Link>
        </SheetTitle>
        <div className='flex flex-col gap-4 mt-4 '>
          {items.length > 0 && (
            <Link
              href='/cart'
              className={`flex items-center  px-3 rounded-sm `}
              aria-label='Cart'
            >
              <ShoppingCart
                size={24}
                className=''
              />
              <div className='pb-3 text-red-500'>
                {items.reduce((acc, item) => acc + item.quantity, 0)}
              </div>
            </Link>
          )}
          

          <Link
            href='/about-us'
            className={`  text-xl hover:text-primary focus:text-primary `}
            aria-label='Shop'
          >
            O nas
          </Link>
        
          <Link
            href='/suits'
            className={`  text-xl hover:text-primary focus:text-primary `}
            aria-label='About Us'
          >
            Garnitury
          </Link>

          <Link
            href='/contact'
            className={`  text-xl hover:text-primary focus:text-primary `}
            aria-label='Contact'
          >
            Kontakt
          </Link>
          
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
