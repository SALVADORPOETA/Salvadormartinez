import Image from 'next/image'
import React from 'react'
import livedocsImg from '../public/assets/projects/livedocs.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const livedocs = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={livedocsImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Live Docs</h2>
          <h3>NextJS / Liveblocks / TypeScript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            This project is from a YouTube tutorial (JavaScript Mastery) about a
            Google Docs-like software that manages collaborators in real time,
            featuring an authentication flow, a full markdown editor, complete
            document management to create, edit, save, and delete documents,
            real-time nested comments with tagging, emojis, and complete CRUD
            functionalities for discussions, floating comments, live cursors
            showing collaborators' locations, instant notifications, flexible
            sharing options like inviting or revoking editors/viewers, and a
            fully responsive native-like design.
          </p>
          <p className="mt-2">
            I used NextJS with server-side rendering, nested layouts, server
            actions, and revalidation; TypeScript for type-safe code; Lexical, a
            powerful editor developed by Meta; ShadCN and TailwindCSS for the
            UI; Clerk for authentication; and Sentry for performance analysis.
            It's deployed on Vercel.
          </p>
          <a href="https://live-docs-sm.vercel.app/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/SALVADORPOETA/live-docs-sm"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
          <Link href="/#projects">
            <p className="underline cursor-pointer mt-20">Back</p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2 md:p-4">
          <div className="p-2">
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
                TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Lexical
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ShadCN
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Clerk
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Sentry
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Liveblocks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default livedocs
