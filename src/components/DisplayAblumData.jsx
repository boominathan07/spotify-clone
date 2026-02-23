import React from "react";
import { useNavigate } from "react-router-dom";

function DisplayAblumData({ name, desc, img, id }) {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={()=>navigate(`/ablum/${id}`)} className="min-w-[180px] bg-[#121212]  hover:bg-[#ffffff26] p-2 px-2" >
        <img src={img} alt="" />
        <h2 className="font-bold mt-2 mb-1">{name}</h2>
        <p className="text-slate-200 text-sm">{desc}</p>
      </div>
    </>
  );
}

export default DisplayAblumData;
