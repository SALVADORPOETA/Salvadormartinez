import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import portfolioImg from '../public/assets/projects/portfolio.png';
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
import bmireactImg from '../public/assets/projects/bmireact.png';
import darkthemeImg from '../public/assets/projects/darktheme.png';
import dropdownImg from '../public/assets/projects/dropdown.png';
import sliderImg from '../public/assets/projects/slider.png';
import navbarImg from '../public/assets/projects/navbar.png';
import githubauthImg from '../public/assets/projects/githubauth.png';
import googleauthImg from '../public/assets/projects/googleauth.png';

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
              <ProjectItem 
                title='Python Projects' 
                backgroundImg={pythonImg} 
                technology='Python / Tkinter'
                projectUrl='/python' 
              />
              <ProjectItem 
                title='Navbar' 
                backgroundImg={navbarImg} 
                technology='JavaScript'
                projectUrl='/navbar' 
              />
              <ProjectItem 
                title='Dropdown Menu' 
                backgroundImg={dropdownImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/dropdown'
              />              
              <ProjectItem 
                title='Dark Theme Toggle' 
                backgroundImg={darkthemeImg} 
                technology='ReactJS'
                projectUrl='/darktheme' 
              />
              <ProjectItem 
                title='Image Slider' 
                backgroundImg={sliderImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/slider' 
              />
              <ProjectItem 
                title='BMI React' 
                backgroundImg={bmireactImg}
                technology='ReactJS' 
                projectUrl='/bmireact' 
              />
              <ProjectItem 
                title='Github Authentication' 
                backgroundImg={githubauthImg} 
                technology='ReactJS / NextJS / API'
                projectUrl='/githubauth' 
              />
              <ProjectItem 
                title='Google Authentication1' 
                backgroundImg={googleauthImg} 
                technology='ReactJS / NextJS / API'
                projectUrl='/googleauth' 
              />
            </div>
        </div>
    </div>
  )
}

export default Projects
