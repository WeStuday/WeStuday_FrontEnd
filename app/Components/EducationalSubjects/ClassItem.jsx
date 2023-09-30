import React from 'react'
import Image from 'next/image'
import Button from '../Button'

const ClassItem = ({nameClass, nameLink="ABPUT"}) => {
  return (
    <div className='bg-white  flex justify-center items-center flex-col gap-4 shadow-xl p-4 max-w-xs rounded-2xl' >
    <div className='bg-[#6F547D]  rounded-2xl  w-72 h-52 flex justify-center items-end'>
   <div className='bg-[#5E406E] flex justify-center items-center flex-col pt-10  rounded-2xl  w-64 h-46 '>
   <h3 className='text-xl flex justify-center items-center font-semibold text-white  '> 
   الصف {nameClass}   </h3>
    <Image
      src='/img/class2.png'
      width={150}
      height={100}
      className=' '
      alt="the image is certification"
      />
   </div>
    </div>
   <Button textinner="تصفح المفات" ClassNameAdd='bg-[#FF7426] ' nameLink={nameLink}/>
  </div>
  )
}

export default ClassItem