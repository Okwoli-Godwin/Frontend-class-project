import img from "../assets/thumbs.png"
import { AiOutlineStar } from "react-icons/ai"

const Course = () => {
  return (
    <div className="w-[100%] bg-[#ececffda] justify-center flex">
      <div className="w-[90%] flex flex-col">

        <div className="w-full flex h-20 mt-[90px] justify-between">
          <h1 className="text-[43px]">Get choice of your course</h1>
          <button className="text-white w-[100px] h-[45px] flex justify-center items-center cursor-pointer bg-[#dc3545] rounded ml-8">
             View all
          </button>
        </div>

        <div className="w-full flex">
          <div className="w-[380px] justify-center flex bg-white mt-[50px] rounded-md pt-[18px] pl-[18px] pr-[18px] pb-[18px]">
            <div className="w-[100%] flex flex-col">
              <img src={img} className="" />

              <div className="w-full flex justify-between">
                <div className="flex items-center mt-[10px]">
                  <div className="text-yellow-500">
                    <AiOutlineStar />
                  </div>
                  <h3>4.5</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course