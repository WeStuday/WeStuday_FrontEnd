import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MaterialItem = ({nameMaterial,numberLeatures,nameLink=""}) => {
  return (
    <div className='bg-[#CDCDCD]  shadow-xl rounded-2xl ' >
    <div className='relative mb-4 '>
  <Image
    src='/img/material.png'
    width={300}
    height={200}
    className=''
    alt="the image is certification"
  />
  <div className='absolute top-4 left-4 rounded-3xl w-fit text-xs h-fit py-1 px-3 bg-[#00B267] text-white '>
    تنزيل مجاني
  </div>
</div>
    <div className='flex border-t-2  border-dotted border-[#ACACAC] justify-start items-start flex-col marker:text-[#00052E] p-4'>
      <Link href={nameLink} className='text-xl font-semibold cursor-pointer hover:text-[--color-alt]'>
        مادة    {nameMaterial}  
      </Link>
      <p>{numberLeatures} درس</p>
    </div>
  </div>
  )
}

export default MaterialItem