import img from "../../assets/locourse.png"

const Header = () => {
  return (
      <div className="h-20 w-full bg-[#FEF0EF] flex justify-center">
          <div className="w-[95%] flex items-center">
              <img src={img}  />
          </div>
    </div>
  )
}

export default Header