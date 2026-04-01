import Image from 'next/image'
import poderjudicialImg from '../public/assets/projects/pj-scraping.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
import Head from 'next/head'

const poderjudicial = () => {
  return (
    <>
      <Head>
        <title>PJF Data & Messaging Suite | Full-Stack Developer</title>
        <meta
          name="description"
          content="Detailed overview of PJF Data & Messaging Suite, a full-stack podcast project built with NextJS, Open AI, Clerk and Convex."
        />
      </Head>
      <main className="w-full overflow-hidden pb-10">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={poderjudicialImg}
            alt="PJF Data & Messaging Suit Project View"
            priority
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Poder Judicial</h2>
            <h3>ReactJS / TailwindCSS / NodeJS</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p className="mt-2">
              PJF Data & Messaging Suite is an advanced automation and data
              management platform specifically engineered for the Mexican
              Federal Judiciary (Poder Judicial de la Federación) ecosystem.
              Built from the ground up using React 18 and TailwindCSS, this data
              engineering tool enables deep scraping of judicial profiles,
              database processing with gender-intelligent algorithms, and the
              management of highly personalized messaging campaigns. Its robust
              architecture facilitates a seamless transition from technical data
              collection to the execution of omnichannel communication
              strategies via Email and WhatsApp.
            </p>
            <p className="mt-2">
              The application features a fully interactive and tactile interface
              designed to prioritize operational efficiency in high-performance
              professional environments. Through a dynamic tagging system and
              real-time variable detection, users can edit templates with
              surgical precision, validate data via intelligent dropzones, and
              export JSON or Excel reports without loss of integrity. With a
              developer-inspired dark mode design and independently developed
              processing logic, this project stands as an original and
              sophisticated solution for optimizing critical workflows within
              the legal and judicial sectors.
            </p>
            <a
              href="https://poder-judicial-frontend-sm.vercel.app/"
              target="_blank"
            >
              <button className="px-4 py-2 mt-4 mr-8">Demo</button>
            </a>
            <a
              href="https://github.com/SALVADORPOETA/Poder-judicial-frontend-sm/"
              target="_blank"
            >
              <button className="px-4 py-2 mt-4 mr-8">Code</button>
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
                  TailwindCSS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  JavaScript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  ReactJS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  NodeJS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  ExpressJS
                </p>
                {/* <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Clerk
                </p> */}
                {/* <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  Convex
                </p> */}
                {/* <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  OpenAI API
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default poderjudicial
