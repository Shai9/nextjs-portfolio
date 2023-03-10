import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Body = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest '>
            I feed the web with things I have built
          </p>
          <h1 className='py-4'>
            Hi, I&#39;m <span className='text-[#0587b5]'>Dennis</span>
          </h1>
          <h1 className='py-2 '>A Fullstack Developer</h1>
          <p className='py-4 sm:max-w-[70%] m-auto'>
          I’m a software engineer specializing in building fullstack applications. 
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link
              href='https://www.linkedin.com/in/dennis-shakava-6343a6243'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 text-[#0587b5] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href='https://github.com/Shai9'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 text-[#0587b5] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </Link>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 text-[#0587b5] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 text-[#0587b5] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
