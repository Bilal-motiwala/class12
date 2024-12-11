/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Image from 'next/image'
import Pic from '@/app/assets/Pic.png'

const Herosection = () => {
  return (
    <main>
      <div className='w-full h-auto md:h-[829px] pt-[100px] md:pt-[140px] px-6 md:px-[220px] bg-[#043873] flex flex-col md:flex-row items-center'>
        {/* Text Section */}
        <div className='w-full md:w-[656px] mb-8 md:mb-0'>
          <div className='gap-[24px]'>
            <h2 className='text-[40px] md:text-[64px] leading-[50px] md:leading-[77.45px] tracking-tight text-[#FFFF] font-bold'>
              Get More Done with whitepace
            </h2>
          </div>

          <div className='mt-4'>
            <p className='text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#FFFF]'>
              Project management software that enables your teams to collaborate, plan,<br />
              analyze and manage everyday tasks
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full md:w-[656px] flex justify-center md:justify-end'>
          <Image src={Pic} alt='Hero Image' className='w-full h-auto md:w-[656px] md:h-[361px]' />
        </div>
      </div>
    </main>
  )
}

export default Herosection
