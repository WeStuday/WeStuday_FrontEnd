"use client"
import { Classes } from "../../data/data";
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import MaterialItem from "../MaterialItem";
const page = ({ params: { id } }) => {
  const searchParams = useSearchParams();
  const [state, setState] = useState(1);

  const classLevel = Classes.find((classItem) =>
    classItem.classes.some((classEntry) => classEntry.link === id)
  );
  const classes = classLevel?.classes || [];
  const classItem = classes.find((classEntry) => classEntry.link === id);

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
              <div className='text-4xl font-semibold pt-4 pb-4 '>
                {classItem ? (
                  <h1>مواد {classItem.nameClass} </h1>
                ) : (
                  <p>No class found for the given id.</p>
                )}
              </div>
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
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
              </div>
            </div>
            <div className={`${state === 2 ? "block transition-all" : "hidden"}`}>
              <div className=' flex justify-center items-center gap-10 gap-y-12 flex-wrap '>
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
              </div>
            </div>
            <div className={`${state === 3 ? "block transition-all" : "hidden"}`}>
              <div className=' flex justify-center items-center gap-10 gap-y-12 flex-wrap '>
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
                <MaterialItem nameMaterial="الرياضيات" nameLink='/Materials/' numberLeatures="12" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default page