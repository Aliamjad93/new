import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function aboutus() {
    



    const router=useRouter();

    
    useEffect(()=>{

        if (localStorage.getItem('username')){
          
        }
        else{
          router.push('/')
        }
            },[])


           
  return (
    <div>
        <div className='bg-black px-16 py-3 text-left font-bold flex items-center justify-between text-8xl rounded-xl font-serif  text-blue-700'>Foode
        <button className='bg-blue-500 text-black rounded font-serif text-3xl px-3 py-2 mb-3 font-normal text-center hover:bg-orange-600 hover:text-black' onClick={()=> router.push('/login')}>Back</button>
        </div>
        <div className="bg-[url('/images/bgg.avif')] bg-cover min-h-screen rounded-2xl w-full flex items-center justify-center">
        <div className='flex items-center justify-center text-center'>
        <h1 className='text-center  absolute text-black left-1/2 -translate-x-1/2 font-extrabold  text-8xl mb-96'>About Us</h1>
        </div>
        <div className='bg-black rounded-xl'>
        <p className='text-2xl text-white font-serif px-9 py-9 rounded-xl border border-yellow-400'>
        At ‘Foodie’ , we’re tied in with presenting crisp food, regardless of whether it implies going the additional mile. <br></br> When you stroll through our entryways, we do what we can to make everybody feel comfortable in light of the fact <br></br> that our family stretches out through your locale.

‘Foodie’ is an organization that is continually developing.<br></br> From the principal eatery in 1969, we’ve kept on extending’ vision to help other individuals end up effective entrepreneurs <br></br> by owning an ‘Foodie’ establishment. We search for franchisees who are focused on quality, not compromising.
        </p>
        </div>
                                    
        </div>
    </div>
  )
}

export default aboutus