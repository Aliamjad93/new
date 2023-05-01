import { getAllEvents, getMealRecipe } from '@/chinese';
import Ingredients from '@/components/Ingredients';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function id() {
    const router=useRouter();
  const res=getAllEvents();
  const Mealid=router.query.id;
  
  
  
  
  const answers=getMealRecipe(Mealid);
  const names=answers.ingredients

  
  useEffect(()=>{

    if (localStorage.getItem('username')){
      
    }
    else{
      router.push('/')
    }
        },[])



  // console.log(response);

  

  return (
    <div>
    <div className='bg-gray-300 px-16 py-3 text-left font-bold text-6xl rounded flex items-center justify-between text-blue-700'>Foodie
    <div className='bg-blue-500 text-white rounded text-xl px-3 py-2 font-normal text-center hover:bg-gray-800 hover:text-white'>
      <button onClick={()=> router.push('/event/'+answers.country)}>Back to {answers.country} Recipes</button>
    </div>
    </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
      <img src={answers.strMealThumb} 
      width={500}
      height={500}
      className='w-full'></img>
      </div>

      <div className='p-5'>
        <h1>Recipe Name: <span className='font-bold text-2xl'>{answers.strMeal}</span></h1>

        <div className='tags mt-3'>
          <p>Ingredients List:</p>
          
          <span className=' text-white bg-black px-2 py-1 rounded inline-block ml-2 mr-2 mb-2 mt-2 text-xl border border-yellow-400'> {answers.ingredients}</span>
        </div>
      </div>

      </div>

 
      
    
    </div>
  )
}

export default id