import React from 'react'
import Image from 'next/image'
import Button from './Button'
const Benefits = () => {
    return (
        <div className='w-full font-Tajawal flex-wrap md:flex-nowrap mb-12 px-12  md:pt-12 md:px-24 bg-[--background-end]  flex justify-center items-center gap-24'>
            <div className='w-full relative md:w-1/2 '>
                <div className='hidden md:block absolute left-32  -top-2 w-12 h-12 '>
                    <Image
                        src="/img/hero-1.svg"
                        alt="صورة الصفحة الهيرو موقع ندرس"
                        width={65}
                        height={65}
                    />
                </div>
                <div className='hidden md:block absolute left-12 top-64 w-12 h-12 '>
                    <Image
                        src="/img/react.png"
                        alt="صورة الصفحة الهيرو موقع ندرس"
                        width={65}
                        height={65}
                    />
                </div>
                <div className='hidden md:block absolute left-12 top-24 w-12 h-12 '>
                    <Image
                        src="/img/world.png"
                        alt="صورة الصفحة الهيرو موقع ندرس"
                        width={70}
                        height={70}
                    />
                </div>
                <Image
                    src="/img/benfit.png"
                    alt="صورة الصفحة الهيرو موقع ندرس"
                    width={380}
                    height={380}
                    className='mr-16'
                />
            </div>
            <div className=' flex  justify-start items-start gap-5 flex-col'>


                <h1 className='w-full  text-[33px] md:text-[35px] font-semibold'>
                    أسلوب للتفوق بطريقة آمنة توفر وقت وجهد الطلاب
                </h1>
                <div>
                    <div className=' flex  justify-between  gap-4 items-center px-4 py-6'>
                        <div className='bg-[#71567E]  p-3 flex items-center justify-center rounded-2xl'>
                            <Image
                                src='/img/love-b1.png'
                                width={20}
                                height={20}
                                className='mt-2  w-36 md:w-8 h-[25px]'
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

                    <div className=' flex  justify-between  gap-4 items-center px-4 py-2'>
                        <div className='bg-[#71567E]  p-3 flex items-center justify-center rounded-2xl'>
                            <Image
                                src='/img/jigsaw.png'
                                width={20}
                                height={20}
                                className='mt-2  w-36 md:w-8 h-[25px]'
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
                </div>
            </div>



        </div>
    )
}

export default Benefits