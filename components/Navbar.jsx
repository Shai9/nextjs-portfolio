import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  AiOutlineMail } from 'react-icons/ai';
import { HiOutlineQueueList, HiXMark} from "react-icons/hi2";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill, BsWhatsapp } from 'react-icons/bs';
import { useState } from 'react'




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
        <div className='md:hidden'>
        <HiOutlineQueueList size={30}/>
        </div>
      </div>
      </div>
      <div className='md:hidden fixed left-0 top-0 w-full h-screen bg-black/50'>
        <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>
        <div>
          <div className='flex w-full items-center justify-between'>
            <Image src='/../public/assets/navlogo.png' alt='/' width='60' height='20' />
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <HiXMark />
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>I build things for the web.</p>
          </div>
        </div>
        <div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='p-2 text-sm'>Home</li>
              </Link>
              <Link href='/'>
                <li className='p-2 text-sm'>About</li>
              </Link>
              <Link href='/'>
                <li className='p-2 text-sm'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='p-2 text-sm'>Projects</li>
              </Link>
              <Link href='/'>
                <li className='p-2 text-sm'>Get in touch</li>
              </Link>
            </ul>
            <div className='pt-40 '>
              <p className='uppercase tracking-widest text-[#4b263a]'>My Handles</p>
            </div>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
            <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
            <AiOutlineMail />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
            <BsFillPersonLinesFill />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
            <BsWhatsapp />
            </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar