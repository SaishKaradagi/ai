import { UserButton } from '@clerk/clerk-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-2 shadow'>
      <img src="" alt="logo" />

        <ul className='flex gap-6  text-lg '>
            <li className='hover:bg-violet-400 p-1 rounded-lg hover:text-white hover:font-semibold'>RoadMap</li>
            <li className='hover:bg-violet-400 p-1 rounded-lg hover:text-white hover:font-semibold'>Interview</li>
            <li className='hover:bg-violet-400 p-1 rounded-lg hover:text-white hover:font-semibold'>About</li>
        </ul>

        <UserButton/>
    </div>
  )
}

export default Navbar
