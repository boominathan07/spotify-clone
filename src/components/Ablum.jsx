import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import Navbar from './Navbar';
import { PlayerContext } from '../context/PlayerContext';

function Ablum() {
    const { id } = useParams();
    const ablumData = albumsData[id];
    const { playWithId } = useContext(PlayerContext);
  return (
      <>
          <Navbar />
          <div className='mt-8 sm:flex flex-col  lg:flex flex-row gap-4'>
              <img className='w-50' src={ablumData.image} alt="" />
              <div className='flex flex-col gap-2 justify-evenly mt-4'>
                  <h3 className='font-semibold'>Playlist</h3>
                  <h1 className='font-bold text-5xl'>{ablumData.name}</h1>
                  <p>{ablumData.desc}</p>
                <div className='flex flex-wrap gap-1 items-center'>
  <img className='w-5 h-5 object-contain flex-shrink-0' src={assets.spotify_logo} alt='Spotify' />
  <p className='font-bold'>Spotify</p>
  <p className='text-gray-400'>1,323,154</p>
  <p className='font-bold'>• 50 songs</p>
  <p className='text-gray-400 text-sm'>about 2hr 30min</p>
</div>
              </div>
          </div>
          <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] justify-between items-center'>
              <p><b className='mr-4'>#</b>Title</p>
              <p>Ablum</p>
              <p className='hidden sm:block'>Data Added</p>
              <img className='w-4' src={assets.clock_icon} alt="" />
          </div>
          <hr />
          {songsData.map((item,index) =>( 
             
              <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center hover:bg-[#a7a7a7]'>
                  <p className='text-white inline'>
                      <b className='mr-4 text-[a7a7a7]' >{index + 1}</b>
                     <img className='inline w-10 mr-5' src={item.image} alt="" />
                     {item.name}
                  </p>
                  <p className='text-[15px]'>{ablumData.name}</p>
                  <p className='text-[15px] hidden sm:block'>5 days Ago</p>
                  <p className='text-[15px] text-center'>{item.duration}</p>
                
            </div>
        
          ))}
      </>
  )
}

export default Ablum