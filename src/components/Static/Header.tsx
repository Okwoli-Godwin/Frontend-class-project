import img from "../../assets/locourse.png"
import { FiSearch } from "react-icons/fi"
import {AiOutlineShoppingCart} from "react-icons/ai"

const Header = () => {
  return (
      <div className="h-20 w-full bg-[#FEF0EF] flex justify-center">
          <div className="w-[95%] flex items-center justify-between">
              <img src={img} className="h-[110px]" />
              
              <div className="flex items-center">
                  <div className="text-base ml-14 font-medium text-[#5F5982]">Home</div>
                  <div className="text-base ml-14 font-medium text-[#5F5982]">Courses</div>
                  <div className="text-base ml-14 font-medium text-[#5F5982]">Features</div>
              </div>

              <div className="flex items-center">
                  <div className="text-[#5F5982] text-xl ml-8 cursor-pointer"><FiSearch /></div>
                  <div className="text-[#5F5982] text-xl ml-8 cursor-pointer"><AiOutlineShoppingCart /></div>
                  <button className="text-white w-[100px] h-[45px] flex justify-center items-center cursor-pointer bg-[#dc3545] rounded ml-8">
                      Register
                  </button>
              </div>
          </div>
    </div>
  )
}

export default Header