import React from 'react'
import Image from 'next/image'
import Button from './Button'
import '../styles/globals.css'
const Hero = () => {
  return (
    <div className='w-full font-Tajawal flex-wrap md:flex-nowrap py-24 px-12  md:py-36 md:px-24 bg-[--background-end]  flex justify-center items-center gap-24'>
      <div className='flex relative justify-start items-start gap-5 flex-col'>
          <div className='hidden md:block absolute left-64 -top-2 w-12 h-12 '>
          <Image
          src="/img/hero-1.svg"
          alt="صورة الصفحة الهيرو موقع ندرس"
          width={50}
          height={50}
        />
          </div>
    
        <h1 className='w-full md:w-1/2 text-[33px] md:text-[57px] font-semibold'>
          الخيار <span className='text-[--color-alt]'>الذكي</span> لمستقبلك
        </h1>
        <p>الدروس الجديدة يتم إضافتها بشكل دوري على هذه الصفحة، تابعنا لاستكمال باقي دروس المنهج</p>
        <Button textinner="تصفح الملفات" nameLink='about' ClassNameAdd='bg-[--seconderay] ' />
      </div>

      <div className='w-full md:w-1/2'>
        <Image
          src="/img/hero.png"
          alt="صورة الصفحة الهيرو موقع ندرس"
          width={700}
          height={700}
        />
      </div>

    </div>
  )
}

export default Hero