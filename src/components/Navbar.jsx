import React, { useState } from 'react'
import logo from '../images/shared/logo.svg'
import { navLinks } from '../utils/navLinks'
import { NavLink } from 'react-router-dom'
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
                <NavLink
                  to={x.path}
                  key={index}
                  onClick={() => setMenuClicked(!menuClicked)}
                  className={({ isActive }) =>
                    isActive ? 'mobile-link border-r-4' : 'mobile-link'
                  }
                >
                  {x.link}
                </NavLink>
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
                <NavLink
                  to={x.path}
                  key={index}
                  className={({ isActive }) =>
                    isActive ? 'nav-link border-b-4' : 'nav-link'
                  }
                >
                  {x.link}
                </NavLink>
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
