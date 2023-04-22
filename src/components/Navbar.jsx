import React, { useState } from 'react'
import logo from '../images/shared/logo.svg'
import { navLinks } from '../utils/navLinks'
const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false)
  return (
    <div className='flex justify-between  fixed left-0 top-0 w-full z-30 p-6 items-center lg:mt-6'>
      <div>
        <img src={logo} alt='' className='w-10 h-10' />
      </div>

      <button
        type='button'
        className='z-20 block md:hidden focus:outline-none hamburger'
        onClick={() => setMenuClicked(!menuClicked)}
      >
        <span
          className={`${menuClicked ? 'cross hamburger-top' : 'hamburger-top'}`}
        ></span>
        <span
          className={`${menuClicked ? 'hidden' : 'hamburger-middle'}`}
        ></span>
        <span
          className={` ${
            menuClicked ? 'cross hamburger-bottom' : 'hamburger-bottom'
          }`}
        ></span>
      </button>
      {/* mobile menu */}
      {menuClicked && (
        <nav className='block md:hidden fixed top-0 right-0 w-[254px] h-screen'>
          <div className='flex flex-col mt-32'>
            {navLinks.map((x, index) => {
              return (
                <div
                  key={index}
                  className='pl-6 h-[50px] uppercase nav-text flex justify-start items-center hover:border-r-4'
                >
                  {x.link}
                </div>
              )
            })}
          </div>
        </nav>
      )}
      {/* big menu */}
      <nav className='hidden md:block absolute top-0 right-0 md:px-20 lg:pl-32 lg:pr-44 '>
        <div className='relative'>
          <div className='flex md:space-x-8 lg:space-x-16 items-center'>
            {navLinks.map((x, index) => {
              return (
                <div
                  key={index}
                  className='px-0 h-[96px] uppercase nav-text flex justify-center items-center hover:border-b-4'
                >
                  {x.link}
                </div>
              )
            })}
          </div>
          <div className='hidden lg:block absolute w-[473px] h-[1px] bg-white bg-opacity-25 top-[50%] right-[34rem]'></div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
