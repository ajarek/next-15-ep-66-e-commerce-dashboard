'use client'

import Link from 'next/link'



const Links = () => {
 
  return (
    <div className='max-lg:hidden w-full flex items-center justify-end   '>
      <div className='flex items-center gap-8 mr-4 '>
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
    </div>
  )
}

export default Links
