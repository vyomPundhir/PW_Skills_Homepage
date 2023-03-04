import React from "react";
import Down from "./Assets/Down.svg"

const List = () => {
  return(
    <section className="flex flex-row mt-[27px] ml-[119px]">
      <div className="flex flex-row cursor-pointer">
        <div className="font-['Poppins'] font-[500] text-[black]">Courses</div>
        <div>
        <img src={Down} alt="arrow" className="w-[7px] ml-[10px] mt-[8px]"/>
        </div>
      </div>
      <div className="font-['Poppins'] font-[500] ml-[55px] text-[black] cursor-pointer">PW Skills Lab</div>
      <div className="font-['Poppins'] font-[500] ml-[47px] text-[black] cursor-pointer">Job Portal</div>
      <div className="font-['Poppins'] font-[500] ml-[47px] text-[black] cursor-pointer">Experience Portal</div>
      <div className="font-['Poppins'] font-[500] ml-[46.5px] text-[black] cursor-pointer">Become an affiliate</div>
      <div className="font-['Poppins'] font-[500] ml-[47px] cursor-pointer text-[black]">Hall of fame</div>
      <div className="flex flex-row cursor-pointer">
        <div className="font-['Poppins'] font-[500] ml-[31.5px] text-[black]">
          More
        </div>
        <div>
          <img src={Down} alt="arrow" className="w-[7px] ml-[10px] mt-[8px]"/>
        </div>
      </div>
    </section>
  )
}

export default List;