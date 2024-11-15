import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
  return (
    <div className=' min-h-screen p-8 flex flex-col items-center justify-start gap-8'>
      <h1 className='text-2xl font-semibold'>About Us</h1>

      <div className=' grid grid-cols-2 max-sm:grid-cols-1 gap-8 '>
        <div className='relative w-full h-full min-h-[358px] flex justify-center items-center p-4 '>
          <Image
            src='/images/about-us.webp'
            alt={'sklep'}
            fill
            priority
            className=' object-cover object-center  rounded-lg shadow-md shadow-gray-400'
            loading='eager'
          />
        </div>
        <div className='flex flex-col items-start justify-center gap-4 text-justify'>
          <h2 className='text-xl'>Elegancja na wyciągnięcie ręki</h2>
          <p>
            Szukasz idealnego garnituru na ważne spotkanie czy uroczystość? Nasz
            sklep internetowy oferuje szeroki wybór garniturów męskich, które
            spełnią oczekiwania nawet najbardziej wymagających klientów. Od
            klasycznych modeli po nowoczesne fasony – u nas znajdziesz coś dla
            siebie. Dzięki intuicyjnej wyszukiwarce szybko znajdziesz garnitur w
            odpowiednim rozmiarze i kolorze. Zapewniamy szybką dostawę i
            możliwość zwrotu, jeśli garnitur nie spełni Twoich oczekiwań. Chcesz
            dowiedzieć się więcej? Porozmawiajmy o tym, jak wybrać idealny
            garnitur lub jakie są najnowsze trendy w męskiej modzie.
          </p>
          <Link
            href='/contact'
            className={`${buttonVariants({
              variant: 'default',
            })}  text-xl`}
          >
            Skontaktuj się z nami <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
