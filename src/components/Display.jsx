import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Route,Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import Ablum from './Ablum'
import { useRef } from 'react'
import { albumsData } from '../assets/assets'

function Display() {
  const displayRef = useRef();
  const locations = useLocation();
  const isAblum = locations.pathname.includes("ablum");
  const isAblumId =isAblum? locations.pathname.slice(-1):"";
  const bgcolor = isAblum && isAblumId!==" "?albumsData[Number(isAblumId)].bgColor:"#121212";
  useEffect(() => {
    if (isAblum) {
      displayRef.current.style.background=`linear-gradient(${bgcolor},#121212)`
    }
    else {
      displayRef.current.style.background = "#121212";
      
    }
  },[isAblum,bgcolor])
  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] overflow-auto text-white  lg:w-[100%] lg:ml-2'>
          <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/ablum/:id' element={<Ablum />} />
          </Routes>
          
    </div>
  )
}

export default Display