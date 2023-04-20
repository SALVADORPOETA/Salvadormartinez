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
import darkthemeImg from '../public/assets/projects/darktheme.png';
import dropdownImg from '../public/assets/projects/dropdown.png';
import githubauthImg from '../public/assets/projects/githubauth.png';
import googleauthImg from '../public/assets/projects/googleauth.png';
import amazonImg from '../public/assets/projects/amazon.png';
import gifImg from '../public/assets/projects/gif.png';
import firebasegoogleImg from '../public/assets/projects/firebasegoogle.png';
import loginImg from '../public/assets/projects/login.png';
import powerlistImg from '../public/assets/projects/powerlist.png';
import weatherImg from '../public/assets/projects/weather.png';
import sidebarImg from '../public/assets/projects/sidebar.png';
import calculatorImg from '../public/assets/projects/calculator.png';
import quotesImg from '../public/assets/projects/quotes.png';
import momentumImg from '../public/assets/projects/momentum.png';
import foodImg from '../public/assets/projects/food.png';
import navbarImg from '../public/assets/projects/navbar.png';
import firebaseemailImg from '../public/assets/projects/firebaseemail.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full md:mt-60' >
        <div className='max-w-[1240px] mx-auto px-2 py-16' >
            <p className='text-xl tracking-widest uppercase text-[#5651e5] pt-8' >Projects</p>
            <h2 className='py-4' >Main Projects</h2>
            <div className='grid md:grid-cols-2 gap-8' >

              <ProjectItem 
                title='Portfolio' 
                backgroundImg={portfolioImg}
                technology='ReactJS / TailwindCSS / NextJS' 
                projectUrl='/portfolio' 
              />
              <ProjectItem 
                title='Momentum App' 
                backgroundImg={momentumImg} 
                technology='ReactJS / Axios / API'
                projectUrl='/momentum' 
              />
              <ProjectItem 
                title='Random Gif App' 
                backgroundImg={gifImg} 
                technology='ReactJS / Axios / API'
                projectUrl='/gif' 
              />
              <ProjectItem 
                title='Weather App' 
                backgroundImg={weatherImg}
                technology='ReactJS / Axios / API' 
                projectUrl='/weather' 
              />
              <ProjectItem 
                title='Quotes App' 
                backgroundImg={quotesImg}
                technology='ReactJS / Axios / API' 
                projectUrl='/quotes' 
              />              
              <ProjectItem 
                title='Food Website' 
                backgroundImg={foodImg} 
                technology='ReactJS'
                projectUrl='/food' 
              />
            </div>
            <h2 className='py-4 mt-10' >Tailwind & Bootstrap Projects</h2>
            <div className='grid md:grid-cols-2 gap-8' >
              <ProjectItem 
                title='3 Login Forms' 
                backgroundImg={loginImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/login' 
              />
              <ProjectItem 
                title='Horizontal Scroll' 
                backgroundImg={horizontalImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/horizontal' 
              />
              <ProjectItem 
                title='Dropdown Menu' 
                backgroundImg={dropdownImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/dropdown'
              />              
              <ProjectItem 
                title='BMI Calculator' 
                backgroundImg={bmiImg} 
                technology='ReactJS / Bootstrap'
                projectUrl='/bmi' 
              />              
            </div>
            <h2 className='py-4 mt-10' >React Projects</h2>
            <div className='grid md:grid-cols-2 gap-8' >
              <ProjectItem 
                title='Navbar' 
                backgroundImg={navbarImg} 
                technology='ReactJS'
                projectUrl='/navbar' 
              />       
              <ProjectItem 
                title='Parallax Scrolling' 
                backgroundImg={parallaxImg} 
                technology='ReactJS'
                projectUrl='/parallax' 
              />
              <ProjectItem 
                title='Dark Theme Toggle' 
                backgroundImg={darkthemeImg} 
                technology='ReactJS'
                projectUrl='/darktheme' 
              />
              <ProjectItem 
                title='Powerlist' 
                backgroundImg={powerlistImg} 
                technology='ReactJS'
                projectUrl='/powerlist' 
              />
            </div>
            <h2 className='py-4 mt-10' >HTML, CSS & JavaScript Projects</h2>
            <div className='grid md:grid-cols-2 gap-8' >
              <ProjectItem 
                title='Simple Calculator' 
                backgroundImg={calculatorImg} 
                technology='JavaScript'
                projectUrl='/calculator' 
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
            </div>
            <h2 className='py-4 mt-10' >API Projects</h2>
            <div className='grid md:grid-cols-2 gap-8' >
              <ProjectItem 
                title='Amazon Scraper' 
                backgroundImg={amazonImg} 
                technology='JavaScript / RapidAPI'
                projectUrl='/amazon' 
              />
            </div>
            <h2 className='py-4 mt-10' >Authentication Projects</h2>
            <div className='grid md:grid-cols-2 gap-8' >
              <ProjectItem 
                title='Firebase Google Authentication' 
                backgroundImg={firebasegoogleImg}
                technology='ReactJS / Firebase / API' 
                projectUrl='/firebasegoogle' 
              />
              <ProjectItem 
                title='Firebase Email Authentication' 
                backgroundImg={firebaseemailImg}
                technology='ReactJS / Firebase / API' 
                projectUrl='/firebaseemail' 
              />
              <ProjectItem 
                title='Github Authentication' 
                backgroundImg={githubauthImg} 
                technology='ReactJS / NextJS / API'
                projectUrl='/githubauth' 
              />
              <ProjectItem 
                title='Google Authentication' 
                backgroundImg={googleauthImg} 
                technology='ReactJS / NextJS / API'
                projectUrl='/googleauth' 
              />
            </div>
            <h2 className='py-4 mt-10' >Desktop Projects</h2>
            <div className='grid md:grid-cols-2 gap-8' >
              <ProjectItem 
                title='Search Filter' 
                backgroundImg={filterImg} 
                technology='ReactJS / Bootstrap'
                projectUrl='/filter' 
              />
              <ProjectItem 
                title='Sidebar Menu' 
                backgroundImg={sidebarImg}
                technology='JavaScript' 
                projectUrl='/sidebar' 
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
            </div>
        </div>
    </div>
  )
}

export default Projects
