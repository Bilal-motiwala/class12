import React from 'react'
import Image from 'next/image'
import logo from"@/app/assets/logo.png"
const Header = () => {
  return (
    <main>
      <div className='w-[1920px] h-[92px] justify-between left-1 py-[16px] px-[220px] bg-[#043873] flex'>

        <div className='w-[191px] h-[34px] justify-between mt-3'>
          <Image src={logo} alt='logo' />
        </div>

        <div className='w-[737.5px] h-[60px] gap-[60px]'>
          <div className='w-[549px] h-[23px] gap-[32px]'>
            <ul className='w-[78px] h-[23px] text-[18px] leading-[23px] text-white font-sans gap-10 flex justify-between  mt-4 ml-96'>
              <li>Products</li>
              <li>Solutions</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>

        <div className='w-[126px] h-[60px] gap-[24px] mr-16'>
          <button className='w-[126px] h-[60px] gap-[10px] rounded-lg bg-[#FFE492] py-4 px-10 '>Login</button>
        </div>

      </div>
    </main>
  )
}

export default Header
