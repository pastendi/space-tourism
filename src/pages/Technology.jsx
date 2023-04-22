import React, { useState, useEffect } from 'react'
import { technologies } from '../utils/technology'
const Technology = () => {
  const [choice, setChoice] = useState(0)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div>
      <div className='absolute left-0 top-0 bg-mobile-destination md:bg-tablet-destination lg:bg-desktop-destination bg-no-repeat min-h-screen h-auto w-screen bg-cover'>
        <div className='container md:max-w-6xl  mx-auto'>
          <div className='flex justify-center md:justify-start mt-20'>
            <p className='uppercase md:ml-20 lg:ml-0 my-5 md:text-[20px] lg:text-[28px]'>
              space lunch 101
            </p>
          </div>
          <div className='flex flex-col  lg:flex-row-reverse '>
            {/* technology image */}
            <div className=' flex  justify-center lg:w-1/2'>
              <img
                src={
                  screenWidth < 1020
                    ? technologies[choice].imageLandscape
                    : technologies[choice].imagePortrait
                }
                alt=''
                className='w-screen h-auto max-h-[374px] lg:w-[515px] lg:max-h-[527px]'
              />
            </div>
            {/* technology section */}
            <div className='lg:w-1/2 mt-8 lg:mt-20  flex flex-col lg:flex-row lg:items-center '>
              {/* tabs */}
              <div className='flex lg:flex-col space-x-4 lg:space-y-8 lg:space-x-0 justify-center md:my-8  lg:justify-start'>
                {technologies.map((x, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setChoice(index)}
                      className={`flex  justify-center md:text-[24px] lg:text-[32px] items-center h-10 md:h-16 lg:h-20 w-10 md:w-16 lg:w-20  rounded-full uppercase border border-white border-opacity-30  hover:border-opacity-50 ${
                        choice == index &&
                        'border-opacity-90 bg-white text-black'
                      }`}
                    >
                      {index + 1}
                    </div>
                  )
                })}
              </div>
              {/* technology description */}
              <div className='flex flex-col items-center lg:items-start'>
                <div className='p-6'>
                  <h3 className='text-center uppercase opacity-60 text-[16px] lg:text-left md:text-[24px] lg:text-[32px]'>
                    the technologies...
                  </h3>
                  <h3 className='uppercase text-[24px] text-center lg:text-left md:text-[40px] lg:text-[50px]'>
                    {technologies[choice].title}
                  </h3>
                  <p className='text-center lg:text-left text-[15px] md:text-[1rem] lg:text-[18px] max-w-[458px] mt-6'>
                    {technologies[choice].about}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
