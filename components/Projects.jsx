import React from 'react';
import portfolioImg from '../public/assets/projects/portfolio.png';
import stopwatchImg from '../public/assets/projects/stopwatch.png';
import filterImg from '../public/assets/projects/filter.png';
import shapesImg from '../public/assets/projects/shapes.png';
import horizontalImg from '../public/assets/projects/horizontal.png';
import popupImg from '../public/assets/projects/popup.png';
import bmiImg from '../public/assets/projects/bmi.png';
import animationsImg from '../public/assets/projects/animations.png';
import elementsImg from '../public/assets/projects/elements.png';
import pythonImg from '../public/assets/projects/python.jpg';
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
import calculatorImg from '../public/assets/projects/calculator.png';
import quotesImg from '../public/assets/projects/quotes.png';
import momentumImg from '../public/assets/projects/momentum.png';
import foodImg from '../public/assets/projects/food.png';
import navbarImg from '../public/assets/projects/navbar.png';
import firebaseemailImg from '../public/assets/projects/firebaseemail.png';
import weathernextImg from '../public/assets/projects/weathernext.png';
import todoImg from '../public/assets/projects/todo.png';
import materialuiImg from '../public/assets/projects/materialui.png';
import pwaImg from '../public/assets/projects/pwa.png';
import airtravelImg from '../public/assets/projects/airtravel.png';
import dashboardImg from '../public/assets/projects/dashboard.png';
import financialImg from '../public/assets/projects/financial.png';
import realestateImg from '../public/assets/projects/realestate.png';
import driverImg from '../public/assets/projects/driver.png';
import weekawayImg from '../public/assets/projects/weekaway.png';
import besteatsImg from '../public/assets/projects/besteats.png';
import driveImg from '../public/assets/projects/drive.png';
import datafinanceImg from '../public/assets/projects/datafinance.png';
import capturImg from '../public/assets/projects/captur.png';
import experiencesImg from '../public/assets/projects/experiences.png';
import portfolioviteImg from '../public/assets/projects/portfoliovite.png';
import defiImg from '../public/assets/projects/defi.png';
import defitwImg from '../public/assets/projects/defitw.png';
import coinImg from '../public/assets/projects/coin.png';


const Projects = () => {
  return (
    <div id='projects' className='w-full md:mt-20' >
        <div className='max-w-[1240px] mx-auto px-2 py-16' >
            <p className='text-xl tracking-widest uppercase text-[#5651e5] pt-8' >Projects</p>
            <h2 className='py-4' >Main Projects</h2>
            <div className='grid md:grid-cols-2 gap-8' >

              <ProjectItem 
                title='Portfolio' 
                backgroundImg={portfolioImg}
                technology='ReactJS / NextJS / TailwindCSS' 
                projectUrl='/portfolio' 
              />
              <ProjectItem 
                title='Coin Search Multi-Page App' 
                backgroundImg={coinImg} 
                technology='ReactJS / Axios / API'
                projectUrl='/coin' 
              />              
              <ProjectItem 
                title='Dashboard' 
                backgroundImg={dashboardImg} 
                technology='ReactJS / NextJS / TailwindCSS'
                projectUrl='/dashboard' 
              />              
              <ProjectItem 
                title='Captur Photography Multiple-Page App' 
                backgroundImg={capturImg} 
                technology='ReactJS / NextJS / TailwindCSS'
                projectUrl='/captur' 
              />              
              <ProjectItem 
                title='Defi Tailwind Landing Page' 
                backgroundImg={defitwImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/defitw' 
              />              
              <ProjectItem 
                title='Experiences Landing Page' 
                backgroundImg={experiencesImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/experiences' 
              />              
              <ProjectItem 
                title='Weekaway Landing Page' 
                backgroundImg={weekawayImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/weekaway' 
              />
              <ProjectItem 
                title='Best Eats Landing Page' 
                backgroundImg={besteatsImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/besteats' 
              />
              <ProjectItem 
                title='Data Finance Landing Page' 
                backgroundImg={datafinanceImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/datafinance' 
              />              
              <ProjectItem 
                title='AirTravel App Landing Page' 
                backgroundImg={airtravelImg} 
                technology='HTML / CSS / JavaScript'
                projectUrl='/airtravel' 
              />              
            </div>
            <h2 className='py-4 mt-10' >API Projects</h2>
            <div className='grid md:grid-cols-2 gap-8' >
              <ProjectItem 
                title='Random Gif App' 
                backgroundImg={gifImg} 
                technology='ReactJS / Axios / API'
                projectUrl='/gif' 
              />
              <ProjectItem 
                title='Weather App NextJS' 
                backgroundImg={weathernextImg}
                technology='NextJS / API / TailwindCSS' 
                projectUrl='/weathernext' 
              />
              <ProjectItem 
                title='Momentum App' 
                backgroundImg={momentumImg} 
                technology='ReactJS / Axios / API'
                projectUrl='/momentum' 
              />
              <ProjectItem 
                title='Random Quotes App' 
                backgroundImg={quotesImg}
                technology='ReactJS / Axios / API' 
                projectUrl='/quotes' 
              />              
              <ProjectItem 
                title='Weather PWA' 
                backgroundImg={pwaImg}
                technology='ReactJS / PWA' 
                projectUrl='/pwa' 
              />
              <ProjectItem 
                title='Amazon Scraper' 
                backgroundImg={amazonImg} 
                technology='JavaScript / RapidAPI'
                projectUrl='/amazon' 
              />
            </div>
            <h2 className='py-4 mt-10' >Tailwind & Bootstrap Projects</h2>
            <div className='grid md:grid-cols-2 gap-8' >
              <ProjectItem 
                title='Todo App Firebase' 
                backgroundImg={todoImg} 
                technology='ReactJS / Firebase / TailwindCSS'
                projectUrl='/todo' 
              />              
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
                title='BMI Calculator' 
                backgroundImg={bmiImg} 
                technology='ReactJS / Bootstrap'
                projectUrl='/bmi' 
              />              
            </div>
            <h2 className='py-4 mt-10' >React Projects</h2>
            <div className='grid md:grid-cols-2 gap-8' >
              <ProjectItem 
                title='Real Estate Landing Page' 
                backgroundImg={realestateImg} 
                technology='ReactJS'
                projectUrl='/realestate' 
              />
              <ProjectItem 
                title='Driver Landing Page' 
                backgroundImg={driverImg} 
                technology='ReactJS'
                projectUrl='/driver' 
              />
              <ProjectItem 
                title='Drive Landing Page' 
                backgroundImg={driveImg} 
                technology='ReactJS'
                projectUrl='/drive' 
              />
              <ProjectItem 
                title='Financial Advisor Landing Page' 
                backgroundImg={financialImg}
                technology='ReactJS'
                projectUrl='/financial' 
              />              
              <ProjectItem 
                title='Material UI Demo' 
                backgroundImg={materialuiImg} 
                technology='ReactJS / MaterialUI'
                projectUrl='/materialui' 
              />              
              <ProjectItem 
                title='Food Website' 
                backgroundImg={foodImg} 
                technology='ReactJS'
                projectUrl='/food' 
              />
              <ProjectItem 
                title='Navbar' 
                backgroundImg={navbarImg} 
                technology='ReactJS'
                projectUrl='/navbar' 
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
              <ProjectItem 
                title='Pop-Up Windows' 
                backgroundImg={popupImg} 
                technology='ReactJS'
                projectUrl='/popup' 
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
            <h2 className='py-4 mt-10' >Other Projects</h2>
            <div className='grid md:grid-cols-2 gap-8' >
              <ProjectItem 
                title='Portfolio ViteJS' 
                backgroundImg={portfolioviteImg} 
                technology='ViteJS / TailwindCSS'
                projectUrl='/portfoliovite' 
              />              
              {/* <ProjectItem 
                title='Defi Landing Page' 
                backgroundImg={defiImg} 
                technology='ReactJS'
                projectUrl='/defi' 
              />               */}
              {/* <ProjectItem 
                title='Weather App ReactJS' 
                backgroundImg={weatherImg}
                technology='ReactJS / Axios / API' 
                projectUrl='/weather' 
              /> */}
              <ProjectItem 
                title='Dropdown Menu' 
                backgroundImg={dropdownImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/dropdown'
              />                                        
              {/* <ProjectItem 
                title='Search Filter' 
                backgroundImg={filterImg} 
                technology='ReactJS / Bootstrap'
                projectUrl='/filter' 
              /> */}
              <ProjectItem 
                title='CSS Elements' 
                backgroundImg={elementsImg} 
                technology='HTML / CSS'
                projectUrl='/elements' 
              />
              <ProjectItem 
                title='Python Projects' 
                backgroundImg={pythonImg} 
                technology='Python'
                projectUrl='/python' 
              />
            </div>
        </div>
    </div>
  )
}

export default Projects
