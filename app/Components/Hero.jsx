"use client"; // Add this line at the top of the file

import React,{useEffect} from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic';
const Button=dynamic(()=>import('./Button'))
import '../styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Hero = () => {
  useEffect(() => {
    AOS.init()
  },[])
  return (
    <div className='w-full font-Tajawal flex-wrap md:flex-nowrap py-24 px-12  md:py-36 md:px-24 bg-[--background-end]  flex justify-center items-center gap-24'>
      <div   data-aos="fade-left" className='flex relative justify-start items-start gap-5 flex-col'>
          <div className='hidden md:block absolute left-64 -top-2 w-12 h-12 '>
          <Image
          src="/img/hero-1.svg"
          alt="صورة الصفحة الهيرو ندرس"
          width={50}
          height={50}
          priority
        />
          </div>
    
        <h1 className='w-full md:w-1/2 text-[33px] md:text-[57px] font-semibold'>
          الخيار <span className='text-[--color-alt]'>الذكي</span> لمستقبلك
        </h1>
        <p>الدروس الجديدة يتم إضافتها بشكل دوري على هذه الصفحة، تابعنا لاستكمال باقي دروس المنهج</p>
        <Button textinner="تصفح الملفات" nameLink='about' ClassNameAdd='bg-[--seconderay] ' />
      </div>

      <div data-aos="fade-right" className='w-full md:w-1/2'>
        <Image
          src="/img/hero.webp"
          alt="صورة الصفحة الهيرو ندرس"
          width={700}
          height={700}
          priority
        />
      </div>

    </div>
  )
}

export default Hero