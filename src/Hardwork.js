import React from "react";
import Card1 from "./Card1";
import Book from "./Assets/Book.svg";
import Credit from "./Assets/Credit.svg";
import Student from "./Assets/Student.svg";


const Hardwork = () =>{
  return(
    <section className="h-[518.5px]">
      <div className="text-[#5a4bda] text-[36px] font-['Poppins'] font-[600] mt-[90.7px] ml-[331px]">"Pure Hardwork, No Shortcuts!"</div>
      <div className="w-[128px] h-[3.7px] bg-[#EAAA2E] ml-[547px] mt-[9.5px]"></div>
      <div className="flex flex-row justify-around ml-[-16.5px]">
        <Card1 source={Book} title="600+" category="Different Courses"/>
        <Card1 source={Student} title="700000+" category="Students Enrolled"/>
        <Card1 source={Credit} title="10000+" category="Successful Transition"/>
      </div>
    </section>
  )
}

export default Hardwork;