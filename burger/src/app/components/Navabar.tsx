import Link from 'next/link';
import React from 'react';
import { FaBagShopping, FaBars, FaBurger, FaMotorcycle } from "react-icons/fa6";

const Navabar = () => {
  return (
    <div className="h-[12vh] bg-white">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-full items-center justify-between">
        {/* Logo div */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center text-orange-500">
            <span className="text-[24px] sm:text-[30px] mr-2">
              <FaBurger />
            </span>
            <h1 className="text-[20px] sm:text-[30px] font-bold text-black whitespace-nowrap">Burger Bite</h1>
          </div>
        </div>

        {/* Navbar links */}
        <ul className="hidden lg:flex items-center justify-center space-x-10 h-full w-full">
          <li className="text-[20px] font-medium hover:text-red-600">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-600">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-600">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-600">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="text-[20px] font-medium hover:text-red-600">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

      {/*button*/}
      
      <div className="flex items-center space-x-4">
  <button className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950 transition-all duration-200 hover:bg-red-600
    flex items-center rounded-md space-x-2 text-white">
    
    <FaMotorcycle className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]" />

    <span className="font-bold whitespace-nowrap">Order Now</span>

  </button>

  <button className='sm:px-6 sm:py-5 px-4 py-2 hover:bg-green-700 transition-all duration-200 bg-orange-600
  flex items-center rounded-md text-white'>
    <FaBagShopping />
  </button>
  <FaBars className='lg:hidden w-[2rem] h-[2rem] text-black'/>
</div>

      </div>
    </div>
  );
};

export default Navabar;
