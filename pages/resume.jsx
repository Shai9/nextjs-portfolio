import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Shaki | Resume</title>
        <meta
          name='description'
          content='I’m a fullstack web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex rounded-xl justify-between items-center'>
          <h2 className='text-center text-[#0567b5]'>Dennis Shakava</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} className='text-[#0567b5]' />
            </a>
            <a
              href='https://github.com/Shai9'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} className='text-[#0567b5]' />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Team collaboration <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Team collaboration</p>
            <p className='py-2'>Web Development</p>
            <p>Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building.Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Fullstack Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Postgresql
            <span className='px-2'>|</span>Ruby
            <span className='px-2'>|</span>Rails
            <span className='px-2'>|</span>Tailwind CSS
          </p>
          <p className='py-2'>
            <span className='font-bold'>Soft skills</span>
            <span className='px-2'>|</span>Communication
            <span className='px-2'>|</span>Problem solving
            <span className='px-2'>|</span>Project management
            <span className='px-2'>|</span>Working with others
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            MORINGA SCHOOL
            </span>
            <span className='px-2'>|</span>Nairobi, KE
          </p>
          <p className='py-1 italic'>Software Engineering certificate (2021 - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Worked on numerous group and independent projects to enforce what i have learned.
            </li>
            <li>
              Participated in daily standups and also school hackathons.
            </li>
            <li>
              Worked directly with technical mentors and other students to understand and
              implement multiple technologies and programs.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              St Mathews High School
            </span>
            <span className='px-2'>|</span>Nairobi, KE
          </p>
          <p className='py-1 italic'>Kenya Certificate of Secondary Education(KCSE) 2013-2017</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Garnered C plain (Equivalent to 2.3 GPA)
            </li>
            <li>
              Learnt computer packages , computer applications and how the web works. Garnered a certificate in Introduction to computers
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
        Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Windsor Cyber Solutions</span>
            <span className='px-2'>|</span>Cyber Clerk
          </p>
          <p className='py-1 italic'>Cyber attendant (2018 – 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Help customers with the use of computers, applications and internet usage.
            Respond to customers who encounter error messages while accessing websites, emailing or downloading content.
            </li>
            <li>
            Operate the various printing machinery in the cybercafé including photocopier, laminating machine and printers
            Learn and operate various equipment in the media centers - photo and video equipment, software.
            </li>
            <li>
              Did private studies on software development.
            </li>
       </ul>
        </div>
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Interests</h5>
          <p className='py-2'>
            <span className='font-bold'>Hobbies</span>
            <span className='px-2'>|</span>Swimming
            <span className='px-2'>|</span> Travelling
            <span className='px-2'>|</span>Reading
            <span className='px-2'>|</span>Writing code
          </p>
          <p className='py-2'>
            <span className='font-bold'>Referees</span>
            <span className='px-2'>|</span>Hamida Mstafa(Mentor)[0712345678]
            <span className='px-2'>|</span>Justus Onyancha(Mentor)[0712345678]
            <span className='px-2'>|</span>Rahim Edu(Student)
          </p>
        </div>
      </div>
    </>
  );
}

export default resume;