import Image from 'next/image'
import React from 'react'
import imaginifyImg from '../public/assets/projects/imaginify.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const imaginify = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={imaginifyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Imaginify</h2>
          <h3>TypeScript / Clerk / MongoDB</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            This project is based on a YouTube tutorial by JavaScript Mastery.
            It demonstrates a Software as a Service (SaaS) platform with
            AI-powered features, payment integration, and a credit system. The
            application includes functionalities such as AI generative fill,
            image restoration, object recoloring, object removal, and background
            removal. Users can create, edit, save, delete, and download images.
            It also features a login system, a home page, a profile page, a
            details page, and an update page.
          </p>
          <p className="mt-2">
            For the frontend, I used Next.js and TypeScript, styled with
            TailwindCSS. The backend is powered by MongoDB, with Clerk handling
            authentication, Stripe for payment processing, and Cloudinary API
            for image transformations. The project is deployed on Vercel.
          </p>

          <a href="https://imaginify-sm.vercel.app" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/SALVADORPOETA/Imaginify-sm"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
          <Link href="/#projects">
            <p className="underline cursor-pointer mt-20">Back</p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
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
                ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Clerk
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Cloudinary API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default imaginify
