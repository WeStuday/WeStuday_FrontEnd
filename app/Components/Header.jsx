"use client";
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineCloseMini, AiOutlineMenuMini } from "../lib/@react-icons";
import Logo from './Logo';
import Button from './Button';

function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full  px-12 md:px-0 bg-[--background-end] font-Tajawal fixed top-0 left-0 right-0 z-10">
        <div className="justify-between mx-auto pt-2 lg:w-[85rem] md:items-center md:flex">
          <div>
            <div className="flex justify-between py-3 md:py-5 md:flex ">
              {/* LOGO */}
              <Link href="/">
             <Logo/>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                  <AiOutlineCloseMini className="h-6 w-6" aria-hidden="true" />
                  ) : (
                  <AiOutlineMenuMini className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div >
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:flex  md:items-center md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 ' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex  ">
                <li className=" text-lg leading-7 font-medium text-[--color-alt] py-2 md:px-3 text-center border-b-2 md:border-b-0  ">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    الرئيسية
                  </Link>
                </li>
                <li className=" text-lg text-black py-2 px-3 text-center  border-b-2 md:border-b-0 md:hover:text-[--color-alt] ">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    المرحلة الابتدائية
                  </Link>
                </li>
                <li className=" text-lg text-black py-2 px-3 text-center  border-b-2 md:border-b-0 md:hover:text-[--color-alt] ">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    المرحلة الاعدادية
                  </Link>
                </li>
                <li className=" text-lg text-black py-2 px-3 text-center  border-b-2 md:border-b-0  md:hover:text-[--color-alt] ">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    المرحلة الثانوية
                  </Link>
                </li>
              </ul>
            <Button textinner="حول المنصة" nameLink='about' ClassNameAdd='md:mr-52 bg-[--seconderay]'/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;