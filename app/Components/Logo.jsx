import React from 'react'
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
    <div>
      <Image
        src="/img/logo.png"
        alt="صورة الصفحة الرئيسية موقع ندرس"
        width={50}
        height={50}
      />
    </div>
    <h1 className="font-black  text-xl leading-9 ">موقع ندرس</h1>
  </div>
  )
}

export default Logo