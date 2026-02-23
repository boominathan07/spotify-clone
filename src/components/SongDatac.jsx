import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

function SongDatac({ img, name, desc, id }) {
    const { playWithId } = useContext(PlayerContext);
  return (
      <>
          <div onClick={()=>playWithId(id)} className='min-w-[180px] bg-[#121212] hover:bg-[#ffffff26] p-2 px-2'>
              <img src={img} alt='' />
              <h2 className='font-bold mt-2 mb-1'>{name}</h2>
              <p className='text-sm'>{desc}</p>
          </div>
      </>
  )
}

export default SongDatac