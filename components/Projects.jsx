import React from 'react';
import portfolioImg from '../public/assets/projects/portfolio.png';
import shapesImg from '../public/assets/projects/shapes.png';
import animationsImg from '../public/assets/projects/animations.png';
import ProjectItem from './ProjectItem';
import githubauthImg from '../public/assets/projects/githubauth.png';
import googleauthImg from '../public/assets/projects/googleauth.png';
import firebasegoogleImg from '../public/assets/projects/firebasegoogle.png';
import firebaseemailImg from '../public/assets/projects/firebaseemail.png';
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
import defitwImg from '../public/assets/projects/defitw.png';
import coinImg from '../public/assets/projects/coin.png';
import glxyImg from '../public/assets/projects/glxy.png';
import defigeckoImg from '../public/assets/projects/defigecko.png';
import datasecuredImg from '../public/assets/projects/datasecured.png';
import beachesImg from '../public/assets/projects/beaches.png';
import weathernextImg from '../public/assets/projects/weathernext.png'
import empireImg from '../public/assets/projects/empire.png';


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
                title='Empire Multi-page App' 
                backgroundImg={empireImg} 
                technology='ReactJS / Firebase / API'
                projectUrl='/empire' 
              />              
              <ProjectItem 
                title='Coin Search Multi-Page App' 
                backgroundImg={coinImg} 
                technology='ReactJS / API / React Router DOM'
                projectUrl='/coin' 
              />              
              <ProjectItem 
                title='Data Secured Multi-Page App' 
                backgroundImg={datasecuredImg} 
                technology='ReactJS / React Router DOM'
                projectUrl='/datasecured' 
              />              
              <ProjectItem 
                title='Defi Gecko Landing Page API' 
                backgroundImg={defigeckoImg} 
                technology='ReactJS / Axios / API'
                projectUrl='/defigecko' 
              />              
              <ProjectItem 
                title='Galaxy Travel Multi-Page App' 
                backgroundImg={glxyImg} 
                technology='ReactJS / React Router DOM'
                projectUrl='/glxy' 
              />              
              <ProjectItem 
                title='Dashboard Multi-Page App' 
                backgroundImg={dashboardImg} 
                technology='ReactJS / NextJS / TailwindCSS'
                projectUrl='/dashboard' 
              />              
              <ProjectItem 
                title='Captur Photography Multiple-Page App' 
                backgroundImg={capturImg} 
                technology='ReactJS / NextJS / TailwindCSS '
                projectUrl='/captur' 
              />              
            </div>
            <h2 className='py-4 mt-10' >Frontend Projects</h2>
            <div className='grid md:grid-cols-2 gap-8' >
              <ProjectItem 
                title='weathernext' 
                backgroundImg={weathernextImg} 
                technology='NextJS / API / TailwindCSS'
                projectUrl='/weathernext' 
              />
              <ProjectItem 
                title='Best Eats Landing Page' 
                backgroundImg={besteatsImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/besteats' 
              />
              <ProjectItem 
                title='Defi Tailwind Landing Page' 
                backgroundImg={defitwImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/defitw' 
              />              
              <ProjectItem 
                title='Beaches Landing Page' 
                backgroundImg={beachesImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/beaches' 
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
                title='Data Finance Landing Page' 
                backgroundImg={datafinanceImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/datafinance' 
              />              
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
                title='AirTravel App Landing Page' 
                backgroundImg={airtravelImg} 
                technology='HTML / CSS / JavaScript'
                projectUrl='/airtravel' 
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
            <h2 className='py-4 mt-10' >Backend Projects</h2>
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
            {/* <h2 className='py-4 mt-10' >Other Projects</h2>
            <div className='grid md:grid-cols-2 gap-8' >
              <ProjectItem 
                title='Portfolio ViteJS' 
                backgroundImg={portfolioviteImg} 
                technology='ViteJS / TailwindCSS'
                projectUrl='/portfoliovite' 
              />              
              <ProjectItem 
                title='Portfolio with other projects' 
                backgroundImg={portfolioreactImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/portfolioreact' 
              />               */}
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
              {/* <ProjectItem 
                title='Dropdown Menu' 
                backgroundImg={dropdownImg} 
                technology='ReactJS / TailwindCSS'
                projectUrl='/dropdown'
              />                                         */}
              {/* <ProjectItem 
                title='Search Filter' 
                backgroundImg={filterImg} 
                technology='ReactJS / Bootstrap'
                projectUrl='/filter' 
              /> */}
              {/* <ProjectItem 
                title='CSS Elements' 
                backgroundImg={elementsImg} 
                technology='HTML / CSS'
                projectUrl='/elements' 
              /> */}
              {/* <ProjectItem 
                title='Python Projects' 
                backgroundImg={pythonImg} 
                technology='Python'
                projectUrl='/python' 
              /> */}
            {/* <ProjectItem 
                title='Material UI Demo' 
                backgroundImg={materialuiImg} 
                technology='ReactJS / MaterialUI'
                projectUrl='/materialui' 
              />               */}
              {/* <ProjectItem 
                title='Food Website' 
                backgroundImg={foodImg} 
                technology='ReactJS'
                projectUrl='/food' 
              /> */}
              {/* <ProjectItem 
                title='Navbar' 
                backgroundImg={navbarImg} 
                technology='ReactJS'
                projectUrl='/navbar' 
              />        */}
              {/* <ProjectItem 
                title='Dark Theme Toggle' 
                backgroundImg={darkthemeImg} 
                technology='ReactJS'
                projectUrl='/darktheme' 
              /> */}
              {/* <ProjectItem 
                title='Powerlist' 
                backgroundImg={powerlistImg} 
                technology='ReactJS'
                projectUrl='/powerlist' 
              /> */}
              {/* <ProjectItem 
                title='Pop-Up Windows' 
                backgroundImg={popupImg} 
                technology='ReactJS'
                projectUrl='/popup' 
              /> */}
              {/* <ProjectItem 
                title='Simple Calculator' 
                backgroundImg={calculatorImg} 
                technology='JavaScript'
                projectUrl='/calculator' 
              /> */}
              {/* <ProjectItem 
                title='Stopwatch' 
                backgroundImg={stopwatchImg} 
                technology='JavaScript'
                projectUrl='/stopwatch' 
              /> */}
            {/* </div> */}
            {/* <h2 className='py-4 mt-10' >API Projects</h2>
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
            </div> */}
        </div>
    </div>
  )
}

export default Projects
