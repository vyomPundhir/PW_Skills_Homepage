import React from "react";
import Linkedin from "./Assets/Linkedin.svg";

const Card2 = ({source, name, post, des}) => {
  return (
    <div className="w-[384px] h-[420px] flex flex-col items-center gap-[20px] shadow-[-5px_0px_50px_1px_#c9c9c9] rounded-[10px] ml-[-40px] bg-[#FBFEFF] font-['Poppins']">
      <div>
        <img src={source} alt="profile" className="w-[112px] h-[112px] rounded-[100px] mt-[30px]"/>
      </div>
      <div className="text-center text-[black] text-[19px] font-[600] mt-[-12px] cursor-pointer">
        {name}
      </div>
      <div className="text-center text-[#646566] text-[14px] w-[310px]">
        {post}
      </div>
      <div className="text-center text-[#646566] w-[364px] text-[14px] ml-[9.5px]">
        {des}
      </div>
      <div>
        <img src={Linkedin} alt="linkedin" className="w-[23px] cursor-pointer"/>
      </div>
    </div>
  )
}
export default Card2;