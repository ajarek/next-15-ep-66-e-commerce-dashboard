'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'


const Links = () => {
  const { items } = useCartStore()
  return (
    <div className='max-lg:hidden w-full flex items-center justify-end   '>
      <div className='flex items-center gap-8 mr-4 '>
        

        
        <Link
          href='/dashboard'
          className={`  text-xl hover:text-primary focus:text-primary `}
          aria-label='Shop'
        >
          Panel
        </Link>
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
        
      </div>
    </div>
  )
}

export default Links
