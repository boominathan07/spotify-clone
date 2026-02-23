import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

function Player() {
  const {seekBar,seekBg,status,play,pause,track,time,next,previous,seekSong}=useContext(PlayerContext)
  if (!track) return null;
  return (
    <div className="bg-black h-[10%] flex justify-between items-center text-white px-2">
      
          <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
          </div>
          
      <div className="flex flex-col items-center gap-2 justify-between">

              
        <div className="flex flex-row gap-4">
          <img src={assets.shuffle_icon} className="w-4 cursor-pointer" alt="" />
          <img onClick={previous} src={assets.prev_icon} className="w-4 cursor-pointer" alt="" />
          {status ? <img onClick={pause} src={assets.pause_icon} className="w-4 cursor-pointer" alt="" /> :
          <img onClick={play} src={assets.play_icon} className="w-4 cursor-pointer" alt="" />
          }
          <img onClick={next} src={assets.next_icon} className="w-4 cursor-pointer" alt="" />
          <img  src={assets.loop_icon} className="w-4 cursor-pointer" alt="" />
        </div>

              
        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div onClick={seekSong} ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBar} className=" h-1 border-0 w-[0%] bg-green-500 rounded-full" />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
              </div>
              </div>

              
        <div className="flex flex-row gap-4 items-center">
  <img src={assets.plays_icon} className="w-4 cursor-pointer hidden md:block" alt="" />
  <img src={assets.mic_icon} className="w-4 cursor-pointer hidden md:block" alt="" />
  <img src={assets.queue_icon} className="w-4 cursor-pointer hidden md:block" alt="" />
  <img src={assets.speaker_icon} className="w-4 cursor-pointer hidden md:block" alt="" />
  <img src={assets.volume_icon} className="w-4 cursor-pointer hidden md:block" alt=""  />
  <div className="w-12 md:w-20 h-1 bg-slate-50 rounded-full hidden md:block"></div>
  <img src={assets.mini_player_icon} className="w-4 cursor-pointer hidden md:block" alt="" />
  <img src={assets.zoom_icon} className="w-4 cursor-pointer hidden md:block" alt="" />

</div>
        
      </div>
    
  );
}

export default Player;
