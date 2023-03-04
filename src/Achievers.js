import React from "react";
import Amazon from "./Assets/Amazon.png";
import Cointab from "./Assets/Cointab.png";
import Freshworks from "./Assets/Freshworks.png";
import Ibm from "./Assets/Ibm.png";
import Informatica from "./Assets/Informatica.png";
import Oracle from "./Assets/Oracle.png";
import Reliance from "./Assets/Reliance.png";
import Wipro from "./Assets/Wipro.png";
import Rapid from "./Assets/Rapid.png";
import BNB from "./Assets/BNB.png";

const Achievers = () => {
  return(
    <section className="h-[385px] bg-[#EAECEF]">
      <div className="font-['Poppins'] text-[#5a4bda] text-center text-[36px] font-[600] pt-[81px] ml-[8px]">
        Our Achiever's Work with
      </div>
      <div className="w-[1024px] h-[222.77px] mt-[26px] ml-[100px]">
      <div className="carousel rounded-box w-100 h-[80px] mt-[100px]">
        <div className="carousel-item w-[170px] h-[40px] mt-[7px]">
          <img src={Amazon} className="w-full" />
        </div> 
        <div className="carousel-item w-[230px] h-[50px] mt-[-3px]">
          <img src={Cointab} className="w-full" />
        </div> 
        <div className="carousel-item w-[200px] h-[40px] mt-[3px] ml-[8px]">
          <img src={Freshworks} className="w-full" />
        </div> 
        <div className="carousel-item w-[170px] h-[40px] ml-[20px]">
          <img src={Ibm} className="w-full" />
        </div> 
        <div className="carousel-item w-[220px] h-[50px] ml-[10px]">
          <img src={Informatica} className="w-full" />
        </div> 
        <div className="carousel-item w-[170px] h-[40px] mt-[5px] ml-[30px]">
          <img src={Oracle} className="w-full" />
        </div> 
        <div className="carousel-item w-[300px] h-[55px] mt-[-10px] ml-[-20px]">
          <img src={Reliance} className="w-full" />
        </div>
        <div className="carousel-item w-[400px] h-[40px] ml-[-150px]">
          <img src={Wipro} className="w-full" />
        </div>
        <div className="carousel-item w-[250px] h-[50px] mt-[-3px] ml-[-100px]">
          <img src={Rapid} className="w-full" />
        </div>
        <div className="carousel-item w-[230px] h-[50px] mt-[-5px] ml-[25px]">
          <img src={BNB} className="w-full" />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Achievers;