import React from "react";
import Main from "./Assets/Main.png";
import Search from "./Assets/Search.svg"


const NavBar = () => {
  return(
    <nav className="flex flex-row">
      <div className="">
        <img src={Main} alt="main" className="w-[149px] mt-[16.5px] ml-[96px] cursor-pointer"/>
      </div>
      <div className="border-[1px] border-[#aaaaaa] w-[608px] flex flex-row items-center h-[44px] mt-[22px] ml-[55.5px] rounded-[4px]">
        <div>
          <img src={Search} alt="search" className="ml-[15px] mt-[-1px]"/>
        </div>
        <div className="ml-[13.5px] font-['Poppins'] text-[14px] pt-[1px] text-[#7a7575] font-[500]">
          What do you want to learn?
        </div>
      </div>
      <div className="h-[38px] bg-[#5A4BDA] text-[white] font-['Poppins']text-[16px] font-[600] w-[185px] text-center mt-[24.5px] ml-[32px] rounded-[4.5px] pt-[6px] tracking-[.5px] cursor-pointer">Login / Register</div>
    </nav>
  )
}

export default NavBar;