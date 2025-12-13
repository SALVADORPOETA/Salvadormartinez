import Image from 'next/image'
import pythonImg from '../public/assets/projects/python.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const whiteboard = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={pythonImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">White Board App</h2>
          <h3>Python / Tkinter</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            This project is a simple whiteboard drawing application built with
            Python and Tkinter, designed to allow users to draw freely on a
            canvas, select colors, adjust brush size, and clear the board. Its
            primary objective is to demonstrate fundamental Python skills, basic
            GUI development, and event-driven programming through a functional
            desktop application.
          </p>
          <p className="mt-2">
            Although my primary stack is MERN (MongoDB, Express, React,
            Node.js), this project showcases my ability to work with Python in
            practical scenarios. It reflects my capacity to quickly adapt to new
            technologies, build usable applications outside my main stack, and
            strengthen core programming concepts. I am fully open to deepening
            my Python expertise if required by a role or project.
          </p>
          <a
            href="https://github.com/SALVADORPOETA/White-board-sm"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
          <Link href="/#projects">
            <p className="underline cursor-pointer mt-20">Back</p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2 md:p-4 md:max-h-fit">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tkinter
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default whiteboard
