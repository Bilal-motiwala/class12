import React from 'react'
import Image from 'next/image'
import logo from"@/app/assets/logo.png"
const Navbar = () => {
  return (
    <div>
      <div className='w-[1920px] h-[92px] bg-[#043873] py-2 px-[220px] flex justify-between '>
      
      <div>
        <Image src={logo} alt='logo' width={80} height={80} />
      </div>

      <div className='w-[737.5px] h-60px flex justify-between items-center '>
      <div className='w-[549px] h-23px'>
      <ul className='text-[18px] font-semibold leading-[23px] flex items-center text-white gap-4'>
        <li>Product</li>
        <li>Solutions</li>
        <li>Resources</li>
        <li>Pricing</li>
      </ul>
      </div>
      

      <div>
        <button className='py-4 px-10 rounded-lg bg-[#FFE492]'>Login</button>
      </div>


      </div>
      </div>
    </div>
  )
}

export default Navbar
