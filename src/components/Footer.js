import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='q-container h-[50vh] flex flex-col justify-center items-center text-center space-y-8 bg-gradient-to-b from-blue-500 to-black text-white'>
            <div class="quote font-suisse font-medium text-sm">
            "Thank You For Considering My application i hope you wil I hope you will appreciate my work and give me a chance to showcase my skill"
            </div>
            <div>
            <p>&copy; {new Date().getFullYear()} Rahul Gupta </p>
            <p>guptagi5050@gmail.com</p>
            <p>8319523939</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer