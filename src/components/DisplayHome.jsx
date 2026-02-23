import React from 'react'
import Navbar from './Navbar'
import { albumsData, assets, songsData } from '../assets/assets'
import DisplayAblumData from './DisplayAblumData'
import SongDatac from './SongDatac'

function DisplayHome() {
  return (
      <>
          <Navbar />
          <div className='mb-5 '>
              <h1 className='my-5 font-bold text-2xl'>Features Charts</h1>
              <div className='flex overflow-auto'>
              {albumsData.map((item) => (
                  <DisplayAblumData name={item.name} key={item.id}   desc={item.desc} img={item.image} id={item.id} />
              ))}
              </div>
              </div>
              <div>
              <h2 className='font-bold text-2xl'>Today's Biggest hits</h2>
              <div className='flex overflow-auto'>
              {songsData.map((item) => (
                  <SongDatac key={item.id} id={item.id} name={item.name} img={item.image} desc={item.desc} />
              ))}
              </div>
          </div>
     </>
  
  )
}

export default DisplayHome