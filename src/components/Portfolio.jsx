
const Portfolio = () => {
  return (

    <div className="max-w-full w-full bg-[#131314]">
      <div className="max-w-[1200px] w-full flex flex-col items-center justify-center mx-auto py-20">
       
        <div className="w-full flex items-center justify-between">
          <h1 className="font-bold uppercase text-[32px] md:text-[64px] text-white leading-[130%]">
            PORTFOLIO
          </h1>
          <div className="flex flex-row gap-4">
            <button className="font-roboto py-2 px-4 md:py-3.5 md:px-6 text-white/60 whitespace-nowrap border-solid border border-white/20 sm:rounded-[12px] rounded-[8px] hover:text-green-200 hover:border-green-200 duration-300 cursor-pointer">
              Branding
            </button>
            <button className="font-roboto py-2 px-4 md:py-3.5 md:px-6 text-white/60 whitespace-nowrap border-solid border border-white/20 sm:rounded-[12px] rounded-[8px] hover:text-green-200 hover:border-green-200 duration-300 cursor-pointer">
              Mobile App
            </button>
            <button className="font-roboto py-2 px-4 md:py-3.5 md:px-6 text-white/60 whitespace-nowrap border-solid border border-white/20 sm:rounded-[12px] rounded-[8px] hover:text-green-200 hover:border-green-200 duration-300 cursor-pointer">
              CRM
            </button>
            <button className="font-roboto py-2 px-4 md:py-3.5 md:px-6 text-white/60 whitespace-nowrap border-solid border border-white/20 sm:rounded-[12px] rounded-[8px] hover:text-green-200 hover:border-green-200 duration-300 cursor-pointer">
              Website
            </button>
          </div>
        </div>

        
        <div className="w-full pt-8">
          <div className="w-full h-[400px] flex">
            <div className="w-1/2 h-full p-5 bg-transparent flex relative cursor-pointer rounded-2xl" id="blur">
              <div className="absolute z-[5]">
                <h2 className="lg:text-[38px] lg:leading-[45px] lg:mb-2 !leading-[120%] text-white text-sm sm:text-base md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
                  Uzbekistan's Club
                </h2>
                <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
                  WEBSITE
                </p>
              </div>
              <div className="z-[4] h-full w-full object-fill absolute rounded-xl top-0 left-0">
                <img
                  src="https://uic.group/media/cache/0c/39/0c392b9a99ead3fb208087f2a1e1e145.jpg"
                  alt=""
                  className="rounded-2xl h-full"
                />
              </div>
              <div className="w-full h-full absolute z-10 top-0 rounded-2xl left-0" id="blur"></div>
            </div>
            <div className="w-1/2 grid z-10 grid-cols-2 gap-6 ml-[24px] h-full">
              <div className="w-[270px] h-[180px] cursor-pointer p-5 relative rounded-lg" id="blur">
                <div className="absolute z-[5]">
                  <h2 className="lg:text-2xl lg:leading-[49px] lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
                    Anatomica
                  </h2>
                  <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
                    WEBSITE
                  </p>
                </div>
                <div className="z-[4] h-full w-full object-fill absolute top-0 left-0">
                  <img
                    src="https://uic.group/media/cache/29/88/29883e26588ac429b3ca86b3ac39efa6.jpg"
                    alt=""
                    className="h-full rounded-xl"
                  />
                </div>
                <div className="w-full h-full absolute z-10 top-0 left-0 rounded-xl" id="blur"></div>
              </div>
              <div className="w-[270px] h-[180px] cursor-pointer p-5 rounded-xl relative" id="blur">
                <div className="absolute z-[5]">
                  <h2 className="lg:text-2xl lg:leading-[49px] lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
                    Anatomica App
                  </h2>
                  <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
                  Mobile app
                  </p>
                </div>
                <div className="z-[4] h-full w-full object-fill absolute top-0 left-0">
                  <img
                    src="https://uic.group/media/cache/cc/39/cc392cc7e6083d974df22bdf3f7baae3.jpg"
                    alt=""
                    className="h-full rounded-xl"
                  />
                </div>
                <div className="w-full h-full absolute rounded-xl z-10 top-0 left-0" id="blur"></div>
              </div>
              <div className="w-[270px] h-[180px] cursor-pointer p-5 relative rounded-xl" id="blur">
                <div className="absolute z-[5]">
                  <h2 className="lg:text-2xl lg:leading-[49px] lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
                    Express24
                  </h2>
                  <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
                    Mobile app
                  </p>
                </div>
                <div className="z-[4] h-full  w-full object-fill absolute top-0 left-0">
                  <img
                    src="https://uic.group/media/cache/59/f1/59f1ca58bab7263f9c5eaff3033d5951.jpg"
                    alt=""
                    className="h-full rounded-xl opacity-40"
                  />
                </div>
                <div className="w-full h-full absolute z-10 top-0 left-0 rounded-xl" id="blur"></div>
              </div>
              <div className="w-[270px] h-[180px] cursor-pointer p-5 relative rounded-xl" id="blur">
                <div className="absolute z-[5]">
                  <h2 className="lg:text-2xl lg:leading-[49px] lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
                    Toshkent Parfum
                  </h2>
                  <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
                    Mobile app
                  </p>
                </div>
                <div className="z-[4] h-full w-full  object-fill rounded-xl absolute top-0 left-0">
                  <img
                    src="https://uic.group/media/cache/b6/27/b6273a3cbd3fe1e5ad0e9b9acdccdfc4.jpg"
                    alt=""
                    className="h-full rounded-xl opacity-30"
                  />
                </div>
                <div className="w-full h-full absolute z-10 rounded-xl top-0 left-0" id="blur"></div>
              </div>
            </div>
            
          </div>
          <div className="w-full h-[400px] flex mt-6">
            <div className="flex flex-col gap-8 items-center justify-center">
            <div className="w-[270px] h-[180px] cursor-pointer p-5 relative rounded-lg" id="blur">
                <div className="absolute z-[5]">
                  <h2 className="lg:text-2xl lg:leading-[49px] lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
                    Toshkent Parfum
                  </h2>
                  <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
                    WEBSITE
                  </p>
                </div>
                <div className="z-[4] h-full w-full object-fill absolute top-0 left-0">
                  <img
                    src="https://uic.group/media/cache/b3/6b/b36bc02390ec157e4a4a99eb5c0643b2.jpg"
                    alt=""
                    className="h-full rounded-xl opacity-30"
                  />
                </div>
                <div className="w-full h-full absolute z-10 top-0 left-0 rounded-xl" id="blur"></div>
              </div>
            <div className="w-[270px] h-[180px] cursor-pointer p-5 relative rounded-lg" id="blur">
                <div className="absolute z-[5]">
                  <h2 className="lg:text-2xl lg:leading-[49px] lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
                    Uzbekistan's club <br /> App
                  </h2>
                  <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
                    Mobile app
                  </p>
                </div>
                <div className="z-[4] h-full w-full object-fill absolute top-0 left-0">
                  <img
                    src="https://uic.group/media/cache/bf/05/bf057b6e96af88ea2c68d1da6a1ee07e.jpg"
                    alt=""
                    className="h-full rounded-xl"
                  />
                </div>
                <div className="w-full h-full absolute z-10 top-0 left-0 rounded-xl" id="blur"></div>
              </div>
            </div>
            <div className="w-1/2 h-full ml-6 p-5 bg-transparent flex relative cursor-pointer rounded-2xl" id="blur">
              <div className="absolute z-[5]">
                <h2 className="lg:text-[38px] lg:leading-[45px] lg:mb-2 !leading-[120%] text-white text-sm sm:text-base md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
                  WAYU
                </h2>
                <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
                  WEBSITE
                </p>
              </div>
              <div className="z-[4] h-full w-full object-fill absolute rounded-xl top-0 left-0">
                <img
                  src="https://uic.group/media/cache/77/4d/774ddc33fda844b44bb597539531dec6.jpg"
                  alt=""
                  className="rounded-2xl h-full"
                />
              </div>
              <div className="w-full h-full absolute z-10 top-0 rounded-2xl left-0" id="blur"></div>
            </div>
            <div className="flex flex-col gap-8 ml-6 items-center justify-center">
            <div className="w-[270px] h-[180px] cursor-pointer p-5 relative rounded-lg" id="blur">
                <div className="absolute z-[5]">
                  <h2 className="lg:text-2xl lg:leading-[49px] lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
                    Ricomel
                  </h2>
                  <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
                    WEBSITE
                  </p>
                </div>
                <div className="z-[4] h-full w-full object-fill absolute top-0 left-0">
                  <img
                    src="https://uic.group/media/cache/30/da/30da918dacc113dd034fb5dbb8063282.jpg"
                    alt=""
                    className="h-full rounded-xl opacity-25"
                  />
                </div>
                <div className="w-full h-full absolute z-10 top-0 left-0 rounded-xl" id="blur"></div>
              </div>
            <div className="w-[270px] h-[180px] cursor-pointer p-5 relative rounded-lg" id="blur">
                <div className="absolute z-[5]">
                  <h2 className="lg:text-2xl lg:leading-[49px] lg:mb-[6px] !leading-[120%] text-white text-sm sm:text-base md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3">
                    Infomax Freight
                  </h2>
                  <p className="text-xs font-semibold leading-3 uppercase text-white/60 lg:text-sm sm:leading-5">
                    WEBSITE
                  </p>
                </div>
                <div className="z-[4] h-full w-full object-fill absolute top-0 left-0">
                  <img
                    src="https://uic.group/media/cache/d4/e7/d4e7073d362f8d5a16efbb3e656fc4ee.jpg"
                    alt=""
                    className="h-full rounded-xl opacity-25"
                  />
                </div>
                <div className="w-full h-full absolute z-10 top-0 left-0 rounded-xl" id="blur"></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;