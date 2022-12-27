import Image from 'next/image';
import React from 'react';
import prj1 from '../public/assets/project 1.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const solace = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={prj1}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Solace UI</h2>
          <h3>Html / Css / Javascript( External api )</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='underline'>Project</p>
          <h2>Overview</h2>
          <p>
            This application was built using Html and is styled with
            vanilla CSS and some Javascript. The application is hosted statically using Github.io. A
            few features to note with this project are the consumption of an external api and also the responsiveness of the app.
          </p>
          <a
            href='https://shai9.github.io/Solace-project/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/Shai9/Solace-project/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-black py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Html
              </p>
              <p className='text-black py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vanilla Css
              </p>
              <p className='text-black py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default solace;