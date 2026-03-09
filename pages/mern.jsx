import Image from 'next/image'
import mernImg from '../public/assets/projects/mern.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const mern = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={mernImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">MERN Practice</h2>
          <h3>MongoDB / ExpressJS / ReactJS / NodeJS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            This is a full-stack MERN (MongoDB, Express, React, NodeJS) project
            designed to manage a dynamic task list with priority levels. I
            developed this application to practice data persistence and the
            complete flow of a RESTful API. On the backend, I used NodeJS and
            Express to build the endpoints, connecting to a MongoDB database via
            Mongoose to manage the item schema. For the frontend, I employed
            React with React Router for navigation and hooks like useRef to
            optimize DOM interaction. Both the backend and the frontend are
            deployed on Vercel, ensuring a stable connection through environment
            variables with dotenv.
          </p>
          <p className="mt-2">
            The application allows for full CRUD (Create, Read, Update, Delete)
            control, enabling users to manage tasks seamlessly. I implemented a
            prioritization logic that automatically organizes items on the
            screen, along with security validations to ensure MongoDB IDs are
            verified before processing updates. The interface is fully reactive;
            the form dynamically switches between "Create" and "Edit" modes
            based on the application state, and it includes a confirmation
            system to prevent accidental deletions. This project focuses on
            clean architecture and efficient client-server communication.
          </p>
          <a href="https://mern-frontend-sm.vercel.app/" target="_blank">
            <button className="px-4 py-2 mt-4 mr-8">Frontend</button>
          </a>
          <a href="https://mern-backend-sm.vercel.app/" target="_blank">
            <button className="px-4 py-2 mt-4 mr-8">Backend</button>
          </a>
          <a
            href="https://github.com/SALVADORPOETA/MERN-frontend-sm"
            target="_blank"
          >
            <button className="px-4 py-2 mt-4 mr-8">Frontend Code</button>
          </a>
          <a
            href="https://github.com/SALVADORPOETA/MERN-backend-sm"
            target="_blank"
          >
            <button className="px-4 py-2 mt-4">Backend Code</button>
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
                MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ExpressJS
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
                API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vite
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Postman
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default mern
