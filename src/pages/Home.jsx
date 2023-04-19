import React from 'react'

const Home = () => {
  return (
    <div className='absolute left-0 top-0 bg-mobile-home md:bg-tablet-home lg:bg-desktop-home bg-no-repeat min-h-screen h-screen w-screen bg-cover'>
      <div className='flex flex-col px-6 lg:flex-row'>
        <div className='flex flex-col space-y-4  text-center lg:text-left max-w-md mx-auto mt-28 lg:mt-[387px] lg:w-1/2'>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className='text-primary text-8xl lg:text-[150px]'>SPACE</h1>
          <p className='lg:text-lg'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className='flex justify-center items-center mt-28 lg:mt-[440px] lg:w-1/2'>
          <p className='text-darkPrimary w-[150px] md:w-[242px]  lg:w-[274px] h-[150px] md:h-[242px] lg:h-[274px] rounded-full bg-white flex justify-center items-center text-xl md:text-[32px]'>
            EXPLORE
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
