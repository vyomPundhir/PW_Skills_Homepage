import React from "react";
import Card2 from "./Card2"; 
import Ayushman from "./Assets/Ayushman.jpeg";
import Sunil from "./Assets/Sunil.jpeg";
import Sai from "./Assets/Sai.jpeg";
import Dhar from "./Assets/Dhar.jpeg";
import Gaurav from "./Assets/Gaurav.jpeg";

const Hall = () => {
  return (
    <section className="h-[681.5px]">
    <div className="text-[#5a4bda] text-[36px] font-[600] font-['Poppins'] mt-[81.5px] ml-[501px]">
      Hall of fame
    </div>
    <div className="w-[1000px] h-[450px] ml-[105px] mt-[124px]">
      <div className="carousel carousel-center shadow-[0px_-5px_50px_1px_#cecccc]">
        <div className="carousel-item">
          <Card2 source={Ayushman} name="Ayushman Misra" post="" des="
          I have studied from krish YouTube videos and ineuron, which helped me to understand the thorough concepts."/>
        </div> 
        <div className="carousel-item">
          <Card2 source={Sunil} name="SUNIL RAMESH DODDAMANI" post="Epsilon, Statistician 2" des="
          Hi All, I am a student of the NOV 2021 batch, I made a good decision by joining the Ineuron classes. A very big thank you to the entire..."/>
        </div> 
        <div className="carousel-item">
          <Card2 source={Sai} name="sai krishna gorantla" post="Tredence Analytics,Data Analyst" des="Hello everyone I am an undergraduate from SRM University. I got placed in the Tredence Analytics it is all because of the excellent "/>
        </div> 
        <div className="carousel-item">
          <Card2 source={Dhar} name="Dharmendra kumar Yadav" post="Cognizant,Data Scientist Associate" des="Ineuron.ai came into existence exactly when I needed it the most. It helped me transition into Data science as Senior Data Engineer at..."/>
        </div> 
        <div className="carousel-item">
          <Card2 source={Gaurav} name="Gaurav Varma" post="Biocube Matrics Pvt Ltd,Assistant Manager- Data Analyst" des="I am Gaurav Varma, and I have worked in the BPO sector for nearly 4 years. Working in the call center industry and then changing over to data "/>
        </div> 
      </div>
    </div>
    <div className="text-[#646566] font-[600] mt-[18.5px] ml-[569px] font-['Poppins'] cursor-pointer">View More</div>
  </section>
  )
}
export default Hall;
