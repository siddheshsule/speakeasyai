import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800 flex py-5 px-12 z-20 relative overflow-hidden flex-col gap-2 text-white text-sm'>
        <p>&copy; All Rights Reserved, {new Date().getFullYear()}</p>
        <p>Built by Siddhesh</p>
    </footer>
  )
}

export default Footer