import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  AiOutlineMail } from 'react-icons/ai';
import { HiOutlineQueueList, HiXMark} from "react-icons/hi2";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill, BsWhatsapp } from 'react-icons/bs';




function Navbar() {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Image 
      src='/../public/assets/favicon4.png' 
      alt='/' 
      width='70' 
      height='25'
      className='cursor-pointer'
      />
      <div>
        <ul className='hidden md:flex'>
          <Link href="/">
            <li className='ml-5 text-sm pt-2'>About</li>
          </Link>
          <Link href="/">
            <li className='ml-5 text-sm pt-2'>Skills</li>
          </Link>
          <Link href="/">
            <li className='ml-5 text-sm pt-2'>Projects</li>
          </Link>
          <Link href="/">
            <li className='ml-5 text-sm pt-2'>Get in touch</li>
          </Link>
          <Link href='/'>
            <li className='ml-5 text-sm border-2 border-[#0587b5] inline-block px-6  font-medium  leading-tight  rounded hover:bg-black hover:bg-opacity-5 focus:outline-none pt-2 pb-2'>Resume</li>
          </Link>
        </ul>
        <div onClick={handleNav} className='md:hidden cursor-pointer'>
        <HiOutlineQueueList size={30}/>
        </div>
      </div>
      </div>
    <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/50':''}>
        <div className={ nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }>
        <div>
          <div className='flex w-full items-center justify-between'>
            <Image src='/../public/assets/favicon4.png' alt='/' width='70' height='20' className='cursor-pointer' />
            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <HiXMark />
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>I feed the web with things I have built.</p>
          </div>
        </div>
        <div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='#about'>
                <li className='p-2 text-sm'>About</li>
              </Link>
              <Link href='#skills'>
                <li className='p-2 text-sm'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='p-2 text-sm'>Projects</li>
              </Link>
              <Link href='#contact'>
                <li className='p-2 text-sm'>Get in touch</li>
              </Link>
              <Link href='/resume'>
                <li className='text-sm border-2 border-[#0587b5] inline-block px-6  font-medium  leading-tight  rounded hover:bg-black hover:bg-opacity-5 focus:outline-none pt-2 pb-2'>Resume</li>
              </Link>
            </ul>
            <div className='pt-8 '>
              <p className='uppercase tracking-widest text-[#0587b5]'>My Handles</p>
            </div>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
            <Link href='/https://www.linkedin.com'>
              <div className='rounded-full shadow-lg border-[#0587b5] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <FaLinkedinIn />
              </div>
            </Link> 
            <Link href='/https://www.github.com/Shai9'>
              <div className='rounded-full shadow-lg border-[#0587b5] p-3 cursor-pointer   hover:scale-105 ease-in duration-300'>
              <FaGithub />
              </div>
            </Link>
            
            <Link href='#contact'>
              <div className='rounded-full shadow-lg border-[#0587b5] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <AiOutlineMail />
              </div>
            </Link>
            
            <Link href='/resume'>
            <div className='rounded-full shadow-lg border-[#0587b5] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
            <BsFillPersonLinesFill />
            </div>
            </Link>
            </div>
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar