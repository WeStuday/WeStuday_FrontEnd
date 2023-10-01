"use client";
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineCloseMini, AiOutlineMenuMini } from "../lib/@react-icons";
import Logo from './Logo';
import Button from './Button';
import DropdownMenu from './DropdownMenu';

function Header() {
  const menuItems1 = [
    { id:1,label: 'الصف الأول', link: '#' },
    { id:2,label: 'الصف الثاني', link: '#' },
    { id:2,label: 'الصف الثالث', link: '#' },
    { id:2,label: 'الصف الرابع', link: '#' },
  ];
  const menuItems2 = [
    { id:1,label: 'الصف الخامس', link: '#' },
    { id:2,label: 'الصف السادس', link: '#' },
    { id:2,label: 'الصف السابع', link: '#' },
    { id:2,label: 'الصف الثامن', link: '#' },
  ];
  const menuItems3 = [
    { id:1,label: 'الصف التاسع', link: '#' },
    { id:2,label: 'الصف العاشر', link: '#' },
    { id:2,label: 'الصف الحادي عشر', link: '#' },
    { id:2,label: 'الصف الثاني عشر', link: '#' },
  ];
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full  px-12 md:px-0 bg-[--background-end] font-Tajawal fixed top-0 left-0 right-0 z-10">
        <div className="justify-between mx-auto pt-2 lg:w-[85rem] md:items-center md:flex">
          <div>
            <div className="flex justify-between py-3 md:py-5 md:flex ">
              {/* LOGO */}
              <Link href="/">
                <Logo />
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
                <DropdownMenu name="المرحلة الابتدائية" items={menuItems1} />

                </li>
                <li className=" text-lg text-black py-2 px-3 text-center  border-b-2 md:border-b-0 md:hover:text-[--color-alt] ">
                <DropdownMenu name="المرحلة المتوسطة" items={menuItems2} />
                </li>
                <li className=" dropdown inline-block relative text-lg text-black py-2 px-3 text-center  border-b-2 md:border-b-0  md:hover:text-[--color-alt] ">
                <DropdownMenu name="المرحلة الثانوية" items={menuItems3} />
             
                
                </li>
              </ul>
              <Button textinner="حول المنصة" nameLink='about' ClassNameAdd='md:mr-52 bg-[--seconderay]' />
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Header;