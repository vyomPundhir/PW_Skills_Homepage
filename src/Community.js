import React from "react";
import Card3 from "./Card3";
import Cpp from "./Assets/Cpp.jpg";
import Java from "./Assets/Java.jpg";
import Stock from "./Assets/Stockmarket.jpg";
import Business from "./Assets/Businessanalytics.jpg";

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
        <Card3 source={Cpp} course="C++ Foundation" trainer="Urvi Goel" price="FREE"/>
      </div> 
      <div className="carousel-item">
        <Card3 source={Java} course="Cracking the Coding Interview in Java - Foundation" trainer="Vishwa Mohan" price="FREE"/>
      </div> 
      <div className="carousel-item">
        <Card3 source={Stock} course="Stock Market Fundamentals" trainer="Kanan Bahl" price="FREE"/>
      </div> 
      <div className="carousel-item">
        <Card3 source={Business} course="Business Analytics Foundations" trainer="Gopal Sharma" price="FREE"/>
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