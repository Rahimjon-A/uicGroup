import React from 'react';
import { FaBehance, FaDribbble, FaLinkedinIn, FaTelegramPlane, FaYelp } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { LuPhoneCall } from 'react-icons/lu';
import { MdAlternateEmail } from 'react-icons/md';
import { SiTrustpilot } from 'react-icons/si';
import Logo from './Logo';
import { RiRouteFill } from 'react-icons/ri';
import { BsArrowUp } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className=" bg-[#1e1e20] pt-[100px] ">
      <div className="container">
        <div className=" py-[57px] px-[52px] rounded-lg text-white bg-[#2e2e30] gap-[20px] grid grid-cols-[2fr_1fr] ">
          <div>
            <p className=" text-[48px] leading-[120%] font-bold mb-[30px] ">
              You can also be among this team :)
            </p>
            <p className="text-[#989899] font-medium ">
              Do you want to growth with us? Now prove to us that you need it! Become an integral
              part of the team
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <span className=" block h-[2px] w-[30px] bg-[#575759] "></span>{' '}
              <span className="text-[20px] ">Flutter developer</span>
            </li>
            <li className="flex items-center gap-2">
              <span className=" block h-[2px] w-[30px] bg-[#575759] "></span>{' '}
              <span className="text-[20px] ">UI/UX designer</span>
            </li>
            <li className="flex items-center gap-2">
              <span className=" block h-[2px] w-[30px] bg-[#575759] "></span>{' '}
              <span className="text-[20px] ">AI Engineer</span>
            </li>
            <li className="flex items-center gap-2">
              <span className=" block h-[2px] w-[30px] bg-[#575759] "></span>{' '}
              <span className="text-[20px] ">HR manager</span>
            </li>
          </ul>
        </div>

        <ul className="flex   w-full  text-[#9caaac] mt-[50px] text-[16px] font-semibold gap-10 ">
          <li className="hover:text-white duration-300  ">
            <a href="#">ABOUT US</a>
          </li>
          <li className="hover:text-white duration-300  ">
            <a href="#">SERVICES</a>
          </li>
          <li className="hover:text-white duration-300  ">
            <a href="#">PORTFOLIO</a>
          </li>
          <li className="hover:text-white duration-300  ">
            <a href="#">CAREER</a>
          </li>
          <li className="hover:text-white duration-300  ">
            <a href="#">BLOG</a>
          </li>

          <li className='ml-auto border hover:border-teal-500  p-4 rounded-full '>
            <a href='#'> <BsArrowUp className='text-[24px] ' /> </a>
          </li>

        </ul>

        <div className="flex items-center gap-4 pb-[60px] border-b ">
          <span className="border border-[#9caaac] rounded-full text-[16px] hover:bg-[#00a795] duration-300 hover:border-[#00a795] text-white p-2 ">
            <FaFacebookF />
          </span>

          <span className="border border-[#9caaac] rounded-full text-[16px] hover:bg-[#00a795] duration-300 hover:border-[#00a795] text-white p-2 ">
            <FaTwitter />
          </span>

          <span className="border border-[#9caaac] rounded-full text-[16px] hover:bg-[#00a795] duration-300 hover:border-[#00a795] text-white p-2 ">
            <FaInstagram />
          </span>

          <span className="border border-[#9caaac] rounded-full text-[16px] hover:bg-[#00a795] duration-300 hover:border-[#00a795] text-white p-2 ">
            <FaTelegramPlane />
          </span>

          <span className="border border-[#9caaac] rounded-full text-[16px] hover:bg-[#00a795] duration-300 hover:border-[#00a795] text-white p-2 ">
            <FaLinkedinIn />
          </span>

          <span className="border border-[#9caaac] rounded-full text-[16px] hover:bg-[#00a795] duration-300 hover:border-[#00a795] text-white p-2 ">
            <FaBehance />
          </span>

          <span className="border border-[#9caaac] rounded-full text-[16px] hover:bg-[#00a795] duration-300 hover:border-[#00a795] text-white p-2 ">
            <FaDribbble />
          </span>

          <span className="border border-[#9caaac] rounded-full text-[16px] hover:bg-[#00a795] duration-300 hover:border-[#00a795] text-white p-2 ">
            <SiTrustpilot />
          </span>

          <span className="border border-[#9caaac] rounded-full text-[16px] hover:bg-[#00a795] duration-300 hover:border-[#00a795] text-white p-2 ">
            <FaYelp />
          </span>

          <span className="ml-[40px] cursor-pointer  flex gap-2 items-center">
            <span className="border border-[#9caaac] rounded-full p-1 bg-[#626263] text-white  ">
              <MdAlternateEmail />
            </span>
            <span className="text-[#9caaac] hover:text-white  ">info@uic.group</span>
          </span>

          <span className="ml-[15px] cursor-pointer flex gap-2 items-center">
            <span className="border border-[#9caaac] rounded-full p-1 bg-[#626263] text-white  ">
              <LuPhoneCall />
            </span>
            <span className="text-[#9caaac] hover:text-white  ">+998 71 200 70 07</span>
          </span>
        </div>

        <div className="text-[#a5a5a6] py-[20px] flex items-center justify-between ">
          <p className=" font-medium">© UIC GROUP 2024</p>
          <Logo />

          <div className="flex group items-center p-2 border hover:border-teal-500 border-[#9caaac] rounded-lg">
            <div className="flex-grow flex items-center text-white">
              <p className="text-sm">
                <span className="inline-block w-4 mr-2">
                <RiRouteFill className=' rotate-[135deg] text-[18px]  ' />
                </span>

                <span>Tashkent city. Shayxontoxur district. Adkham Rakhmat street - 15/1</span>
              </p>
            </div>
            <button className="ml-4 px-2 py-1 bg-[#2e2e30] group-hover:bg-teal-500 text-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75">
              Map
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
