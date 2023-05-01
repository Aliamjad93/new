import { Router, useRouter } from 'next/router'
import React, { useEffect } from 'react'

function Test_item({eventss}) {

  const router=useRouter();
  const id=router.query.country;
  
  useEffect(()=>{

    if (localStorage.getItem('username')){
      
    }
    else{
      router.push('/')
    }
        },[])

  return (
    // <div className='bg-gray-300 px-16 py-3 text-left font-bold text-6xl rounded text-blue-700'>Foode
    <div className=''>
      <div className='bg-gray-500 rounded-xl'> 
      <img src={eventss.strMealThumb} width={611} height={611} className='rounded-xl border border-black
   '></img>

   <div className='text-3xl font-bold px-5 py-2 font-sans'>

      {eventss.strMeal}
      </div>

      <div className='items-center justify-around'>
          <button className='px-5 py-2 bg-blue-500 text-white hover:bg-black hover:text-white  text-center text-2xl ml-2 rounded-xl mb-2' onClick={()=>router.push('/ingredients/'+eventss.idMeal)}>Get Recipe Details</button> 
        <button className='px-5 py-2 bg-red-500 text-white hover:bg-black hover:text-white  text-center text-2xl ml-44 rounded-xl mb-2'>Add to Cart</button> 
      </div>
      
    </div>
    </div>
  )
}

export default Test_item