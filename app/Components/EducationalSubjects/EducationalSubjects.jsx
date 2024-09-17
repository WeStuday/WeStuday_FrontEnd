"use client"
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const ClassItem = dynamic(() => import('./ClassItem'))
import AOS from 'aos';
import 'aos/dist/aos.css'
const EducationalSubjects = () => {
  const [state, setState] = useState(1);
  const action = (index) => {
    setState(index);
  };
  useEffect(() => {
    AOS.init()
  },[])

  return (
    <div className='px-6 md:px-12 lg:px-24 py-12'>
      <div className='relative'>
        {/* Decorative Images */}
        <div className='hidden md:block absolute right-8 top-2 w-24 h-24 lg:w-56 lg:h-56'>
          <Image
            src="/img/arrow.webp"
            alt="صورة الصفحة الهيرو ندرس"
            width={80}
            height={80}
            priority 
          />
        </div>
        <div className='hidden md:block absolute -left-12 -top-6 w-24 h-24 lg:w-56 lg:h-56'>
          <Image
            src="/img/lamp.png"
            alt="صورة الصفحة الهيرو ندرس"
            width={80}
            height={80}
            priority
          />
        </div>

        {/* Title and Description */}
        <div className='text-center'>
          <h1 className='text-2xl md:text-3xl font-semibold p-2'>المناهج التعليمية</h1>
          <p className='text-sm md:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
        </div>
      </div>
        {/* Tabs */}
        <div className="flex justify-center items-center gap-5 md:gap-7 text-base md:text-xl font-semibold leading-7 pt-12">
          <div data-aos="flip-up"     data-aos-duration="3500"   onClick={() => action(1)} className={`${state === 1 ? "tab active-tab" : "tab"}`}>المرحلة الابتدائية</div>
          <div data-aos="flip-up"     data-aos-duration="3500"  onClick={() => action(2)} className={`${state === 2 ? "tab active-tab" : "tab"}`}>المرحلة الاعدادية</div>
          <div data-aos="flip-up"     data-aos-duration="3500"  onClick={() => action(3)} className={`${state === 3 ? "tab active-tab" : "tab"}`}>المرحلة الثانوية</div>
        </div>
      {/* Content */}
      <div className="flex flex-col justify-between items-center mt-12">
        <div className="w-full sm:w-3/4 lg:w-[750px]">
          {/* Tab Content */}
          <div className={`${state === 1 ? "block transition-all" : "hidden"}`}>
            <div data-aos="fade-left"   data-aos-duration="3000"  className='flex justify-center items-center gap-6 md:gap-8 flex-wrap'>
              <ClassItem  nameClass='الأول الابتدائي' nameLink='/Classes/1' />
              <ClassItem nameClass='الثاني الابتدائي' nameLink='/Classes/2' />
              <ClassItem nameClass='الثالث الابتدائي' nameLink='/Classes/3' />
              <ClassItem nameClass='الرابع الابتدائي' nameLink='/Classes/4' />
            </div>
          </div>
          <div data-aos="fade-left"   data-aos-duration="3000" className={`${state === 2 ? "block transition-all" : "hidden"}`}>
            <div className='flex justify-center items-center gap-6 md:gap-8 flex-wrap'>
              <ClassItem nameClass='الخامس الإعدادي' nameLink='/Classes/5' />
              <ClassItem nameClass='السادس الإعدادي' nameLink='/Classes/6' />
              <ClassItem nameClass='السابع الإعدادي' nameLink='/Classes/7' />
              <ClassItem nameClass='الثامن الإعدادي' nameLink='/Classes/8' />
            </div>
          </div>
          <div data-aos="fade-left"   data-aos-duration="3000"  className={`${state === 3 ? "block transition-all" : "hidden"}`}>
            <div className='flex justify-center items-center gap-6 md:gap-8 flex-wrap'>
              <ClassItem nameClass='التاسع الثانوي' nameLink='/Classes/9' />
              <ClassItem nameClass='العاشر الثانوي' nameLink='/Classes/10' />
              <ClassItem nameClass='الحادي الثانوي' nameLink='/Classes/11' />
              <ClassItem nameClass='الثاني عشر الثانوي' nameLink='/Classes/12' />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default EducationalSubjects;
