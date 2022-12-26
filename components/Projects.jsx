import React from 'react';
import Project1Img from '../public/assets/prj3.png';
import Project2Img from '../public/assets/prj2.png'
import ProjectItem from './ProjectContainer';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Moringa Hackerank'
            backgroundImg={Project1Img}
            projectUrl='/hackerank clone'
            tech='Ruby on Rails'
          />
          <ProjectItem
            title='Hotel Reviews App'
            backgroundImg={Project2Img}
            projectUrl='/hotel review app'
            tech='Ruby On Rails'

          />
          </div>
      </div>
    </div>
  );
};

export default Projects;