import img from "../assets/thumbs.png"
import img2 from "../assets/petey.png"
import { AiOutlineStar, AiOutlineEye, AiOutlinePlayCircle } from "react-icons/ai"

const Course = () => {
  return (
    <div className="w-[100%] bg-[#ececffda] justify-center flex pb-[20px]">
      <div className="w-[90%] flex flex-col">

        <div className="w-full flex h-20 mt-[90px] justify-between">
          <h1 className="text-[43px]">Get choice of your course</h1>
          <button className="text-white w-[100px] h-[45px] flex justify-center items-center cursor-pointer bg-[#dc3545] rounded ml-8">
             View all
          </button>
        </div>

        <div className="w-[100%] flex justify-between">
          <div className="w-[380px] justify-center flex bg-white mt-[50px] rounded-md pt-[18px] pl-[18px] pr-[18px] pb-[18px]">
            <div className="w-[100%] flex flex-col">
              <img src={img} className="" />

              <div className="w-full flex justify-between">
                <div className="flex items-center mt-[10px]">
                  <div className="text-yellow-500 text-[25px]">
                    <AiOutlineStar />
                  </div>
                  <h3 className="ml-[5px]">4.5</h3>
                </div>

                <div className="flex items-center mt-[10px]">
                  <div className="text-[#C9AF89] text-[25px]">
                    <AiOutlineEye />
                  </div>
                  <h3 className="ml-[5px]">49,00</h3>
                </div>

                <div className="flex items-center mt-[10px]">
                  <div className="text-green-500 text-[25px]">
                    <AiOutlinePlayCircle />
                  </div>
                  <h3 className="ml-[5px]">9</h3>
                </div>
              </div>

              <div className="w-full h-[1px] bg-gray-400 mt-[5px]"></div>

              <h3 className="text-[24px] mt-[12px]">Learn Python Programming Beginner</h3>

              <div className="w-full flex items-center mt-[15px] justify-between">
                <div className="flex items-center">
                  <img src={img2} className="rounded-md" />
                  <h5 className="ml-10px">Petey Cruiser</h5>
                </div>

                <h3 className="text-yellow-500 text-[18px] font-bold">$123.00</h3>
              </div>
            </div>
          </div>

          <div className="w-[380px] justify-center flex bg-white mt-[50px] rounded-md pt-[18px] pl-[18px] pr-[18px] pb-[18px]">
            <div className="w-[100%] flex flex-col">
              <img src={img} className="" />

              <div className="w-full flex justify-between">
                <div className="flex items-center mt-[10px]">
                  <div className="text-yellow-500 text-[25px]">
                    <AiOutlineStar />
                  </div>
                  <h3 className="ml-[5px]">4.5</h3>
                </div>

                <div className="flex items-center mt-[10px]">
                  <div className="text-[#C9AF89] text-[25px]">
                    <AiOutlineEye />
                  </div>
                  <h3 className="ml-[5px]">49,00</h3>
                </div>

                <div className="flex items-center mt-[10px]">
                  <div className="text-green-500 text-[25px]">
                    <AiOutlinePlayCircle />
                  </div>
                  <h3 className="ml-[5px]">9</h3>
                </div>
              </div>

              <div className="w-full h-[1px] bg-gray-400 mt-[5px]"></div>

              <h3 className="text-[24px] mt-[12px]">Learn Python Programming Beginner</h3>

              <div className="w-full flex items-center mt-[15px] justify-between">
                <div className="flex items-center">
                  <img src={img2} className="rounded-md" />
                  <h5 className="ml-10px">Petey Cruiser</h5>
                </div>

                <h3 className="text-yellow-500 text-[18px] font-bold">$123.00</h3>
              </div>
            </div>
          </div>

          <div className="w-[380px] justify-center flex bg-white mt-[50px] rounded-md pt-[18px] pl-[18px] pr-[18px] pb-[18px]">
            <div className="w-[100%] flex flex-col">
              <img src={img} className="" />

              <div className="w-full flex justify-between">
                <div className="flex items-center mt-[10px]">
                  <div className="text-yellow-500 text-[25px]">
                    <AiOutlineStar />
                  </div>
                  <h3 className="ml-[5px]">4.5</h3>
                </div>

                <div className="flex items-center mt-[10px]">
                  <div className="text-[#C9AF89] text-[25px]">
                    <AiOutlineEye />
                  </div>
                  <h3 className="ml-[5px]">49,00</h3>
                </div>

                <div className="flex items-center mt-[10px]">
                  <div className="text-green-500 text-[25px]">
                    <AiOutlinePlayCircle />
                  </div>
                  <h3 className="ml-[5px]">9</h3>
                </div>
              </div>

              <div className="w-full h-[1px] bg-gray-400 mt-[5px]"></div>

              <h3 className="text-[24px] mt-[12px]">Learn Python Programming Beginner</h3>

              <div className="w-full flex items-center mt-[15px] justify-between">
                <div className="flex items-center">
                  <img src={img2} className="rounded-md" />
                  <h5 className="ml-10px">Petey Cruiser</h5>
                </div>

                <h3 className="text-yellow-500 text-[18px] font-bold">$123.00</h3>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Course