"use client"
import Image from 'next/image';
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
const page = () => {
  useEffect(() => {
    AOS.init()
  },[])

  return (
    <div data-aos="fade-up"
    data-aos-duration="3000"  className='my-40 '>
      <h1 className='font-Tajawal bg-[#58336c] text-white text-4xl font-bold p-24 w-full text-center rounded-xl mb-8'>
        حول المنصة
      </h1>
      <div className='flex justify-center py-8 ml-8 md:mx-24 '>
      <div className='w-2/3'>
        <h3 className='font-Tajawal text-2xl font-semibold py-4 '>
          حول المنصة
        </h3>
        <p className='text-lg'>
          منصة مستر محمد فاروق هي منصة تعليمية متخصصة في تقديم دروس اللغة الإنجليزية عبر الإنترنت، وهي مدرس خبير في هذا المجال. تتميز هذه المنصة بأنها تقدم دروساً متميزة لطلاب المرحلة الثانوي.
          <br />
          تعتمد منصة مستر محمد فاروق في تدريسها على أسلوب حديث ومنهجية فعالة، تركز على تلبية احتياجات الطلاب بشكل دقيق وفعال. وتقدم المنصة دروساً شاملة ومتنوعة، تشمل القراءة والكتابة والاستماع والمحادثة واكيد المنهج المقرر علي الطالب ، بالإضافة إلى تقديم النصائح والإرشادات الهامة لتحسين مهارات اللغة الإنجليزية.
          ويتميز مستر محمد فاروق بخبرته الواسعة في تدريس اللغة الإنجليزية، حيث يتمتع بسنوات عديدة من الخبرة في هذا المجال.
          <br />
          وتتميز منصة مستر محمد فاروق بأنها متاحة للطلاب في جميع أنحاء العالم، ويمكن الحصول على دروسها بسهولة عبر الإنترنت. وبفضل جودة التعليم التي تقدمها المنصة، فإن الطلاب يحصلون على فرصة لتحسين مهاراتهم في اللغة الإنجليزية بشكل كبير وتحقيق نتائج ملموسة.
        </p>
      </div>
      <div  className='w-1/3 mr-48 mt-24'>
      <Image
        src="/img/about.png"
        alt="صورة الصفحة الرئيسية ندرس"
        width={150}
        height={150}
        priority
      />
      </div>
      </div>
      <br />
      <br />
      <div className='flex justify-center py-8 ml-8 md:mx-24 '>
      <div className='w-1/3 mr-48 mt-24'>
      <Image
        src="/img/vision.png"
        alt="صورة الصفحة الرئيسية ندرس"
        width={150}
        height={150}
        priority
      />
      </div>
      <div className='w-2/3'>
        <h3 className='font-Tajawal text-2xl font-semibold py-4 '>
          رؤية المنصة
        </h3>
        <p className='text-lg'>
          منصة مستر محمد فاروق هي منصة تعليمية متخصصة في تقديم دروس اللغة الإنجليزية عبر الإنترنت، وهي مدرس خبير في هذا المجال. تتميز هذه المنصة بأنها تقدم دروساً متميزة لطلاب المرحلة الثانوي.
          <br />
          تعتمد منصة مستر محمد فاروق في تدريسها على أسلوب حديث ومنهجية فعالة، تركز على تلبية احتياجات الطلاب بشكل دقيق وفعال. وتقدم المنصة دروساً شاملة ومتنوعة، تشمل القراءة والكتابة والاستماع والمحادثة واكيد المنهج المقرر علي الطالب ، بالإضافة إلى تقديم النصائح والإرشادات الهامة لتحسين مهارات اللغة الإنجليزية.
          ويتميز مستر محمد فاروق بخبرته الواسعة في تدريس اللغة الإنجليزية، حيث يتمتع بسنوات عديدة من الخبرة في هذا المجال.
          <br />
          وتتميز منصة مستر محمد فاروق بأنها متاحة للطلاب في جميع أنحاء العالم، ويمكن الحصول على دروسها بسهولة عبر الإنترنت. وبفضل جودة التعليم التي تقدمها المنصة، فإن الطلاب يحصلون على فرصة لتحسين مهاراتهم في اللغة الإنجليزية بشكل كبير وتحقيق نتائج ملموسة.
        </p>
      </div>
     
      </div>
    </div>
  )
}

export default page