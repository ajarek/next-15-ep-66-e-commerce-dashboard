import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-[calc(100vh-48px)] flex-col items-center justify-between  '>
      <div className='relative w-full h-[500px] flex items-center justify-center'>
        <Image
          src='/images/header-5.webp'
          alt='suits'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover absolute h-full w-full'
        />
        <div className='absolute inset-0 w-full h-full  bg-black z-20  opacity-50'></div>
        <h1 className=' absolute top-1/2 translate-y-[-50%] text-6xl  font-bold text-center text-white italic z-30'>
          Prosty a Elegancki Styl...
        </h1>
      </div>
    </main>
  )
}
