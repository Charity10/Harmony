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
    Roommates & PG's
   </h2>
   <small className='font-light text-sm text-white mt-2 mb-4'>share your room with the right roomates</small>
 <div className='flex mt-4 relative'>
 
 <input
          type="text"
          name="search"
          id="search"
          className="block rounded-md border-0 py-1.5 pl-10  w-80 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="search place"
          
        />
 <svg xmlns="http://www.w3.org/2000/svg" className='absolute w-4 h-4 text-black top-2 right-[68%]' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
 </div>

   </div>
   <div className='flex mt-4'>
   <button className='text-left bg-blue-500 rounded-lg px-6 py-2 text-white'>
     SEARCH
    </button>
   </div>
  </div>
    </Wrapper>
 
  )
}

export default Home
