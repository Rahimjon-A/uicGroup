import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuPhoneCall } from 'react-icons/lu';

const Hero = () => {
  return (
    
    <div className=" relative">
      <div className="container mx-auto pt-[350px] ">
        <p className="text-[48px] font-bold text-white leading-[120%] mb-[20px] ">
          We offer digital <br /> solutions
        </p>
        <p className="text-[#a9b7bf] text-[24px] font-semibold mb-[50px] ">IN ANY DIFFICULTY</p>

        <div className="flex items-center gap-3 text-white ">
          <div className="flex group duration-300 cursor-pointer items-center font-semibold rounded-xl gap-5 border-[2px] border-[#00a795] bg-[#1a8377] hover:bg-[#00a795] py-3 px-5 ">
            <span>Portfolio</span>
            <span className=" bg-[#4cc1b5] p-1 rounded-full  ">
              <FaArrowRightLong className="text-[16px] rotate-[-45deg] group-hover:rotate-0 duration-300 " />
            </span>
          </div>
          <div className="flex group duration-300 cursor-pointer items-center font-semibold rounded-xl gap-5 border-[2px] border-[#a9b7bf]  hover:border-[#00a795] hover:bg-[#00a795] py-3 px-5 ">
            <span>Call</span>
            <span>
              <LuPhoneCall />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
