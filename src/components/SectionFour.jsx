import React from 'react'
import Card from './Card'

function SectionFour() {
  return (
    <div className='section-four bg-gray-100 p-4'>
        <h2 className='text-2xl font-bold mb-4'>Section Four</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    <Card/>
    </div>
        
    </div>
  )
}

export default SectionFour