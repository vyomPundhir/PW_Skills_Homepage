import React from "react";
import Mail from "./Assets/Mail.svg";
import Footerlogo from "./Assets/Footerlogo.png";
import Iso from "./Assets/Iso.svg";
import Facebook from "./Assets/Facebook.svg"
import Insta from "./Assets/Insta.svg"
import Telegram from "./Assets/Telegram.svg"
import Youtube from "./Assets/Youtube.svg"
import Twitter from "./Assets/Twitter.svg"
import Linkedinround from "./Assets/Linkedinround.svg"
import Discord from "./Assets/Discord.svg"
const Footer = () => {
  return (
    <section className="bg-[#1B2124] flex flex-row text-[white] font-['Poppins'] pt-[80px] h-[490px]">
      <div className="ml-[96px] ">
        <div>
          <img src={Footerlogo} className="w-[125px]" />
        </div>
        <div className="flex flex-row mt-[33px]">
          <div>
            <img src={Mail} className="w-[20px] h-[17px] bg-[white] ml-[10px]"/>
          </div>
          <div className="ml-[27px] mt-[-5px]">
            <div className="font-[500]">Email us:</div>
            <div>support@pwskills.com</div>
          </div>
        </div>
        <div className="flex flex-row gap-[6px] mt-[32px]">
        <img src={Facebook} className="w-[30px]"/>
        <img src={Insta} className="w-[30px]" />
        <img src={Telegram} className="w-[30px]"/>
        <img src={Youtube} className="w-[30px]"/>
        <img src={Twitter} className="w-[27px]"/>
        <img src={Linkedinround} className="w-[30px]"/>
        <img src={Discord} className="w-[26px]"/>
        </div>
        <div>
          <img src={Iso} className="w-[80px] mt-[49px]"/>
        </div>
        <div className="mt-[11px] ml-[8px]">ISO 9001</div>
      </div>
      <div className="ml-[155px]">
        <div className="text-[25px] font-[500] mt-[5px]">PW Skills</div>
        <div className="w-[160px] h-[2px] bg-[#F58F49] mt-[15px]"></div>
        <div className="flex flex-row mt-[30px]">
          <div>
            <div>About us</div>
            <div className="mt-[11.5px]">FAQs</div>
            <div className="mt-[38px]">Privacy policy</div>
          </div>
          <div className="ml-[21px] w-[100px]">
            <div>Contact us</div>
            <div className="mt-[11.5px] leading-[25px]">Job assistance</div>
            <div className="mt-[11.5px] leading-[25px]">Terms and conditions</div>
          </div>
        </div>
      </div>
      <div className="ml-[162px]">
        <div className="text-[25px] font-[500] mt-[5px]">Products</div>
        <div className="w-[160px] h-[2px] bg-[#F58F49] mt-[15px]"></div>
        <div className="flex flex-col mt-[30px]">
          <div>PW Skills Lab</div>
          <div className="mt-[11.5px]">Job Portal</div>
          <div className="mt-[11.5px]">Experience portal</div>
          <div className="mt-[11.5px]">Become an affiliate</div>
          <div className="mt-[11.5px]">Hall of fame</div>
        </div>
      </div>
    </section>
  )
}

export default Footer;