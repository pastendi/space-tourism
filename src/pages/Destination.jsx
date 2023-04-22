import React, { useState } from 'react'
import moon from '../images/destination/image-moon.png'
import { destinations } from '../utils/destination'
const Destination = () => {
  const [choice, setChoice] = useState(0)
  return (
    <div>
      <div className='absolute left-0 top-0 bg-mobile-destination md:bg-tablet-destination lg:bg-desktop-destination bg-no-repeat min-h-screen h-auto w-screen bg-cover'>
        <div className='container md:max-w-2xl lg:max-w-6xl mx-auto'>
          <div className='flex justify-center md:justify-start mt-28'>
            <p className='uppercase md:text-[20px] lg:text-[28px]'>
              pick your destination
            </p>
          </div>
          <div className='flex flex-col p-6 lg:flex-row '>
            {/* destination image */}
            <div className=' flex  justify-center my-6 lg:w-1/2'>
              <img
                src={destinations[choice].image}
                alt=''
                className='w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]'
              />
            </div>
            {/* destination description */}
            <div className='lg:w-1/2 lg:mt-20'>
              <div className='flex space-x-6 justify-center lg:justify-start'>
                {destinations.map((destination, index) => {
                  return (
                    <a
                      key={index}
                      href='#'
                      onClick={() => setChoice(index)}
                      className={`inline-block text-[14px] md:text-[16px] h-8 py-0 uppercase hover:border-b-2 ${
                        choice == index && 'border-b-4'
                      }`}
                    >
                      {destination.name}
                    </a>
                  )
                })}
              </div>
              <div className='flex flex-col '>
                <div>
                  <h3 className='uppercase text-center lg:text-left md:text-[80px]'>
                    Moon
                  </h3>
                  <p className='text-center lg:text-left text-[15px] md:text-[1rem]'>
                    {destinations[choice].about}
                  </p>
                  <div className='h-[1px] bg-white bg-opacity-25 mt-8'></div>
                </div>
                <div className='flex flex-col md:flex-row justify-around lg:justify-start lg:space-x-20'>
                  <div className='text-center lg:text-left mt-8'>
                    <p className='subheading2 uppercase'>avg. distance</p>
                    <p className='subheading1 uppercase'>
                      {destinations[choice].distance}
                    </p>
                  </div>
                  <div className='text-center lg:text-left mt-8'>
                    <p className='subheading2 uppercase'>est. travel time</p>
                    <p className='subheading1 uppercase'>
                      {destinations[choice].time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
