import React, { useState } from 'react'
import { UilSearch, UilBars } from '@iconscout/react-unicons';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () =>{
    setShowMenu(!showMenu)
  }

  return (
    <div className='nav-wrapper'>
      <div className="nav-container flex justify-between items-center h-20 py-4 px-12 font-suisse text-sm font-medium line  ">

        {/* Hamburger Icon For Mobile */}
        <div className='hamburger-icn lg:hidden absolute'>
          <button onClick={toggleMenu}>
            <UilBars size={30} />
          </button>
        </div>

        {/* left side  desktop view */}
        <div class="left-con hidden lg:flex ">
          <ul className='flex space-x-5 cursor-pointer'>
            <li>Skin Care</li>
            <li>Body&Hand</li>
            <li>Hair</li>
            <li>Fragrance</li>
            <li>Home</li>
            <li>Kits&Travel</li>
            <li>Gifts</li>
            <li>Read</li>
            <li>Stores</li>
            <li>Facial Appointment</li>
            <UilSearch size={20} className='text-gray-600' />

          </ul>
        </div>

        {/* left side  For Mobile view */}
        {
          showMenu && (
            <div class="left-con  lg:hidden z-10  mt-[650px]  relative  -m-14 " >
              <ul className='flex flex-col justify-center items-start text-start p-14  bg-white space-y-5 cursor-pointer   text-lg '>
                <li>Skin Care</li>
                <li>Body&Hand</li>
                <li>Hair</li>
                <li>Fragrance</li>
                <li>Home</li>
                <li>Kits&Travel</li>
                <li>Gifts</li>
                <li>Read</li>
                <li>Stores</li>
                <li>Facial Appointment</li>
                <UilSearch size={20} className='text-gray-600' />

              </ul>
            </div>
          )
        }

        {/* right side  */}
        <div class="right-con  w-full flex justify-end">
          <ul className='flex space-x-5 cursor-pointer'>
            <li>Log in</li>
            <li>Cabinet</li>
            <li>Cart</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar