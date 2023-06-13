

const Hero = () => {
  return (
      <div className='w-full h-[100%] bg-[#FEF0EF] flex justify-center'>
          <div className="w-[90%] flex">
              <div className="w-[50%] flex flex-col">
                  <h2 className="text-6xl font-semibold mt-[150px] leading-none text-[#212529]">  Learn more and make success the result of perfection.</h2>
                  <p className="mt-8 text-xl text-[#5F5982]">Pick from over 100,000 online video courses with new additions published every month.</p>
                  <div className="w-[600px] h-[60px] bg-red-700 mt-[18px] flex">
                      <input type="text" className="flex pl-5" placeholder="Search your favourite course"/>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Hero