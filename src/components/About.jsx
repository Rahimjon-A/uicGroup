import React, { useEffect, useState } from 'react';
import { BsLightningCharge } from 'react-icons/bs';
import Lock from './Lock';
import { RiExpandDiagonalFill } from 'react-icons/ri';
import { LuPhoneCall } from 'react-icons/lu';
import { FaArrowRightLong } from 'react-icons/fa6';
import AboutItems from './AboutItems';

const About = () => {
  const [count, setCount] = useState(0);
  const [change, setChange] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setChange((prevChange) => prevChange + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1e1e20] pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-32 items-center">
          <div className="flex gap-10 w-[120%]">
            <div>
              <div className="relative group">
                <div className="bg-[#00ad9c] absolute w-full h-full z-[-8] bg-opacity-30 flex justify-center items-center rounded-xl group-hover:z-0 ">
                  <div
                    className="bg-white p-3 rounded-full bg-opacity-50"
                    onClick={() => setCount(1)}
                  >
                    <RiExpandDiagonalFill className="text-white text-lg" />
                  </div>
                </div>
                <img
                  src={
                    change % 2 === 1
                      ? 'https://uic.group/media/cache/21/e5/21e58126b6c478060b6e6fd54ca6fbba.jpg'
                      : 'https://uic.group/media/cache/5a/70/5a70d134e3000c5ef605393b360f73fe.jpg'
                  }
                  alt="img"
                  className="mb-7 h-[400px] rounded-xl  duration-500"
                />
              </div>
              <hr />
              <div className="flex items-center gap-5 mt-7">
                <span className="text-7xl text-white font-bold">10</span>
                <span className="text-lg text-[#00ad9c] font-bold">
                  ANNUAL <br /> QUALIFICATION TEAM
                </span>
              </div>
            </div>
            <div className="flex items-end relative">

              <div className="relative group">
                <div className="bg-[#00ad9c] absolute w-full h-full z-[-8] bg-opacity-30 flex justify-center items-center rounded-xl group-hover:z-0">
                  <div
                    className="bg-white p-3 rounded-full bg-opacity-50"
                    onClick={() => setCount(2)}
                  >
                    <RiExpandDiagonalFill className="text-white text-lg" />
                  </div>
                </div>
                <img
                  src={
                    change % 2 === 1
                      ? 'https://uic.group/media/cache/63/2a/632ae021916378d650ff3ffb98fcb7c1.jpg'
                      : 'https://uic.group/media/cache/1c/ac/1cac8a7441794ad91f2cc94093c84fd0.jpg'
                  }
                  alt=""
                  className="rounded-xl  h-[400px]  duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold text-slate-500 flex gap-5 mb-5">
              
              <span className="text-[#00ad9c] text-xl font-bold">IN THE WORLD</span>
            </p>
            <h2 className="text-[white] text-7xl font-bold mb-7">About us</h2>
            <p className="text-[#929293]">
              Every big company needs to thank not only itself, but also those who have stood beside
              it and believed in it. After all, the most important principle in our work is trust.{' '}
              <br /> <br /> Trust not only ensures the loyalty of customers and partners, but also
              increases our demand for ourselves. We cooperate on the basis of relations built on
              thousand-year human traditions.
            </p>
            <div className="mt-8 flex gap-32">
              <div className="flex gap-6">
                <BsLightningCharge className="w-12 h-12 text-[#00ad9c]" />
                <p className="text-white text-lg font-medium">
                  Quick <br /> solutions
                </p>
              </div>
              <div className="flex gap-6">
                <Lock />
                <p className="text-white text-lg font-medium">
                  Unique <br /> projects
                </p>
              </div>
            </div>

            <div className="flex items-center gap-9 mt-16 pb-28">
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
          <AboutItems/>
        </div>
        {count === 1 && (
          <div
            className="h-[100vh] fixed top-0 right-0 left-0 z-20 w-[100vw] bg-black bg-opacity-60 py-20 flex flex-col items-center justify-center"
            onClick={() => setCount(0)}
          >
            <div className="relative h-[90vh] w-[36vw]">
              <img
                src="https://uic.group/media/cache/21/e5/21e58126b6c478060b6e6fd54ca6fbba.jpg"
                alt=""
                className="h-full rounded-xl w-full"
              />
            </div>
          </div>
        )}
        {count === 2 && (
          <div
            className="h-[100vh] fixed top-0 right-0 left-0 z-20 w-[100vw] bg-black bg-opacity-60 py-20 flex flex-col items-center justify-center"
            onClick={() => setCount(0)}
          >
            <div className="relative h-[90vh] w-[36vw]">
              <img
                src="https://uic.group/media/cache/63/2a/632ae021916378d650ff3ffb98fcb7c1.jpg"
                alt=""
                className="h-full rounded-xl w-full"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default About;
