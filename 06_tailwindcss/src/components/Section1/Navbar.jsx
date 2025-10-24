import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-12 py-6 '>
        <h4 className='text-white py-3 px-6 bg-black rounded-full uppercase hover:bg-gray-900 cursor-pointer text-xs'> Target Audience </h4>
        <button className='bg-gray-300 py-3 px-6 rounded-full uppercase tracking-widest hover:bg-gray-400 cursor-pointer text-xs'>digital Banking Platform</button>
    </div>
  )
}

export default Navbar