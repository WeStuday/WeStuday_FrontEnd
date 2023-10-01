"use client"
import React, { useState } from 'react'
import ClassItem from '../Components/EducationalSubjects/ClassItem'
import Image from "next/image"
import MaterialItem from './materialItem'
const page = () => {
  const [state, setState] = useState(1);
  const action = (index) => {
    setState(index)
  }
  return (
    <div className='p-24 mt-12 '>
      <div>
        {/* tabs this website  */}
        <div className="mb-24">
          <div className='bg-[--seconderay] mb-8 rounded-xl relative w-full h-[280px]'>
            <div className='p-8   text-white'>
              <h1 className='text-4xl font-semibold pt-4 pb-4 '>
                مواد الصف الثالث الإعدادي
              </h1>
              <p className='pt-4'>
                الدروس الجديدة يتم إضافتها بشكل دوري على هذه الصفحة، تابعنا لاستكمال باقي دروس المنهج
              </p>
            </div>
            <div className="bg-[#71567E] rounded-xl p-4 w-full absolute bottom-0 right-0 text-white flex justify-start items-center gap-7 text-xl font-semibold leading-7 ">
              <div onClick={() => action(1)} className={`${state === 1 ? "tab active-tabClass" : "tab"}`} > الفصل الأول</div>
              <div onClick={() => action(2)} className={`${state === 2 ? "tab active-tabClass" : "tab"}`} > الفصل الثاني</div>
              <div onClick={() => action(3)} className={`${state === 3 ? "tab active-tabClass" : "tab"}`} > الفصل الثالث</div>
            </div>
          </div>

          <div className="pt-10">
            <div className={`${state === 1 ? " block transition-all" : "hidden"}`}>
              <div className=' flex justify-center items-center gap-10 gap-y-12 flex-wrap '>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>

              </div>
            </div>
            <div className={`${state === 2 ? "block transition-all" : "hidden"}`}>
            <div className=' flex justify-center items-center gap-10 gap-y-12 flex-wrap '>
            <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              </div>
            </div>
            <div className={`${state === 3 ? "block transition-all" : "hidden"}`}>
            <div className=' flex justify-center items-center gap-10 gap-y-12 flex-wrap '>
            <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              <MaterialItem nameMaterial="اللغة العربية" nameLink='arabic'numberLeatures="12"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page