import React from 'react'
import { UilSearch } from '@iconscout/react-unicons';

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <div className="nav-container flex justify-between items-center h-20 py-4 px-12 font-suisse text-sm font-medium line  ">

        {/* left side */}
        <div class="left-con ">
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

        {/* right side  */}
        <div class="right-con">
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