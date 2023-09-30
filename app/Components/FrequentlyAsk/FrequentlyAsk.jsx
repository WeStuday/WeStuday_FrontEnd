"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import SectionAsk from './SectionAsk';
import { faqs } from "../../data/data";
const FrequentlyAsk = () => {
    
    const [Visible, setVisible] = useState(4);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }

    return (
        <>
            <div className='bg-white pb-24 w-full h-full flex items-center flex-col '>
                <SectionAsk data={faqs} Visible={Visible} setVisible={setVisible}/>
                {faqs.slice(0,Visible).length === faqs.length ? 
                    <Link  href="FrequentlyAsk"> <button
                className="h-12 w-auto cursor-pointer rounded-[6px] py-3 px-8  text-[19px] font-medium leading-6 bg-[--seconderay] text-white  hover:bg-[--color-alt]"
                onClick={showMoreItems}
                > 
                   انتقل الى صفحة الاسئلة
               </button>
               </Link>
               :                
               <button
               className="h-12 w-auto cursor-pointer rounded-[6px] py-3 px-8  text-[19px] font-medium leading-6 bg-[--seconderay] text-white hover:text-[#1F1B4A] hover:bg-[--color-alt]"
               onClick={showMoreItems}
               > 
                  المزيد من الأسئلة 
              </button>}
            </div>
        </>

    );
};


export default FrequentlyAsk