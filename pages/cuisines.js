import { getAllEvents } from '@/chinese'
import Test_item from '@/components/Test_item';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { database } from '@/firebase';
import { async } from '@firebase/util';
import { addDoc, collection, getDocs } from 'firebase/firestore';



function cuisines() {
  const events=getAllEvents();
  const router=useRouter();

  const cont=router.query.country


const result = events.filter(e => e.country === "chinese");

useEffect(()=>{

  if (localStorage.getItem('username')){
    
      
  }
  else{
    router.push('/')
  }
      },[])


    

    


    








  
  return (
    <div className=''>
      
      <div className='bg-gray-300 flex items-center justify-between px-16 py-3 text-left font-bold text-6xl rounded text-blue-700 '>Foodie
      <div>
        <button className='hover:bg-blue-500 hover:text-white rounded-xl px-5 py-2' onClick={()=>router.push('/login')}>Back</button>
      </div>
      
      </div>
      <div className='bg-black text-yellow-400 text-5xl text-center font-semibold rounded font-sans py-5 mt-1'>Select the country cuisine</div>

      
      <div className='shadow-gray-500 grid grid-cols-1 bg-white text-2xl py-10 font-bold  text-center  p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' onClick={()=> router.push('/event/'+'American') 
      }>American</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' onClick={()=> router.push('/event/'+'chinese')}>Chinese</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl'>Indian</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' >British</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' onClick={()=> router.push('/event/'+'Canadian')}>Canadian</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' >Greek</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' >Irish</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' >Italian</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' >Japanese</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' onClick={()=> router.push('/event/'+'chinese')}>Egyptian</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' onClick={()=> router.push('/event/'+'chinese')}>French</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' onClick={()=> router.push('/event/'+'chinese')}>Malaysian</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' onClick={()=> router.push('/event/'+'chinese')}>Thai</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' onClick={()=> router.push('/event/'+'chinese')}>Spanish</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' onClick={()=> router.push('/event/'+'Dutch')}>Dutch</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' onClick={()=> router.push('/event/'+'chinese')}>Croatian</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' onClick={()=> router.push('/event/'+'chinese')}>Maxican</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' onClick={()=> router.push('/event/'+'chinese')}>Pakistani</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' onClick={()=> router.push('/event/'+'chinese')}>Turkish</button>
        <button className='px-10 py-7 bg-gray-300 ml-5 mr-5 mt-5 hover:bg-blue-500 hover:text-white rounded-xl' onClick={()=> router.push('/event/'+'chinese')}>Irani</button>
        </div>
        
        
      </div>
    
  )
}

export default cuisines