
const Card3 = ({source, course, trainer, price}) => {
  return(
    <section className="w-[350px] h-[420px] ml-[5px] flex flex-col justify-center items-center ">
      <div className="">
        <img src={source} className="w-[350px] mt-[30px]" />
      </div>
      <div className="font-[600] font-['Poppins'] text-[20px] text-[#5A4BDA] mt-[10px]">
        {course}
      </div>
      <div className="font-['Poppins'] text-[black] mt-[55px]" style={{marginTop:'40px'}}>
        {trainer}
      </div>
      <div className="font-['Poppins'] text-[black] font-[600] text-[18px] mt-[10px]">
        {price}
      </div>
    </section>
  )
}

export default Card3;
