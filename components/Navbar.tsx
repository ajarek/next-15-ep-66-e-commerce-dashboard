import Links from '@/components/Links'
import MobileNav from './MobileNav'
import { ModeToggle } from '@/components/ModeToggle'
import Image from 'next/image'

const Navbar = async () => {
  return (
    <div className=' flex flex-col justify-start items-center   px-16 max-sm:px-2  '>
      <div className='h-12  w-full flex  justify-between items-center '>
        <div className='h-12 w-full flex justify-start items-center gap-2'>
          <div className='w-8 h-8 bg-slate-300 flex justify-center items-center rounded-full shadow-slate-400 shadow-md '>
           <Image src='/images/logo.png' alt='logo' width={60} height={60} aria-label='logo'/>
          </div>
          <h1 className='flex items-center gap-2 text-2xl font-bold text-primary italic '>
            Garniaki
          </h1>
        </div>
        <div className=' w-full flex items-center gap-2 '>
          <Links />
          <ModeToggle />
        </div>

        <div className=' lg:hidden'>
          <MobileNav />
        </div>
      </div>
    </div>
  )
}

export default Navbar
