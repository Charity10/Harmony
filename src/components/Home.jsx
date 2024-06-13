import React from 'react'
import { Wrapper } from './ui/Wrapper'

const Home = () => {
  return (
    <Wrapper>
  <div className='bg-image w-full px-14 py-2 h-screen'>
    
  <div className=' text-white flex  justify-between'>
    <h2 className=' text-4xl uppercase font-bold'>
      Roomies
    </h2>
  <div>
  <nav className="flex items-center justify-between gap-8">
      <ul className='flex items-center font-light gap-4 uppercase text-base cursor-pointer'>
        <li>
          Find A FlatMate
        </li>
        <li>
          Find A Flat/Room
        </li>
        <li>
          LIST YOUR PROPERTY
        </li>
       
      </ul>
      <button className='bg-blue-500 rounded-lg px-6 py-2'>
     SIGN UP/LOGIN
    </button>
    </nav>
  
  </div>
    </div>
    <div className='text-left flex flex-col mt-48 text-4xl text-white'>
   <h2 className=''>
    <span className='font-bold'>Find </span> Like Minded
   </h2>
   <h2 className='font-bold'>
    Roommates &PG's
   </h2>
   <small className='font-light text-sm text-white mt-2'>share your room with the right roomates</small>
   <input type="search" placeholder='search' className='w-60 h-8 mt-2'/>
 
   </div>
   <button className='text-left bg-blue-500 rounded-lg px-6 py-2'>
     SEARCH
    </button>
  </div>
    </Wrapper>
 
  )
}

export default Home
