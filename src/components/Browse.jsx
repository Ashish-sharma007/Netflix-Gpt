
import React from 'react'
import Header from './Header'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Browse = () => {

const navigate = useNavigate()

const handleSignOut = () => {
  signOut(auth).then(() => {
navigate('/')
  }).catch((error) => { 
    // An error happened.
  });
}

  return (


<div>
     <div className='flex justify-between'>
      <Header/>
     <div className='flex p-2 m-4'>

      <img className='w-12 ' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="userIcon" />
 <button onClick={handleSignOut} className='font-bold cursor-pointer'>Sign Out</button>
     </div>
    </div>
    </div>
  )
}

export default Browse