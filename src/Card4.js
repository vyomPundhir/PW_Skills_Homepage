import React from "react";

const Card4 = ({source, title, des}) => {
  return(
    <div className="mt-[70px] w-[295px]">
      <div>
        <img src={source} alt="image" className="w-[160px] ml-[70px]"/>
      </div>
      <div className="text-center text-[black] font-['Poppins'] text-[24px] font-[600] mt-[24px]">
        {title}
      </div>
      <div className="text-center font-['Poppins'] text-[17px] font-[400] mt-[30px] text-[grey]">
        {des}
      </div>
    </div>
  )
}

export default Card4;