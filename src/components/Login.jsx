import React, { useRef, useState } from "react";
import Header from "./Header";
import BG from "../utils/images/Netflix_BG.jpg";
import { checkValidDate } from "../utils/validate";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null)

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handlerSubmit = (e) => {
    e.preventDefault()
  }

  const handlerButtonClick = () => {
  const message = checkValidDate(name.current.value,email.current.value, password.current.value,);
  setErrorMessage(message)
    
  }

  return (
    <div className="flex justify-center">
      <div className=" absolute ">
        <Header />
        <div>
           
          <img className="w-screen h-screen" src={BG} alt="bg" />
        </div> 
      </div>

      <div className="relative ">
        <form onSubmit={handlerSubmit} className="flex flex-col my-36 mx-auto text-white bg-black rounded-lg bg-opacity-80 p-24 text-xl font-semibold ">
           
          <h1 className="px-1 text-3xl mb-4">
            {isSignIn ? " Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <>
              <input
              ref={name}
                type="text"
                placeholder=" Name"
                className="p-4 my-2 rounded-md bg-gray-700"  
              />
            
            </>
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email or phone number"
            className="p-4 my-2  rounded-md bg-gray-700"
          />
         
          <input
          ref={password}
            type="password"
            placeholder="Password"
            className="p-4 px-12 my-2 rounded-md bg-gray-700"
          />
           <p className="text-sm font-bold m-2 text-[#E50914]">{errorMessage}</p>
          <button onClick={handlerButtonClick} className="p-4 my-2 bg-[#E50914] rounded-md font-normal text-md">
            {isSignIn ? " Sign In" : "Sign Up"}
          </button>
         
          <div className="text-sm font-extralight text-zinc-300 m-2">
             
            <input type="checkbox" /> Remember me
          </div>
         
          <p
            onClick={() => setIsSignIn(!isSignIn)}
            className="cursor-pointer text-sm m-2"
          >
             
            {isSignIn ? (
              <h1 className="flex">
                 
                <p className=" text-gray-400">New to Netflix ? </p> 
                <p> &nbsp; Sign Up Now</p>
              </h1>
            ) : (
              <h1 className="flex">
                 
                <p className=" text-gray-400">Already have account ? </p> 
                <p> &nbsp; Sign In Now</p>
              </h1>
            )} 
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
