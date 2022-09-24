import React, { useState } from 'react'
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants"
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="hoobank" className='w-[126px] h-[32px]' />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        { navLinks.map((nav, index) => (
          <li className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${ index === navLinks.length -1 ? "mr-0" : "mr-10"}`} key={nav?.id}>
            <a href={`#${nav?.id}`}>
              { nav?.title }
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={!toggle ? menu : close} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}/>
        <div className={`${ !toggle ? "hidden" : "flex" } absolute p-6 top-20 right-0 my-2 mx-4 min-w-[140px] sidebar rounded-xl bg-black-gradient`}>
        <ul className="list-none flex flex-col justify-end items-center flex-1">
        { navLinks.map((nav, index) => (
          <li className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${ index === navLinks.length -1 ? "mb-0" : "mb-6"}`} key={nav?.id}>
            <a href={`#${nav?.id}`}>
              { nav?.title }
            </a>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar