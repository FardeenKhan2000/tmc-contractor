import React from 'react'

function NavBar() {
  return (
    <div>NavBar
        <ul className='flex justify-between items-center bg-gray-800 text-white p-4'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default NavBar