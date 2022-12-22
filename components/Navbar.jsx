import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='fixed  w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Image 
      src='/../public/assets/navlogo.png' 
      alt='/' 
      width='70' 
      height='25'
      />
      <div>
        <ul className='hidden md:flex'>
          <Link href="/">
            <li className='ml-10 text-sm uppercase hover:border-b '>Home</li>
          </Link>
          <Link href="/">
            <li className='ml-10 text-sm uppercase border-b '>About</li>
          </Link>
          <Link href="/">
            <li className='ml-10 text-sm uppercase border-b '>Skills</li>
          </Link>
          <Link href="/">
            <li className='ml-10 text-sm uppercase border-b '>Projects</li>
          </Link>
          <Link href="/">
            <li className='ml-10 text-sm uppercase border-b '>Get in touch</li>
          </Link>
        </ul>
        <div>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar