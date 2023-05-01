import { geteventbycountry ,getAllEvents} from '@/chinese'
import Test_item from '@/components/Test_item';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer } from 'react'

function country() {
  const router=useRouter();

  const id=router.query.country;
  const events=getAllEvents();

  
  
  const ans=geteventbycountry(id);
  // console.log(ans);
  
  useEffect(()=>{

    if (localStorage.getItem('username')){
      
    }
    else{
      router.push('/')
    }
        },[])
  // const events=geteventbycountry(id);

  
  // console.log(events);
  return (
    <div className=''>
      <div className='bg-gray-300 flex items-center justify-between px-16 py-3 text-left font-bold text-6xl rounded text-blue-700  '>Foodie
      <div className='bg-blue-500 text-white rounded text-xl px-3 py-2 font-normal text-center hover:bg-gray-800 hover:text-white'>
      <button onClick={()=> router.push('/cuisines')}>Back to Cuisines</button>
    </div>

      </div>
      
      
      <div className=' ml-28 py-10 p-5 gap-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      
      
      {
        
        ans.map((item)=>{
        return <Test_item eventss={item}/>
        

        
})
      }
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default country