import React from "react";
import Card3 from "./Card3";
import Hitesh1 from "./Assets/Hitesh1.jpg";
import Hitesh2 from "./Assets/Hitesh2.jpg";
import Krish1 from "./Assets/Krish1.jpg";
import Krish2 from "./Assets/Krish2.jpg";
import Priya1 from "./Assets/Priya1.jpg";
import Priya2 from "./Assets/Priya2.jpg";

const Popular = () => {
  return(
    <section>
    <div className="font-['Poppins'] text-[#5A4BDA] font-[600] text-[36px] ml-[445px] mt-[120px]">
      Popular Programs
    </div>
    <div className="font-['Poppins'] text-[grey] font-[400] text-[18px] ml-[426px] mt-[10px]">
      Most in demand and watched by people. 
    </div>
    <div>
    <div className="carousel carousel-center shadow-[0px_-5px_50px_1px_#cecccc] mt-[60px] w-[1000px] ml-[100px]">
      <div className="carousel-item">
        <Card3 source={Hitesh1} course="Full Stack Web Development" trainer="Hitesh Choudhary" price="Rs.2975.00"/>
      </div> 
      <div className="carousel-item">
        <Card3 source={Hitesh2} course="Full Stack Web Development" trainer="Hitesh Choudhary" price="Rs.2975.00"/>
      </div> 
      <div className="carousel-item">
        <Card3 source={Krish1} course="Data Science masters" trainer="Krish Naik" price="Rs.2975.00"/>
      </div> 
      <div className="carousel-item">
        <Card3 source={Krish2} course="Data Science masters" trainer="Krish Naik" price="Rs.2975.00"/>
      </div> 
      <div className="carousel-item">
        <Card3 source={Priya1} course="Java with DSA and system design" trainer="Priya Bhatia" price="Rs.2975.00"/>
      </div> 
      <div className="carousel-item">
        <Card3 source={Priya2} course="Java with DSA and system design" trainer="Priya Bhatia" price="Rs.2975.00"/>
      </div> 
    </div>
    </div>
    <div className="font-['Poppins'] text-[#646566] font-[600] mt-[50px] text-center">
      View More
    </div>
  </section>
  )
}

export default Popular;