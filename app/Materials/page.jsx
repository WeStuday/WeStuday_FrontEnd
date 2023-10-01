import React from 'react'
import { AiOutlineArrowLeftMini } from "../lib/@react-icons";
import Button from '../Components/Button'
import Image from 'next/image'
import {faqs} from '../data/data'
import ItemMater from './ItemMater';

const page = () => {
  return (
    <div className='mt-40 md:mx-24'>
      <div>
      <div className='flex justify-between items-center'>
        <h3 className='text-[#00052E] text-xl font-medium'>
            الصف الثالث الإعدادي - الفصل الدراسي الأول
        </h3>
      <div className="flex justify-center items-center gap-2 cursor-pointer ">
      <h3 className='text-[#00052E] text-xl font-semibold underline'>العودة لصفحة المنهج</h3>
        <AiOutlineArrowLeftMini/>
      </div>
     </div>

     <div className='flex justify-between items-center py-12' >
      <div>
        <h1 className='w-full text-[#00052E] text-[46px] pb-10 font-semibold'>
          مادة الرياضيات
        </h1>
        <Button  textinner="تصفح الدروس" nameLink="" ClassNameAdd="bg-[#472758] px-4 py-2 text-xl"/>
      </div>
      
      <div>
      <Image
        src="/img/material.png"
        alt="صورة الصفحة الرئيسية موقع ندرس"
        width={450}
        height={350}
      />
      </div>

     </div>
      </div>

      <div>
      <ItemMater data={faqs} />
      </div>
    </div>
  )
}

export default page