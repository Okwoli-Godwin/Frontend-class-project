import img from "../../assets/locourse.png"

const Header = () => {
  return (
      <div className="h-20 w-full bg-[#FEF0EF] flex justify-center">
          <div className="w-[95%] flex items-center">
              <img src={img} className="h-[110px]" />
              
              <div className="flex items-cente">
                  <div className="text-base ml-14 font-medium">Home</div>
                  <div className="text-base ml-14 font-medium">Courses</div>
                  <div className="text-base ml-14 font-medium">Features</div>
              </div>
          </div>
    </div>
  )
}

export default Header