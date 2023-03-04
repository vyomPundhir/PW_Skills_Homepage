import React from "react";

const Card1 = ({source, title, category}) => {
  return(
    <div className="mt-[75.5px]">
      <div className="">
        <img src={source} alt="image" className="w-[160px] ml-[30px]"/>
      </div>
      <div className="text-center text-[black] font-['Poppins'] text-[30px] font-[600] mt-[24px]">
        {title}
      </div>
      <div className="text-center font-['Poppins'] text-[25px] font-[600] mt-[20px] text-[grey]">
        {category}
      </div>
    </div>
  )
}

export default Card1;