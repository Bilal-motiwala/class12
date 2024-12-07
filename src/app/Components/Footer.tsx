import React from 'react'
import Image from 'next/image'
import Vector from "@/app/assets/Vector.png"
import Group from"@/app/assets/Group.png"

const Footer = () => {
  return (
    <main>
    <div className='w-[1920px] h-[461px] top-[5195px] left-[1px] pt-[140px] pr-[220px] pb-[32px] gap-[200px] bg-[#043873]'>
      
      <div className='w-[1480px] h-[289px] gap-[100px]'>

        <div className='w-[295px] h-[169px] gap-[15px]'>

            <div className='w-[191px] h-[34px]'>

                <div className='w-[144px] h-[34px] left-[47px] font-bold size-[28px] leading-[33.89px] text-[#FFFF] p-20'>
                    whitepace
                </div>

                <div className='w-[37px] h-[29px] top-[2.5px]'>
                    <div className='w-[37px] h-[29px] text-[#FFFF]'>
                    <div>
                    <div className='w-[37px] h-[11.49px] text-[#FFFF] pt-1'>
                            <Image src={Group} alt='Group' />
                    </div>
                        <div className='w-[37px] h-[26.46px] top-[2.55px] text-[#FFFF] pt-1 '>
                            <Image src={Vector} alt='Vector' />
                        </div>
                        </div>
                    </div>
                </div>

                <div className='w-[240px] h-[120px] font-normal size-[18px] leading-[30px] tracking-tight text-[#F7F7EE]'>
                    <p>whitepace was created for <br />the new ways we live and work. We make a better workspace around the world</p>
                </div>

            </div>

        </div>

      </div>

    </div>
    </main>
  )
}

export default Footer
