import { FiSearch } from "react-icons/fi"
import dot from "../assets/dots.svg"

const Hero = () => {
  return (
      <div className='w-full h-[100%] bg-[#FEF0EF] flex justify-center pb-[180px] relative'>
          <img src={dot} className="absolute bottom-0 left-0"/>
          <div className="w-[90%] flex justify-between">
              <div className="w-[50%] flex flex-col">
                  <h2 className="text-6xl font-semibold mt-[150px] leading-none text-[#212529]">  Learn more and make success the result of perfection.</h2>
                  <p className="mt-8 text-xl text-[#5F5982] z-10">Pick from over 100,000 online video courses with new additions published every month.</p>
                  <div className="w-[600px] h-[60px] bg-red-700 mt-[18px] flex overflow-hidden rounded">
                      <input
                          type="text"
                          className="flex pl-5 outline-none flex-1 placeholder-gray-600 z-10"
                          placeholder="Search your favourite course"
                      />
                      <div className="w-[70px] h-[100%] flex justify-center items-center bg-[#dc3545]">
                          <div className="text-white text-2xl"><FiSearch /></div>
                      </div>
                  </div>
              </div>

              <div className="w-[47%] mt-[80px]">
                  <img src={dot} className="absolute right-0 top-[120px]"/>
              </div>
          </div>
    </div>
  )
}

export default Hero