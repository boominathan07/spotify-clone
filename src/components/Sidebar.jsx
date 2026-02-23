import React from "react";
import { assets } from "../assets/assets";
function Sidebar() {
  return (
    <div className="w-[25%] h-full  flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-bold">Your Libary</p>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div className="bg-[#202020] m-2 rounded font-semibold flex flex-col items-start justify-between py-2">
            <h1>Create Your First playlist</h1>
            <p className="font-extralight">its easy we will help you</p>
            <button className="px-4 py-1.5  text-[15px] text-center text-black bg-white rounded-full mt-4 mb-1 border-amber-50 cursor-pointer">
              Create playlist
            </button>
              </div>
              
<div className="bg-[#202020] m-2 rounded font-semibold flex flex-col items-start justify-between mt-4 py-2">
            <h1>Let's findsome podcasts to follow  </h1>
            <p className="font-extralight">we'll keep you update on new episode</p>
            <button className="px-4 py-1.5  text-[15px] text-center text-black bg-white rounded-full mt-4 mb-1 border-amber-50 cursor-pointer">
              Browser Podcasts
            </button>
        </div>
              
      </div>
    </div>
  );
}

export default Sidebar;
