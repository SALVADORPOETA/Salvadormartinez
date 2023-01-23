import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import portfolioImg from '../public/assets/projects/portfolio.png';
import restaurantImg from '../public/assets/projects/restaurant.png';
import gpt3Img from '../public/assets/projects/gpt3.png';
import stopwatchImg from '../public/assets/projects/stopwatch.png';
import clockImg from '../public/assets/projects/clock.png';
import filterImg from '../public/assets/projects/filter.png';
import bootstrapImg from '../public/assets/projects/bootstrap.png';
import horizontalImg from '../public/assets/projects/horizontal.png';
import parallaxImg from '../public/assets/projects/parallax.png';
import popupImg from '../public/assets/projects/popup.png';
import videoImg from '../public/assets/projects/video.png';
import bmiImg from '../public/assets/projects/bmi.png';
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
                technology='ReactJS / Tailwind / NextJS' 
                projectUrl='/portfolio' 
              />
              <ProjectItem 
                title='Restaurant Site' 
                backgroundImg={restaurantImg}
                technology='ReactJS / Tailwind' 
                projectUrl='/restaurant' 
              />
              <ProjectItem 
                title='Gpt-3 Site' 
                backgroundImg={gpt3Img} 
                technology='ReactJS / Tailwind'
                projectUrl='/gpt3' 
              />
              <ProjectItem 
                title='Horizontal Scroll' 
                backgroundImg={horizontalImg} 
                technology='ReactJS / Tailwind'
                projectUrl='/horizontal' 
              />
              <ProjectItem 
                title='Bootstrap Slider' 
                backgroundImg={bootstrapImg} 
                technology='ReactJS / Bootstrap'
                projectUrl='/bootstrap' 
              />
              <ProjectItem 
                title='Search Filter' 
                backgroundImg={filterImg} 
                technology='ReactJS / Bootstrap'
                projectUrl='/filter' 
              />
              <ProjectItem 
                title='Video Background' 
                backgroundImg={videoImg} 
                technology='ReactJS'
                projectUrl='/video' 
              />
              <ProjectItem 
                title='Pop-Up Window' 
                backgroundImg={popupImg} 
                technology='ReactJS'
                projectUrl='/popup' 
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
                technology='HTML / CSS'
                projectUrl='/stopwatch' 
              />
              <ProjectItem 
                title='Clock' 
                backgroundImg={clockImg} 
                technology='HTML / CSS'
                projectUrl='/clock' 
              />
              <ProjectItem 
                title='BMI Calculator' 
                backgroundImg={bmiImg} 
                technology='HTML / CSS'
                projectUrl='/bmi' 
              />
            </div>
        </div>
    </div>
  )
}

export default Projects