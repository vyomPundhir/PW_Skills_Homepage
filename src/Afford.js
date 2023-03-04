import React from "react";
import Card3 from "./Card3";
import Hitesh1 from "./Assets/Hitesh1.jpg";
import Krish1 from "./Assets/Krish1.jpg";
import Priya1 from "./Assets/Priya1.jpg";
import Sanket1 from "./Assets/Sanket1.jpg";

const Afford = () => {
  return(
    <section>
    <div className="font-['Poppins'] text-[#5A4BDA] font-[600] text-[36px] ml-[425px] mt-[83px]">
      Affordable Programs
    </div>
    <div className="font-['Poppins'] text-[grey] font-[400] text-[18px] ml-[383px] mt-[10px]">
      Find your favourite courses in pocket-friendly ways. 
    </div>
    <div>
    <div className="carousel carousel-center shadow-[0px_-5px_50px_1px_#cecccc] mt-[60px] w-[1000px] ml-[100px]">
      <div className="carousel-item">
        <Card3 source={Hitesh1} course="Full Stack Web Development" trainer="Hitesh Choudhary" price="Rs.2975.00"/>
      </div> 
      <div className="carousel-item">
        <Card3 source={Krish1} course="Data Science masters" trainer="Krish Naik" price="Rs.2975.00"/>
      </div> 
      <div className="carousel-item">
        <Card3 source={Sanket1} course="Decode DSA with C++" trainer="Sanket Singh" price="Rs.2975.00"/>
      </div> 
      <div className="carousel-item">
        <Card3 source={Priya1} course="Java with DSA and system design" trainer="Priya Bhatia" price="Rs.2975.00"/>
      </div> 
    </div>
    </div>
    <div className="font-['Poppins'] text-[#646566] font-[600] mt-[50px] text-center">
      View More
    </div>
  </section>
  )
}

export default Afford;