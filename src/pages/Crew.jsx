import React, { useState } from 'react'
import { crews } from '../utils/crew'
const Crew = () => {
  const [choice, setChoice] = useState(0)
  return (
    <div>
      <div className='absolute left-0 top-0 bg-mobile-destination md:bg-tablet-destination lg:bg-desktop-destination bg-no-repeat min-h-screen h-auto w-screen bg-cover'>
        <div className='container md:max-w-2xl lg:max-w-6xl mx-auto'>
          <div className='flex justify-center md:justify-start mt-20'>
            <p className='uppercase mt-5 md:text-[20px] lg:text-[28px]'>
              meet your crew
            </p>
          </div>
          <div className='flex flex-col md:flex-col-reverse p-6 lg:flex-row-reverse '>
            {/* crew image */}
            <div className=' flex  justify-center lg:w-1/2'>
              <img
                src={crews[choice].image}
                alt=''
                className='w-[223px] h-[327px] md:w-[456px] md:h-[572px]'
              />
            </div>
            <div className='h-[1px] bg-white bg-opacity-25 mt-0 md:hidden'></div>
            {/* crew section */}
            <div className='lg:w-1/2 mt-8 lg:mt-20 space-y-6 flex flex-col md:flex-col-reverse'>
              {/* tabs */}
              <div className='flex space-x-4 justify-center md:my-8 lg:mt-28 lg:justify-start'>
                {crews.map((x, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setChoice(index)}
                      className={` h-3 w-3 md:h-5 md:w-5 rounded-full uppercase bg-white bg-opacity-30 hover:bg-opacity-50 ${
                        choice == index && 'bg-opacity-90'
                      }`}
                    />
                  )
                })}
              </div>
              {/* crew description */}
              <div className='flex flex-col items-center lg:items-start'>
                <div>
                  <h3 className='text-center uppercase opacity-60 text-[16px] lg:text-left md:text-[24px] lg:text-[32px]'>
                    {crews[choice].role}
                  </h3>
                  <h3 className='uppercase text-[24px] text-center lg:text-left md:text-[40px] lg:text-[50px]'>
                    {crews[choice].name}
                  </h3>
                  <p className='text-center lg:text-left text-[15px] md:text-[1rem] lg:text-[18px] max-w-[458px]'>
                    {crews[choice].about}
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

export default Crew
