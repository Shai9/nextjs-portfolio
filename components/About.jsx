import React from 'react'
import Image from 'next/image'
import Profile from '../public/good.png'

export default function About() {
  return (
    <div className='w-full md:h-screen p-2 flex items-center  py-16'>
      <div className='max-w-[1280px] m-auto md:grid grid-cols-3 gap-3'>
        <div className='col-span-2'>
          <p className='py-4 uppercase text-xl tracking-widest text-[#0587b5]'>About Me</p>
          <p className='py-2 text-gray-500'>
            Hello! My name is Dennis and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to know what goes behind the curtains in this well crafted websites i have interacted with.I dived into HTML & CSS and i really enjoyed the experience.
          </p>
          <p className='py-2 text-gray-500'>
            Fascinated on how intricate programming can be I was quickly drawn to learn more. I joined Moringa School and learnt HTML, CSS and Javascript . I also added knowledge on Javascript framework - React , which is flexible and also has support from facebook. I penned backend knowledge too on Ruby and Ruby on Rails. Rails makes us developers happy since it has a lot of repetitive code and as a developer I often feel saturated to write same code repetitively. Its also easy to maintain.Currently am focused on building fullstack applications.
          </p>
          <p className='py-2 underline cursor-pointer text-gray-500'>Check out some of my latest works.</p>
        </div>
        <div className=' h-auto m-auto shadow-sm shadow-gray-400 rounded flex items-center justify-center  hover:scale-105 ease-in duration-300'>
          <Image src={Profile} className='w-25 drop-shadow-md hover:drop-shadow-xl rounded cursor-pointer' alt='/' height={300} width={300}/>
        </div>
      </div>
    </div>
  )
}
