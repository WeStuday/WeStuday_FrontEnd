import React from 'react'
import {faqs} from '../data/data'
import SectionAsk from '../Components/FrequentlyAsk/SectionAsk'
const page  = () => {
  return (
    <div className='bg-white mt-36 flex justify-center items-center flex-col pb-16'>
        <div className='text-center'>
            <h1 className='text-3xl font-semibold p-2 text-[--color-alt]'> أسئلة مكررة حول الموقع</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </div>
            <SectionAsk data={faqs} />
    </div>
  )
}

export default page 