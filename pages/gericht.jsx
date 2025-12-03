import Image from 'next/image'
import gerichtImg from '../public/assets/projects/gericht.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const gericht = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={gerichtImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Gericht</h2>
          <h3>ReactJS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            This fully responsive frontend website, built with ReactJS and
            styled to demonstrate advanced CSS techniques, functions as a
            high-end restaurant landing page. Developed following a tutorial by
            JavaScript Mastery and deployed on Vercel, the project features a
            dynamic structure that includes a collapsing navigation bar for
            mobile devices, a custom "About Us" section with contextual
            background elements, and a dedicated menu section for today’s
            specials, wine, beer, and cocktails. The design incorporates unique
            visual elements such as a full-screen video background to showcase
            the establishment's ambiance and a section detailing chef's
            commentary and industry awards.
          </p>
          <p className="mt-2">
            The site is engineered for a professional presentation, featuring a
            dedicated, interactive photo gallery linked to the restaurant's
            social media, and essential business sections like a "Find Us" page
            and a custom footer for newsletter sign-ups and working hours. The
            entire application is 100% mobile responsive, ensuring a consistent
            and high-quality user experience across all devices, successfully
            validating skills in UI/UX replication and advanced styling within a
            React environment.
          </p>

          <a href="https://gericht-restaurant-sm.vercel.app" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/SALVADORPOETA/gericht-restaurant-sm"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
          <Link href="/#projects">
            <p className="underline cursor-pointer mt-20">Back</p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2 md:p-4 md:max-h-fit">
          <div className="p-2 pb-8">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ReactJS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default gericht
