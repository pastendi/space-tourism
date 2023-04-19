import React, { useState } from 'react'
import logo from '../images/shared/logo.svg'
const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false)
  return (
    <div className='container flex justify-between  absolute left-0 top-0 z-30 p-6 items-center'>
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
    </div>
  )
}

export default Navbar
