import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-4 bg-blue-gradient rounded-md font-poppins font-medium font-[17px] text-primary outline-none ${styles}`}>
      Get Started
    </button>
  )
}

export default Button