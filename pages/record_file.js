import { database } from '@/firebase';
import { async } from '@firebase/util';
import { collection, deleteDoc, deleteField, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'


function record_file() {
  const router=useRouter();
  const [studentData,setStudentData]=useState([]);
    
    // const st=studentData.map((e)=>e.data().timestamp);
    // console.log(st);
  

  useEffect(()=>{

    if (localStorage.getItem('username')){
      
    }
    else{
      router.push('/')
    }
        },[])

        function logout(){
          localStorage.removeItem('username')
          router.push('/')
        }

  useEffect(()=>{
    getData();
  },[]);


  

  const getData = async()=>{
    await getDocs(collection(database,"users")).then((response)=>{
      setStudentData(response.docs);
    })
  }



  const deleteField = async (id) => {
    let fieldToDelete = doc(database, 'users', id);
    await deleteDoc(fieldToDelete)
    .then(() => {
      alert('Data Deleted');
      getData();
    })
    .catch((err) => {
      console.log(err);
    })
    
}






  
  
  
  return (
    <div>
      {/* <div className='bg-slate-200 min-h-screen flex flex-col items-center justify-around gap-2 '> */}
      <div className='flex items-center justify-between bg-gray-400'>
      <h1 className='text-7xl font-serif font-bold  text-black px-5 py-2 rounded-xl '>Foodie</h1>
      <button className=' text-5xl rounded-xl text-white px-5 py-2 mr-5 font-bold bg-black font-serif hover:bg-orange-600 hover:text-black' onClick={()=> router.push('/cuisines')}>Back to List of Cuisines</button>
      </div>
      <div className="bg-[url('/images/bg.png')] bg-cover min-h-screen flex flex-col items-center rounded-xl justify-around gap-2">
        
        <div>
          {/* <button className='bg-blue-400 rounded px-5 py-1 text-xl  text-white' onClick={insertButton}>Insert</button> */}
        </div>
        <div className='mb-32'>
        <button className='bg-red-500 rounded px-5 hover:bg-black hover:text-white py-2 mb-5 text-3xl  mr-5 text-black font-bold' onClick={logout}>Log Out</button>
        
          <table className='w-[100%]'>
            
          <thead className=" text-gray-700 text-4xl font-serif ">
            <tr>
                <th scope="col" className=" py-3 ">
                    Name
                </th>
                <th scope="col" className="px-24 py-3 ">
                    Password
                </th>
                
                
                
                <th scope="col" className="px-72 py-3">
                    Actions
                </th>
                
            </tr>
        </thead>
        <tbody>
          {
          studentData.map((student)=>{


            return <tr key={student.id} className="text-2xl font-serif border border-spacing-10 border-black font-bold">
                <td scope="row" className="px-6 flex items-left justify-center text-center py-4  ">
                    {student.data().email}
                </td>
                <td className="px-28 py-4">
                    {student.data().password}
                </td>
                
                <td className='px-72 py-3'>
                  
                  <button className='bg-red-500 text-center font-2xl rounded px-5 py-2 hover:bg-black hover:text-white' onClick={() => deleteField(student.id)} >Delete</button>
                </td>
              </tr>

              {/* <tr class="bg-white border border-spacing-10">

                <td scope="row" class="px-6 py-4 ">
                    Jason
                </td>
                <td class="px-28 py-4">
                    86
                </td>
                

                
                <td className='px-72 py-3'>
                  <button className='bg-green-500 text-center font-2xl rounded px-5 py-2 mr-2'>Update</button>
                  <button className='bg-red-500 text-center font-2xl rounded px-5 py-2 '>Delete</button>
                </td>
                </tr>

                <tr className="bg-white border border-spacing-10">
                <td scope="row" className="px-6 py-4 ">
                    Ross
                </td>
                <td className="px-28 py-4">
                    74
                </td>
                <td className='px-72 py-3'>
                  <button className='bg-green-500 text-center font-2xl rounded px-5 py-2 mr-2'>Update</button>
                  <button className='bg-red-500 text-center font-2xl rounded px-5 py-2 '>Delete</button>
                </td>
                </tr>

                <tr className="bg-white border border-spacing-10">

                <td scope="row" className="px-6 py-4 ">
                    Monica
                </td>
                <td className="px-28 py-4">
                    73
                </td>
                <td className='px-72 py-3'>
                  <button className='bg-green-500 text-center font-2xl rounded px-5 py-2 mr-2'>Update</button>
                  <button className='bg-red-500 text-center font-2xl rounded px-5 py-2 '>Delete</button>
                </td>
                </tr>


                <tr className="bg-white border border-spacing-10">

                <td scope="row" class="px-6 py-4 ">
                    John
                </td>
                <td className="px-28 py-4">
                    76
                </td>
                <td className='px-72 py-3'>
                  <button className='bg-green-500 text-center font-2xl rounded px-5 py-2 mr-2'>Update</button>
                  <button className='bg-red-500 text-center font-2xl rounded px-5 py-2 '>Delete</button>
                </td>
                </tr> */}
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default record_file