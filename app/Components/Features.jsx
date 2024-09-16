import React from 'react'
import Image from 'next/image'
const Features = () => {
  return (
    <div className='w-full font-Tajawal pb-20 h-auto bg-[--background-end]'>
      <section className='bg-[--seconderay] text-white rounded-2xl mx-6 md:mx-24 p-6 flex justify-center items-center flex-wrap md:flex-nowrap space-x-4'>
        {/* feature one  */}
        <div className='md:w-1/3 flex  justify-between  gap-4 items-center px-4 py-6'>
          <div className='bg-[#71567E]  p-2 flex items-center justify-center rounded-2xl'>
            <Image
              src='/img/certification.webp'
              width={20}
              height={20}
              className='mt-2 w-36 md:w-20 h-[40px]'
              alt="the image is certification"
            />
          </div>

          <div className=''>
            <h2 className='font-medium text-xl py-2 leading-6'>البحث عن ملفات</h2>
            <p className='font-light'>
              للمواد الدراسية  سواء كنت تبحث عن ملخصات للمواد الدراسية أو التحضير للاختبارات المثالية.
            </p>
          </div>

        </div>

        {/* feature Thow  */}
        <div className='md:w-1/3 flex  justify-between  gap-4 items-center px-4 py-6'>
          <div className='bg-[#71567E]  p-2 flex items-center justify-center rounded-2xl'>
            <Image
              src='/img/exam.png'
              width={20}
              height={20}
              className='mt-2 w-36 md:w-20 h-[40px]'
              alt="the image is certification"
            />
          </div>

          <div className=''>
            <h2 className='font-medium text-xl py-2 leading-6'>عرض جميع الفصول</h2>
            <p className='font-light'>
              للمواد الدراسية  سواء كنت تبحث عن ملخصات للمواد الدراسية أو التحضير للاختبارات المثالية.
            </p>
          </div>

        </div>
        {/* feature Three  */}

        <div className='md:w-1/3 flex  justify-between  gap-4 items-center px-4 py-6'>
          <div className='bg-[#71567E]  p-2 flex items-center justify-center rounded-2xl'>
            <Image
              src='/img/online-test.webp'
              width={40}
              height={40}
              className='mt-2 w-36 md:w-20 h-[40px]'
              alt="the image is certification"
            />
          </div>

          <div className=''>
            <h2 className='font-medium text-xl py-2 leading-6'>تعلم أحدث المهارات</h2>
            <p className='font-light'>
              للمواد الدراسية  سواء كنت تبحث عن ملخصات للمواد الدراسية أو التحضير للاختبارات المثالية.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Features