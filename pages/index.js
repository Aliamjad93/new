


import React, { useEffect, useState } from 'react'
import {VscCallIncoming} from "react-icons/vsc";
import {AiFillInstagram} from "react-icons/ai";
import {database} from '@/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { data } from 'autoprefixer'
import { useRouter } from 'next/router';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
function index() {
  
  
    const router=useRouter('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [day,setDay]=useState('');
    const [studentData,setStudentdata]=useState([]);


  // useEffect(()=>{
  //   getData();
  // },[])
  // const getData=async()=>{
  //   await getDocs(collection(database,"Students")).then((response)=>{
  //     setStudentdata(response.docs);
  //   })
  // }

  useEffect(()=>{

    if (localStorage.getItem('username')){
      console.log(localStorage.getItem('username'));
        router.push('/login')
    }
    else{
      router.push('/')
    }
        },[])


  
    


    

    const auth=getAuth();



async function simpleSignin(e){
    e.preventDefault();
      try {
        signInWithEmailAndPassword
        await signInWithEmailAndPassword(auth, email, password)
        
        localStorage.setItem("username", email);
        router.push('/login');
      } catch (error) {
	alert("Something went wrong with Signing In" + error);
    setEmail('');
    setPassword('');
      }
      e.preventDefault();
    


}


















  return (
    <div>
      
      <div className="bg-[url('/images/bgg.avif')] bg-cover min-h-screen rounded-2xl w-full">
          <div className='mt-2 border border-black rounded-2xl flex bg-black items-center justify-around'>
            <h1 className=' text-white text-6xl font-serif mr-80 py-4 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1'>Foodie</h1>
            <div className='font-serif  flex items-center justify-end ml-72 '>
            <button className='text-white text-2xl mr-9 bg-orange-950 px-5 py-2  hover:bg-blue-600 hover:text-white rounded-xl 'onClick={()=> router.push( '/aboutus')}>About</button>
            <button className='text-white text-2xl bg-orange-950 px-5 py-2 hover:bg-blue-600 hover:text-white rounded-xl ' onClick={()=> router.push('/signup')}>Signup</button>
            <button className='text-white text-2xl bg-orange-950 px-10 py-3 hover:bg-blue-600 hover:text-white rounded-xl ml-9 ' onClick={()=> router.push('/https://www.instagram.com/im_ali27/')}>
              <AiFillInstagram/>
              </button>
            </div>

            
          </div>
          <div className=' text-center  absolute mt-10 left-1/2 -translate-x-1/2 font-extrabold  mb-48 flex md:grid-cols-1 sm:grid-cols-1'>
              <h1 className='text-black  flex text-7xl font-bold font-serif'>Welcome to</h1>
              <h1 className=' text-orange-600 ml-4 text-7xl font-bold font-serif'>Foodie</h1>



            </div>

          <div className='bg-black w-[40%] text-center  rounded-xl py-20 absolute  mt-52 left-1/2 -translate-x-1/2 font-extrabold  mb-96'>
            <h1 className='text-white font-serif text-4xl'>Login</h1>
                  
          <form className='flex flex-col  px-44 gap-2 mt-10'>
                <input text="text"
                placeholder='Enter Email'
                className='py-2 px-4 text-xl rounded-xl border border-none'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <input text="password"
                type="password"
                placeholder='Enter Password'
                className='py-2 px-4 text-xl rounded-xl border border-none'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                
                />
                

                <button 
                
                className='bg-blue-400 text-white rounded-lg py-2 w-[70%] flex  items-center justify-center ml-20 mb-7 mt-3 hover:bg-orange-600 hover:text-black' 
                onClick={simpleSignin}>Sign In</button>
                
                </form>
            
            </div>
            <div className='text-center flex flex-col  absolute  top-1/2 left-1/2 -translate-x-1/2 font-extrabold  mt-64 '>
            <h1 className='text-black font-serif text-3xl'>Don't have an account? </h1>
            <button  className='px-5 underline  mb-96 text-orange-600 font-serif text-3xl hover:bg-blue-600 hover:text-white rounded-xl' onClick={()=> router.push('/signup')}>Sign Up</button>
            </div>
          



              

      </div>
      <div className='flex items-center justify-center py-20 rounded-xl mt-2 text-xl bg-black text-white'>
        <div className='flex'>
        <h1 className='mt-2'><VscCallIncoming/></h1>
        <h1 className='ml-2 mt-1'>Contact Us</h1>
        <h1 className='text-orange-600 text-2xl font-bold font-serif ml-2'>  - 0301-6146851</h1>
        
       

        </div>
        
        
      </div>
      
    </div>
  )
}

export default index