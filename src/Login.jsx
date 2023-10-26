import React, { useState } from 'react'
import Header from './Header'
import BG from "./utils/images/Netflix_BG.jpg"

const Login = () => {
const [isSignIn,setIsSignIn] = useState(true); 

  return (
    <div className='flex justify-center'>
    <div className=' absolute '>
        <Header/>
        <div> <img className='w-max h-full' src={BG} alt="bg" /></div>  </div>
        
        <div className='relative '>      
  
            <form className='flex flex-col my-36 mx-auto text-white bg-black bg-opacity-80 p-12 text-xl font-semibold '>  <h1 className='px-2 text-2xl'>{isSignIn? " Sign In" : "Sign Up"}</h1> 
             {!isSignIn && (<><input type="text" placeholder='First Name' className='p-4 my-2 rounded-md bg-gray-700' />
                <input type="text" placeholder='Last Name' className='p-4 my-2 rounded-md bg-gray-700' /></> )}   
                <input type="text" placeholder='Email or phone number' className='p-4 my-2 mt-4 rounded-md bg-gray-700' />
                <input type="password" placeholder='Password' className='p-4 my-2 rounded-md bg-gray-700' />
                <button className='p-4 my-2 bg-[#E50914] rounded-md font-normal text-md'>{isSignIn? " Sign In" : "Sign Up"}</button>

            <div className='text-sm font-extralight text-zinc-300 m-2'>  <input type="checkbox" /> Remember me</div>   
            <p onClick={()=>setIsSignIn(!isSignIn)} className='cursor-pointer text-sm m-2'> {isSignIn? <h1 className='flex'>  <p className=' text-gray-400'>New to Netflix ? </p> <p>  &nbsp; Sign Up Now</p></h1> : <h1 className='flex'>  <p className=' text-gray-400'>Already have account ? </p> <p>  &nbsp; Sign In Now</p></h1>  } </p>
            </form>
        </div>
 
    </div>
  )
}

export default Login