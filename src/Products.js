import React from "react";
import Card4 from "./Card4";
import Pwlab from "./Assets/Pwlab.svg";
import Jobportal from "./Assets/Jobportal.png";
import Experience from "./Assets/Experience.png";
import Affiliate from "./Assets/Affiliate.png";
import Halloffame from "./Assets/Halloffame.svg";

const Products = () =>{
  return(
    <section>
      <div className="font-['Poppins'] text-[#5A4BDA] font-[600] text-[36px] text-center mt-[115px]">
        Our Products
      </div>
      <div className="flex flex-row justify-evenly">
        <Card4 source={Pwlab} title="PW Skills Lab" des="Supercharge your project development with our robust lab."/>
        <Card4 source={Jobportal} title="Job Portal" des="Use exceptional templates for a stand-out resume minus the sign up process."/>
        <Card4 source={Experience} title="Experience portal" des="PW Skills's self-paced experience portal prioritises hands-on training with 570+ internship projects."/>
      </div>
      <div className="flex flex-row justify-center mt-[-5px] gap-[100px]">
        <Card4 source={Affiliate} title="Become an affiliate" des="Explore affiliate marketing opportunities with PW Skills and attain financial freedom."/>
        <Card4 source={Halloffame} title="Hall of Fame" des="Our student placements and 100K+ career transitions speak volumes about our courses."/>
      </div>
      <div className="h-[190px]">
      </div>
    </section>
  )
}

export default Products;
