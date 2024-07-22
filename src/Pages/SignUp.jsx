import React, { useState } from 'react';
import instaPic from '../assets/instapic.png'
import instaLogo from '../assets/instaLogo.png'
import getTheAppInsta from '../assets/getTheAppInsta.png'

import { Link } from 'react-router-dom';
import { useData } from '../ContextApiData/FirebaseContext';
import google from '../assets/google.svg'

const SignUp = () => {
  const [email,setEmail]=useState("")
  const [password,setPass]=useState("")
  const data=useData()
  // console.log(data.createUserWithEmailAndPassword, "kia hai batao")
  function HandleNewUser(e){
     e.preventDefault()
    data.newUser(email,password)
  }
  
    return (
        <>
         <div className="main w-full h-screen md:flex md:items-center md:justify-center">
            <div className="loginForm  w-full h-full md:flex md:items-center md:w-1/4">
                 <div className='main w-full h-full flex flex-col items-center md:w-full md:h-[80%]'>
                   <div className='top   w-full md:border  px-12 pt-12 md:py-8  flex flex-col items-center'>
                     <img className='w-48 h-14 text-center'  src={instaLogo} alt="" /> 
                      <p className='text-center w-[90%] font-semibold text-[#737373]'>Sign up to see photos and videos from your friends.</p>
                      <button onClick={()=>{data.signInWithGoogle()}} className='w-full py-2 bg-[#4D96F6] mt-3 rounded-lg text-white flex justify-center'>
                         <div className='flex items-center gap-2 '>
                             <img className='w-7' src={google} alt="" />
                            <p className='text-sm font-semibold '>Login with Google</p>
                          </div>
                       </button> 
                      
                      <p className='mt-3'>-------OR-------</p>
                     <form action="">
                     <input className='w-full px-2 py-2 border border-[#DBDBDB] mt-5 text-sm text-semibold bg-[#FAFAFA] rounded' type="text" placeholder='Phone number,username or email'/> 
                     <input className='w-full px-2 py-2 border border-[#DBDBDB] mt-2 text-sm text-semibold bg-[#FAFAFA] rounded' type="password" placeholder='password'/> 
                     <input onChange={(e)=>setEmail(e.target.value)}  value={email} className='w-full px-2 py-2 border border-[#DBDBDB] mt-2 text-sm text-semibold bg-[#FAFAFA] rounded' type="text" placeholder='Phone number,username or email'/> 
                     <input onChange={(e)=>setPass(e.target.value)} value={password} className='w-full px-2 py-2 border border-[#DBDBDB] mt-2 text-sm text-semibold bg-[#FAFAFA] rounded' type="password" placeholder='password'/> 
                       
                     <div className='h-[25%] w-full flex mt-2 items-end'>
                     <button onClick={HandleNewUser} className='h-10 w-full  py-1 bg-[#70B5F9]  rounded-lg text-white'>Log in</button>
                     </div>
                     </form>
                   </div>
                   <div className="bottom signup  mt-3  md:border md:mt-5 flex items-center justify-center w-full">
                   <p className='text-sm py-4'>have an account? </p> 
                     <Link to={'/'}>
                     <span className='text-bold text-[#4D96F6]'>Sign In</span>
                     </Link>
                   </div>
                   <img  className='h-24 w-64 ' src={getTheAppInsta} alt="" /> 
                 </div>   
                             
            </div>
            </div>
        </>
    );
};

export default SignUp; 