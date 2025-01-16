import React from 'react'
import portfolioImg from '../public/assets/projects/portfolio.png'
// import shapesImg from '../public/assets/projects/shapes.png'
// import animationsImg from '../public/assets/projects/animations.png'
import ProjectItem from './ProjectItem'
// import githubauthImg from '../public/assets/projects/githubauth.png'
// import googleauthImg from '../public/assets/projects/googleauth.png'
// import firebasegoogleImg from '../public/assets/projects/firebasegoogle.png'
// import firebaseemailImg from '../public/assets/projects/firebaseemail.png'
// import airtravelImg from '../public/assets/projects/airtravel.png'
// import dashboardImg from '../public/assets/projects/dashboard.png'
// import financialImg from '../public/assets/projects/financial.png'
// import realestateImg from '../public/assets/projects/realestate.png'
// import driverImg from '../public/assets/projects/driver.png'
// import weekawayImg from '../public/assets/projects/weekaway.png'
// import besteatsImg from '../public/assets/projects/besteats.png'
// import driveImg from '../public/assets/projects/drive.png'
// import datafinanceImg from '../public/assets/projects/datafinance.png'
// import capturImg from '../public/assets/projects/captur.png'
// import experiencesImg from '../public/assets/projects/experiences.png'
// import defitwImg from '../public/assets/projects/defitw.png'
// import coinImg from '../public/assets/projects/coin.png'
// import glxyImg from '../public/assets/projects/glxy.png'
// import defigeckoImg from '../public/assets/projects/defigecko.png'
// import datasecuredImg from '../public/assets/projects/datasecured.png'
// import beachesImg from '../public/assets/projects/beaches.png'
import kemetImg from '../public/assets/projects/kemet.png'
import empireImg from '../public/assets/projects/empire.png'
import portfolio3dImg from '../public/assets/projects/portfolio3d.png'
// import travelImg from '../public/assets/projects/travel.png'
// import dashtremorImg from '../public/assets/projects/dashtremor.png'
// import cloudImg from '../public/assets/projects/cloud.png'
import bharatImg from '../public/assets/projects/bharat.png'
import livedocsImg from '../public/assets/projects/livedocs.png'
// import gpt3Img from '../public/assets/projects/gpt3.png'
import gerichtImg from '../public/assets/projects/gericht.png'
import brainwaveImg from '../public/assets/projects/brainwave.png'
import appleImg from '../public/assets/projects/apple.png'
import mayapanImg from '../public/assets/projects/mayapan.png'
import imaginifyImg from '../public/assets/projects/imaginify.png'
import awardsImg from '../public/assets/projects/awards.png'

const Projects = () => {
  return (
    <div id="projects" className="w-full md:mt-20">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] pt-8">
          Projects
        </p>
        <h2 className="py-4">Original Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Mayapan Original App"
            backgroundImg={mayapanImg}
            technology="NextJS / Firebase / API"
            projectUrl="/mayapan"
          />
          <ProjectItem
            title="Bharat Original App"
            backgroundImg={bharatImg}
            technology="NextJS / Firebase / API"
            projectUrl="/bharat"
          />
          <ProjectItem
            title="Kemet Original App"
            backgroundImg={kemetImg}
            technology="ReactJS / Firebase / API"
            projectUrl="/kemet"
          />
          <ProjectItem
            title="Empire Original App"
            backgroundImg={empireImg}
            technology="ReactJS / Firebase / API"
            projectUrl="/empire"
          />
        </div>
        <h2 className="py-4 mt-10">Multi-Page Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Portfolio"
            backgroundImg={portfolioImg}
            technology="ReactJS / NextJS / TailwindCSS"
            projectUrl="/portfolio"
          />
          <ProjectItem
            title="Imaginify AI Image Transformation"
            backgroundImg={imaginifyImg}
            technology="TypeScript / Clerk / MongoDB"
            projectUrl="/imaginify"
          />
          <ProjectItem
            title="Live Docs"
            backgroundImg={livedocsImg}
            technology="NextJS / Liveblocks / TypeScript"
            projectUrl="/livedocs"
          />
          <ProjectItem
            title="3D portfolio"
            backgroundImg={portfolio3dImg}
            technology="ThreeJS / ViteJS / TailwindCSS"
            projectUrl="/portfolio3d"
          />
          {/* <ProjectItem
            title="Coin Search Multi-Page App"
            backgroundImg={coinImg}
            technology="ReactJS / API / React Router DOM"
            projectUrl="/coin"
          /> */}
          {/* <ProjectItem
            title="Data Secured Multi-Page App"
            backgroundImg={datasecuredImg}
            technology="ReactJS / React Router DOM"
            projectUrl="/datasecured"
          /> */}
          {/* <ProjectItem
            title="Galaxy Travel Multi-Page App"
            backgroundImg={glxyImg}
            technology="ReactJS / React Router DOM"
            projectUrl="/glxy"
          />
          <ProjectItem
            title="Dashboard Multi-Page App"
            backgroundImg={dashboardImg}
            technology="ReactJS / NextJS / TailwindCSS"
            projectUrl="/dashboard"
          />
          <ProjectItem
            title="Captur Photography Multiple-Page App"
            backgroundImg={capturImg}
            technology="ReactJS / NextJS / TailwindCSS "
            projectUrl="/captur"
          /> */}
        </div>
        <h2 className="py-4 mt-10">UI/UX Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Awards"
            backgroundImg={awardsImg}
            technology="GSAP / ViteJS / ReactJS"
            projectUrl="/awards"
          />
          <ProjectItem
            title="Apple Web"
            backgroundImg={appleImg}
            technology="ThreeJS / GSAP / ViteJS"
            projectUrl="/apple"
          />
          <ProjectItem
            title="Brainwave"
            backgroundImg={brainwaveImg}
            technology="ViteJS / ReactJS / TailwindCSS"
            projectUrl="/brainwave"
          />
          <ProjectItem
            title="Gericht Restaurant"
            backgroundImg={gerichtImg}
            technology="ReactJS"
            projectUrl="/gericht"
          />
          {/* <ProjectItem
            title="GPT 3"
            backgroundImg={gpt3Img}
            technology="ReactJS"
            projectUrl="/gpt3"
          /> */}
        </div>
        {/* <h2 className="py-4 mt-10">API Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Defi Gecko Landing Page API"
            backgroundImg={defigeckoImg}
            technology="ReactJS / Axios / API"
            projectUrl="/defigecko"
          />
        </div> */}
        {/* <h2 className="py-4 mt-10">Landing Pages</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Travel Landing Page"
            backgroundImg={travelImg}
            technology="TypeScript / NextJS / TailwindCSS"
            projectUrl="/travel"
          />
          <ProjectItem
            title="Dash Tremor Landing Page"
            backgroundImg={dashtremorImg}
            technology="ReactJS / TailwindCSS / Tremor"
            projectUrl="/dashtremor"
          />
          <ProjectItem
            title="Cloud Landing Page"
            backgroundImg={cloudImg}
            technology="ReactJS / TailwindCSS"
            projectUrl="/cloud"
          />
          <ProjectItem
            title="Best Eats Landing Page"
            backgroundImg={besteatsImg}
            technology="ReactJS / TailwindCSS"
            projectUrl="/besteats"
          />
          <ProjectItem
            title="Defi Tailwind Landing Page"
            backgroundImg={defitwImg}
            technology="ReactJS / TailwindCSS"
            projectUrl="/defitw"
          />
          <ProjectItem
            title="Beaches Landing Page"
            backgroundImg={beachesImg}
            technology="ReactJS / TailwindCSS"
            projectUrl="/beaches"
          />
          <ProjectItem
            title="Experiences Landing Page"
            backgroundImg={experiencesImg}
            technology="ReactJS / TailwindCSS"
            projectUrl="/experiences"
          />
          <ProjectItem
            title="Weekaway Landing Page"
            backgroundImg={weekawayImg}
            technology="ReactJS / TailwindCSS"
            projectUrl="/weekaway"
          />
          <ProjectItem
            title="Data Finance Landing Page"
            backgroundImg={datafinanceImg}
            technology="ReactJS / TailwindCSS"
            projectUrl="/datafinance"
          />
          <ProjectItem
            title="Real Estate Landing Page"
            backgroundImg={realestateImg}
            technology="ReactJS"
            projectUrl="/realestate"
          />
          <ProjectItem
            title="Driver Landing Page"
            backgroundImg={driverImg}
            technology="ReactJS"
            projectUrl="/driver"
          />
          <ProjectItem
            title="Drive Landing Page"
            backgroundImg={driveImg}
            technology="ReactJS"
            projectUrl="/drive"
          />
          <ProjectItem
            title="Financial Advisor Landing Page"
            backgroundImg={financialImg}
            technology="ReactJS"
            projectUrl="/financial"
          />
          <ProjectItem
            title="AirTravel App Landing Page"
            backgroundImg={airtravelImg}
            technology="HTML / CSS / JavaScript"
            projectUrl="/airtravel"
          />
        </div> */}
        {/* <h2 className="py-4 mt-10">Exercises</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="CSS Animations"
            backgroundImg={animationsImg}
            technology="HTML / CSS"
            projectUrl="/animations"
          />
          <ProjectItem
            title="CSS Shapes"
            backgroundImg={shapesImg}
            technology="HTML / CSS"
            projectUrl="/shapes"
          />
        </div> */}
        {/* <h2 className="py-4 mt-10">Authentication Methods</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Firebase Google Authentication"
            backgroundImg={firebasegoogleImg}
            technology="ReactJS / Firebase / API"
            projectUrl="/firebasegoogle"
          />
          <ProjectItem
            title="Firebase Email Authentication"
            backgroundImg={firebaseemailImg}
            technology="ReactJS / Firebase / API"
            projectUrl="/firebaseemail"
          />
          <ProjectItem
            title="Github Authentication"
            backgroundImg={githubauthImg}
            technology="ReactJS / NextJS / API"
            projectUrl="/githubauth"
          />
          <ProjectItem
            title="Google Authentication"
            backgroundImg={googleauthImg}
            technology="ReactJS / NextJS / API"
            projectUrl="/googleauth"
          />
        </div> */}
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
