import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-purple-200 flex py-5 px-12 z-20 relative overflow-hidden flex-col gap-2 text-gray-700 text-sm'>
        <p>All Rights Reserved, {new Date().getFullYear()}</p>
        <p>Built by Siddhesh</p>
    </footer>
  )
}

export default Footer