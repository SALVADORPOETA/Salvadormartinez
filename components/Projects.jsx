import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import portfolioImg from '../public/assets/projects/portfolio.png';
import restaurantImg from '../public/assets/projects/restaurant.png';
import gpt3Img from '../public/assets/projects/gpt3.png';
import stopwatchImg from '../public/assets/projects/stopwatch.png';
import filterImg from '../public/assets/projects/filter.png';
import shapesImg from '../public/assets/projects/shapes.png';
import horizontalImg from '../public/assets/projects/horizontal.png';
import parallaxImg from '../public/assets/projects/parallax.png';
import bmiImg from '../public/assets/projects/bmi.png';
import animationsImg from '../public/assets/projects/animations.png';
import elementsImg from '../public/assets/projects/elements.png';
import pythonImg from '../public/assets/projects/python.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full' >
        <div className='max-w-[1240px] mx-auto px-2 py-16' >
            <p className='text-xl tracking-widest uppercase text-[#5651e5]' >Projects</p>
            <h2 className='py-4' >What I've built</h2>
            <div className='grid md:grid-cols-2 gap-8' >

              <ProjectItem 
                title='Portfolio' 
                backgroundImg={portfolioImg}
                technology='ReactJS / TailwindCSS / NextJS' 
                projectUrl='/portfolio' 
              />
              {/*<ProjectItem 
                title='Restaurant Site' 
                backgroundImg={restaurantImg}
                technology='ReactJS / TailwindCSS' 
                projectUrl='/restaurant' 
              />
              <ProjectItem 
                title='Gpt-3 Site' 
                backgroundImg={gpt3Img} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/gpt3' 
              />*/}
              <ProjectItem 
                title='Horizontal Scroll' 
                backgroundImg={horizontalImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/horizontal' 
              />
              <ProjectItem 
                title='BMI Calculator' 
                backgroundImg={bmiImg} 
                technology='ReactJS / Bootstrap'
                projectUrl='/bmi' 
              />              
              <ProjectItem 
                title='Search Filter' 
                backgroundImg={filterImg} 
                technology='ReactJS / Bootstrap'
                projectUrl='/filter' 
              />
              <ProjectItem 
                title='Parallax Scrolling' 
                backgroundImg={parallaxImg} 
                technology='ReactJS'
                projectUrl='/parallax' 
              />
              <ProjectItem 
                title='Stopwatch' 
                backgroundImg={stopwatchImg} 
                technology='JavaScript'
                projectUrl='/stopwatch' 
              />
              <ProjectItem 
                title='CSS Animations' 
                backgroundImg={animationsImg} 
                technology='HTML / CSS'
                projectUrl='/animations' 
              />
              <ProjectItem 
                title='CSS Shapes' 
                backgroundImg={shapesImg} 
                technology='HTML / CSS'
                projectUrl='/shapes' 
              />
              <ProjectItem 
                title='CSS Elements' 
                backgroundImg={elementsImg} 
                technology='HTML / CSS'
                projectUrl='/elements' 
              />
              {/*<ProjectItem 
                title='Video Background' 
                backgroundImg={videoImg} 
                technology='ReactJS'
                projectUrl='/video' 
              />
              <ProjectItem 
                title='Clock' 
                backgroundImg={clockImg} 
                technology='HTML / CSS'
                projectUrl='/clock' 
              />
              <ProjectItem 
                title='Color Finder' 
                backgroundImg={colorImg} 
                technology='Python / Tkinter'
                projectUrl='/color' 
              />
              <ProjectItem 
                title='Whiteboard' 
                backgroundImg={whiteboardImg} 
                technology='Python / Tkinter'
                projectUrl='/whiteboard' //hellooo
              />*/}              
              <ProjectItem 
                title='Python Projects' 
                backgroundImg={pythonImg} 
                technology='Python / Tkinter'
                projectUrl='/python' 
              />
            </div>
        </div>
    </div>
  )
}

export default Projects
