/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Image from 'next/image'
import Pic from"@/app/assets/Pic.png"

const Herosection = () => {
  return (
    <main>
      <div className=' w-[1920px] h-[829px] top-[92px] left-[1px] pt-[140px] pr-[220px] pl-[220px] pb-[140px] bg-[#043873]'>
        
        <div className='w-[656px] h-[361px] gap-[60px]'>
            
            <div className='w-[656px] h-[238px] gap-[24px]'>
                <h2 className='w-[656px] h-[100px] size-[64px] leading-[77.45px] tracking-tight text-[#FFFF] text-6xl py-5'>Get More Done with whitepace </h2>
            </div>

            <div>
            <p className='w-[656px] h-[60px] tracking-tight size-[18px] leading-[30px] text-[#FFFF] '>
        Project management software that enables your teams to collaborate, plan, <br />
         analyze and manage everyday tasks
        </p>
        </div>

        </div>


        <div className='w-[219px] h-[63px] rounded-lg p-5 gap-[10px] bg-[#4F9CF9]'>
          <div className='w-[259px] h-[23px] font-medium leading-[23px] tracking-tight text-[#FFFF] '>Try Whitepace Free -></div>
        </div>


        <div className='w-[824px] h-[549px] gap-[4px]'>
        <Image src={Pic} alt='pic1' />
        </div>


      </div>
      <br />
    </main>
  )
}

export default Herosection 