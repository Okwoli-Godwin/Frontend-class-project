import dot from "../assets/dots.svg"

const Online = () => {
  return (
      <div className="w-[100%] flex bg-[#FEF0EF] pb-[140px] relative">
          <img src={dot} className="absolute bottom-0" />
          <img src={dot} className="absolute right-0 top-[80px]" />
          <div className="w-[90%] flex justify-center items-center relative flex-col">
              <h1 className="text-[41px] mt-[140px]">Select the best from various online courses.</h1>
              <p className="w-[60%] text-[20px] text-center mt-[14px]">
                  Our online video courses give you the freedom to learn remotely, and our experts will guide you properly.
              </p>
              <button className="mt-[25px] text-white w-[100px] h-[45px] flex justify-center items-center cursor-pointer bg-[#dc3545] rounded ml-8">
                      Join Today
                </button>
          </div>
    </div>
  )
}

export default Online