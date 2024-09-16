"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineCloseMini, AiOutlineMenuMini } from "../../lib/@react-icons";
import Logo from '../Header/Logo'
import DropdownMenu from '../Header/DropdownMenu'
import Button from '../Button'
import { Classes } from '@/app/data/data'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Header() {
  useEffect(() => {
    AOS.init()
  },[])
  const filterItemsByStage = (stage) => {
    const level = Classes.find(item => item.AcademicStage === stage);
    return level ? level.classes : [];
  };
  const primaryLevel = Classes.find(item => item.AcademicStage === 'Primary');
  const preparatoryLevel = Classes.find(item => item.AcademicStage === 'Preparatory');
  const secondaryLevel = Classes.find(item => item.AcademicStage === 'Secondary');

  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav  className="w-full  px-12 md:px-0 bg-[--background-end] font-Tajawal fixed top-0 left-0 right-0 z-10">
        <div className="justify-between mx-auto pt-2 lg:w-[85rem] md:items-center md:flex">
          <div>
            <div  data-aos="zoom-in-left" className="flex justify-between py-3 md:py-5 md:flex ">
              {/* LOGO */}
              <Link href="/">
                <Logo />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div  className="md:hidden">
                <button
                  className="p-1 text-gray-700 rounded-md outline-none focus:border-[--color-alt] focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineCloseMini size={17} className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <AiOutlineMenuMini className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div >
            <div data-aos="zoom-in-down"
              className={`flex-1 justify-self-center pb-3 mt-8 md:flex  md:items-center md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 ' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex  ">
                <li className=" text-lg leading-7 font-medium text-[--color-alt] py-2 md:px-3 text-center border-b-2 md:border-b-0  ">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    الرئيسية
                  </Link>
                </li>
                <li className=" text-lg text-black py-2 px-3 text-center  border-b-2 md:border-b-0 md:hover:text-[--color-alt] ">
                  {primaryLevel && (
                    <DropdownMenu
                      nameLevel={primaryLevel.nameLevel}
                      stage="Primary"
                      items={filterItemsByStage('Primary')}
                    />)}                </li>
                <li className=" text-lg text-black py-2 px-3 text-center  border-b-2 md:border-b-0 md:hover:text-[--color-alt] ">
                  {preparatoryLevel && (
                    <DropdownMenu
                      nameLevel={preparatoryLevel.nameLevel}
                      stage="Preparatory"
                      items={filterItemsByStage('Preparatory')}
                    />
                  )}
                </li>
                <li className=" text-lg text-black py-2 px-3 text-center  border-b-2 md:border-b-0 md:hover:text-[--color-alt] ">
                  {secondaryLevel && (
                    <DropdownMenu
                      nameLevel={secondaryLevel.nameLevel}
                      stage="Secondary"
                      items={filterItemsByStage('Secondary')}
                    />
                  )}
                </li>

              </ul>
              <Button textinner="حول المنصة" nameLink='/about' ClassNameAdd='md:mr-52 bg-[--seconderay]' />
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Header;