import React from 'react'
import Logo from "../utils/images/Netflix_Logo_PMS.png"

const Header = () => {
 


  return (
    <div>

    <div className='px-8   py-2 w-[2000px] bg-gradient-to-b from-black absolute'>
        <img className='w-44' src={Logo} alt="" />
        
    </div></div>
  )
}

export default Header