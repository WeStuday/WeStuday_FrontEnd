"use client"; // Add this line at the top of the file

import Image from 'next/image'
import dynamic from 'next/dynamic'
const FrequentlyAsk = dynamic(()=>import('./FrequentlyAsk/FrequentlyAsk'))
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
const FrequentlyAsked = () => {
  useEffect(() => {
    AOS.init()
  },[])
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="center-bottom" className='pt-24 font-Tajawal'>
        
        <div className='relative'>
        <div className='hidden md:block absolute right-16  top-4 w-56 h-56 '>
          <Image
          src="/img/casual.webp"
          alt="صورة الصفحة الهيرو ندرس"
          width={80}
          height={80}
        />
          </div>
          <div className='hidden md:block absolute left-8  top-0 w-56 h-56 '>
          <Image
          src="/img/lamp.png"
          alt="صورة الصفحة الهيرو ندرس"
          width={80}
          height={80}
        />
          </div>
            <div className='text-center'>
            <h1 className='text-3xl font-semibold p-2'> أسئلة مكررة حول الموقع</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </div>
        </div>
        <div>
          <FrequentlyAsk/>
        </div>
    </div>
  )
}

export default FrequentlyAsked