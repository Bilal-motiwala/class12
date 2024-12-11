import React from 'react'
import Image from 'next/image'
import logo from '@/app/assets/logo.png'

const Header = () => {
  return (
    <header>
      <div className='w-full h-[92px] flex justify-between items-center py-4 px-6 md:px-12 lg:px-[220px] bg-[#043873]'>
        {/* Logo Section */}
        <div className='w-[191px] h-[34px]'>
          <Image src={logo} alt='logo' />
        </div>

        {/* Navigation Section */}
        <nav className='hidden md:flex w-auto gap-10'>
          <ul className='flex gap-8 text-[18px] leading-[23px] text-white font-sans'>
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
        </nav>

        {/* Login Button Section */}
        <div className='w-[126px]'>
          <button className='w-full h-[60px] rounded-lg bg-[#FFE492] text-center py-2'>
            Login
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className='md:hidden'>
        <ul className='flex flex-col items-center gap-4 py-4 bg-[#043873] text-white text-[16px]'>
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
