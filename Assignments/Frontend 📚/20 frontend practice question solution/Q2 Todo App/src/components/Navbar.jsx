import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex  items-center justify-between bg-clip-padding backdrop-filter backdrop-blur-lg   text-white bg-opacity-100'>
      <img src="/logo.svg" alt=""  className=" w-10 ml-5 py-3" />
      <div className="text-2xl font-semibold hidden sm:block">
        <p className="text-green-500">Your Time is in Your Hand</p>
      </div>
      <div className='mr-5'>
        <button  className="bg-gray-900 py-3 px-2 gap-2 rounded-full cursor-pointer"> ➕ ADD TODO</button>
      </div>
    </div>
  )
}

export default Navbar
