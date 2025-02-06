import React from 'react'
import End_Logo from '../../assets/end_logo.png'

function Footer() {
  return (
    <div className='max-w-[1500px] mx-auto bg-black'>
      <div className='grid grid-cols-1 text-center items-center sm:grid-cols-[1fr_4fr] sm:text-end p-2 sm:p-4 md:px-5 lg:px-10 lg:py-5'>
        <div className='w-[150px] h-full'>
          <img src={End_Logo} alt="" />
        </div>
        <div className='text-start sm:text-end'>
          <p className='text-white'>© 2024 Limsa. Барча ҳуқуқлар ҳимояланган.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer