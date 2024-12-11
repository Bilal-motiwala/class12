/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Image from 'next/image'
import Pic from '@/app/assets/Pic.png'

const Footer = () => {
  return (
    <main>
      {/* Footer Section */}
      <footer className='bg-[#043873] text-white py-10 px-6 md:px-[220px]'>
        <div className='flex flex-col md:flex-row justify-between gap-8'>
          {/* Footer Left Section */}
          <div className='w-full md:w-[30%]'>
            <h2 className='text-2xl font-bold mb-4'>whitepace</h2>
            <p className='text-[14px] leading-6 text-[#E5E5E5]'>
              whitepace was created for the <em>new</em> ways we live and work. We make a better workspace around the world.
            </p>
          </div>

          {/* Footer Links Section */}
          <div className='flex flex-wrap w-full md:w-[65%] justify-between'>
            <div>
              <h3 className='text-lg font-semibold mb-4'>Product</h3>
              <ul className='text-[#E5E5E5] text-[14px] leading-6'>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Customer stories</li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-4'>Resources</h3>
              <ul className='text-[#E5E5E5] text-[14px] leading-6'>
                <li>Blog</li>
                <li>Guides & tutorials</li>
                <li>Help center</li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-4'>Company</h3>
              <ul className='text-[#E5E5E5] text-[14px] leading-6'>
                <li>About us</li>
                <li>Careers</li>
                <li>Media kit</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className='mt-8 text-center text-[#E5E5E5] text-sm'>
          <hr className='border-[#E5E5E5] mb-4' />
          <p>&copy;2021 Whitepace LLC.</p>
        </div>
      </footer>
    </main>
  )
}

export default Footer
