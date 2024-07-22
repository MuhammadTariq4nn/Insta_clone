import React, { useState } from 'react';
import instaPic from '../assets/instapic.png'
import instaLogo from '../assets/instaLogo.png'
import getTheAppInsta from '../assets/getTheAppInsta.png'
// import {RiFacebookBoxFill} from "@remixicon/react"
import { Link } from 'react-router-dom';
import { useData } from '../ContextApiData/FirebaseContext';
// import {RiGoogleLine} from '@remixicon/react'
import google from '../assets/google.svg'



const SignIn = () => {

  const [email,setEmail]=useState("")
  const [password,setPass]=useState("")
  const data=useData()
  // console.log(data.createUserWithEmailAndPassword, "kia hai batao")
  function HandleExistingUsers(e){
     e.preventDefault()
    data.signInExistingUser(email,password)
  }
    return (
        
            <>
            <div className="main w-full h-screen md:flex gap-10 ">
            <div className="loginPic hidden md:flex items-center justify-end md:block h-full md:w-2/4">
                <img className='w-96 h-[90%] object-cover' src={instaPic} alt="" />
            </div>
            <div className="loginForm w-full h-full sm:flex  md:items-center md:w-2/4">
                 <div className='main w-full h-full flex flex-col items-center md:w-[45%] md:h-[80%]'>
                   <div className='top w-full md:border h-[60%] px-12 py-12 md:py-8 md:h-[70%] flex flex-col items-center'>
                     <img className='w-48 h-14 text-center'  src={instaLogo} alt="" /> 
                     <form action="">
                     <input onChange={(e)=>setEmail(e.target.value)}  value={email} className='w-full px-2 py-3 border border-[#DBDBDB] mt-12 text-sm text-semibold bg-[#FAFAFA] rounded' type="text" placeholder='Phone number,username or email'/> 
                     <input onChange={(e)=>setPass(e.target.value)}  value={password} className='w-full px-2 py-3 border border-[#DBDBDB] mt-2 text-sm text-semibold bg-[#FAFAFA] rounded' type="password" placeholder='password'/> 
                     <button  onClick={HandleExistingUsers} className='w-full py-1 bg-[#70B5F9] mt-3 rounded-lg text-white'>Log in</button> 
                     </form>
                     <p className='mt-4'>-------OR-------</p> 
                     <div onClick={()=>{data.signInWithGoogle()}} className='mt-7 flex items-center gap-2'> 
                      <img className="w-7" src={google} alt="" />
                      <p className='text-sm font-semibold '>Login with Google</p>
                     </div> 
                     <p className='mt-2 md:mt-4 text-xs'>Forgot password?</p>
                   </div>
                   <div className="bottom signup  md:border flex items-center justify-center w-full h-16 mt-8 md:mt-5">
                   <p className='text-sm'>Dont have an account? </p> 
                   <Link to={'/signup'}>
                   <span className='text-bold text-[#4D96F6]'> Sign up</span>
                   </Link></div>
                   <img  className='h-24 w-64 mt-2' src={getTheAppInsta} alt="" /> 
                 </div>   
                             
            </div>
            </div>
            </>
        
    );
};

export default SignIn;