import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    return (
      <>
      <div className='m-1 font-semibold w-[100%] flex flex-row justify-between'>
          <div className='flex gap-2 items-center'>
              <img onClick={()=>navigate(-1)} className='w-8 p-2  bg-black  rounded-2xl cursor-pointer' src={assets.arrow_left} alt='' />
              <img onClick={()=>navigate(+1)} className='w-8 p-2 bg-black  rounded-2xl cursor-pointer' src={assets.arrow_right} alt='' />
          </div>
          <div className='flex flex-row gap-2 items-center'>
<p className='text-black bg-white text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 font-semibold rounded-full'>Explore Premium</p>
<p className='text-white bg-black text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 rounded-full'>Install App</p>
              <p className='text-white bg-purple-500  h-7 rounded-2xl w-7 flex justify-center'>B</p>
              </div>
            </div>
            <div className='mt-4 flex flex-row gap-2 items-center'>
                <p className='text-black bg-white
               px-3 py-1 rounded-full  font-semibold cursor-pointer'>All</p>
                <p className='text-white bg-black rounded-full  font-semibold cursor-pointer px-4 py-1'>Music</p>
                <p className='text-white bg-black rounded-full font-semibold cursor-pointer px-4 py-1'>Podcasts</p>
            </div>
            </>
  )
}

export default Navbar