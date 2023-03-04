import React from "react";
import Web from "./Assets/Web.jpg"
import Web1 from "./Assets/Web1.png"
import Web2 from "./Assets/Web2.jpg"
import Web3 from "./Assets/Web3.jpg"
import Web4 from "./Assets/Web4.jpg"


const Carousel = () => {
  return (
    <section>
      <div className="carousel w-full mt-[26px] w-100 h-[461.62px]">
        <div id="item1" className="carousel-item w-full">
          <img src={Web1} className="w-full" />
        </div> 
        <div id="item2" className="carousel-item w-full">
          <img src={Web} className="w-full" />
        </div> 
        <div id="item3" className="carousel-item w-full">
          <img src={Web2} className="w-full" />
        </div> 
        <div id="item4" className="carousel-item w-full">
          <img src={Web3} className="w-full" />
        </div>
        <div id="item5" className="carousel-item w-full">
          <img src={Web4} className="w-full" />
        </div>
      </div> 
      <div className="flex justify-center w-full py-2 gap-2 mt-[-50px]">
        <a href="#item1" className="btn btn-xs bg-[white] cursor-pointer"></a> 
        <a href="#item2" className="btn btn-xs bg-[white] cursor-pointer"></a> 
        <a href="#item3" className="btn btn-xs bg-[white] cursor-pointer"></a> 
        <a href="#item4" className="btn btn-xs bg-[white] cursor-pointer"></a>
        <a href="#item5" className="btn btn-xs bg-[white] cursor-pointer"></a>
      </div>
    </section>
  )
  }
export default Carousel;
