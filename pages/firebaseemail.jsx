import Image from 'next/image';
import React from 'react';
import firebaseemailImg from '../public/assets/projects/firebaseemail.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const firebaseemail = () => {
  return (
    <div className='w-full' >
      <div className='w-screen h-[30vh] lg:h-[40vh] relative' >
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={firebaseemailImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2' >
          <h2 className='py-2' >Firebase Email Authentication</h2>
          <h3>ReactJS / Firebase / API</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8' >
        <div className='col-span-4' >
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is an authentication page built with ReactJS and Firebase. 
            You can sign up and sign in with any email and password. 
            You can test it with a fake email and a fake password.
            The account page is protected. It is deployed on Vercel.
          </p>
          
          <a href='https://firebase-email-sm.vercel.app/' target='_blank' ><button className='px-8 py-2 mt-4 mr-8' >Demo</button></a>
          <a href='https://github.com/SALVADORPOETA/Firebase-email-sm' target='_blank' ><button className='px-8 py-2 mt-4' >Code</button></a>
          <Link href='/#projects' >
            <p className='underline cursor-pointer mt-20' >Back</p>
          </Link> 
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4' >
          <div className='p-2'>
            <p className='text-center font-bold pb-2' >Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center' >
                    <RiRadioButtonFill className='pr-1' />HTML
                </p>
                <p className='text-gray-600 py-2 flex items-center' >
                    <RiRadioButtonFill className='pr-1' />TailwindCSS
                </p>
                <p className='text-gray-600 py-2 flex items-center' >
                    <RiRadioButtonFill className='pr-1' />JavaScript
                </p>
                <p className='text-gray-600 py-2 flex items-center' >
                    <RiRadioButtonFill className='pr-1' />ReactJS
                </p>
                <p className='text-gray-600 py-2 flex items-center' >
                    <RiRadioButtonFill className='pr-1' />Firebase
                </p>
                <p className='text-gray-600 py-2 flex items-center' >
                    <RiRadioButtonFill className='pr-1' />API
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default firebaseemail