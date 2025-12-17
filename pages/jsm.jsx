import Image from 'next/image'
import jsmImg from '../public/assets/general/jsm.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const jsm = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={jsmImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">JavaScript Mastery</h2>
          <h3>Jan 2023 - Jul 2025</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Education</p>
          <h2>Overview</h2>
          <p className="mt-2">
            JavaScript Mastery is a widely recognized YouTube channel focused on
            modern web development. It offers in-depth, project-based tutorials
            that teach best practices and real-world implementations using
            cutting-edge tools and frameworks. The channel is known for its
            clear explanations, practical approach, and strong focus on
            full-stack technologies like React, Next.js, and Node.js, making it
            a valuable resource for developers at all levels.
          </p>
          <p className="mt-2">
            I followed several high-quality project-based tutorials from
            JavaScript Mastery to deepen my knowledge of full-stack web
            development. Through these courses, I built complete applications
            using modern technologies like React, Next.js, Node.js, and
            Appwrite. The hands-on approach helped me strengthen my skills in
            frontend and backend integration, state management, API handling,
            and user authentication.
          </p>
          <a href="https://www.youtube.com/@javascriptmastery" target="_blank">
            <button className="px-4 py-2 mt-4 mr-8">Visit the Page</button>
          </a>
          <Link href="/#education">
            <p className="underline cursor-pointer mt-20">Back</p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2 md:p-4 md:max-h-fit">
          <div className="p-2 pb-8">
            <p className="text-center font-bold pb-2">Skills</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Full-Stack Development
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Back-End Development
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Front-End Development
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextJS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default jsm
