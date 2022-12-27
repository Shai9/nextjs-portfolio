import React from 'react';
import Project1Img from '../public/assets/project2.png';
import Project2Img from '../public/assets/project 1.png'
import ProjectItem from './ProjectContainer';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#0587b5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Quiz app'
            backgroundImg={Project1Img}
            projectUrl='/quizzy'
            tech='React'
          />
          <ProjectItem
            title='Motivation app'
            backgroundImg={Project2Img}
            projectUrl='/solace'
            tech='Html/Css/Javascript'
          />
          </div>
      </div>
    </div>
  );
};

export default Projects;