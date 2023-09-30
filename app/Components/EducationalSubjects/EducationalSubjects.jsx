"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import ClassItem from './ClassItem';

const EducationalSubjects = () => {
  const [state, setState] = useState(1);
  const action = (index) => {
    setState(index)
}
  return (
    <div className='p-24'>
        <div className='relative'>
        <div className='hidden md:block absolute right-16 top-2 w-56 h-56 '>
          <Image
          src="/img/arrow.png"
          alt="صورة الصفحة الهيرو موقع ندرس"
          width={80}
          height={80}
        />
          </div>
          <div className='hidden md:block absolute -left-24 -top-6 w-56 h-56 '>
          <Image
          src="/img/lamp.png"
          alt="صورة الصفحة الهيرو موقع ندرس"
          width={80}
          height={80}
        />
          </div>
            <div className='text-center'>
            <h1 className='text-3xl font-semibold p-2'>المناهج التعليمية</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </div>
        </div>
        <div>
          {/* tabs this website  */}
        <div className="">
            <div className="flex justify-center items-center gap-7 text-xl font-semibold leading-7 pt-12">
                <div onClick={() => action(1)} className={`${state === 1 ? "tab active-tab" : "tab"}`} >المرحلة الابتدائية</div>
                <div onClick={() => action(2)} className={`${state === 2 ? "tab active-tab" : "tab"}`} >المرحلة الاعدادية</div>
                <div onClick={() => action(3)} className={`${state === 3 ? "tab active-tab" : "tab"}`} >المرحلة الثانوية</div>
            </div>

            <div className="pt-10">
                <div className={`${state === 1 ? " block transition-all" : "hidden"}`}>
                    <div className=' flex justify-center items-center gap-8 flex-wrap'>
                <ClassItem nameClass='الأول الابتدائي' />
                <ClassItem nameClass='الأول الابتدائي' />
                <ClassItem nameClass='الأول الابتدائي' />
                <ClassItem nameClass='الأول الابتدائي' />
                <ClassItem nameClass='الأول الابتدائي' />
                <ClassItem nameClass='الأول الابتدائي' />
                    </div>
                </div>
                <div className={`${state === 2 ? "block transition-all" : "hidden"}`}>
                <div className=' flex justify-center items-center gap-8 flex-wrap'>
                <ClassItem nameClass='الثاني الابتدائي' />
                <ClassItem nameClass='الثاني الابتدائي' />
                <ClassItem nameClass='الثاني الابتدائي' />
                <ClassItem nameClass='الثاني الابتدائي' />
                <ClassItem nameClass='الثاني الابتدائي' />
                <ClassItem nameClass='الثاني الابتدائي' />
                    </div>
                </div>
                <div className={`${state === 3 ? "block transition-all" : "hidden"}`}>
                <div className=' flex justify-center items-center gap-8 flex-wrap'>
                <ClassItem nameClass='الثالث الابتدائي' />
                <ClassItem nameClass='الثالث الابتدائي' />
                <ClassItem nameClass='الثالث الابتدائي' />
                <ClassItem nameClass='الثالث الابتدائي' />
                <ClassItem nameClass='الثالث الابتدائي' />
                <ClassItem nameClass='الثالث الابتدائي' />
                    </div>
                </div>

            </div>
        </div>
          
        </div>
    </div>
  )
}

export default EducationalSubjects