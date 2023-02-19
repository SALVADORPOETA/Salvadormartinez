import Image from 'next/image';
import React from 'react';
import horizontalImg from '../public/assets/projects/horizontal.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const horizontal = () => {
  return (
    <div className='w-full' >
      <div className='w-screen h-[30vh] lg:h-[40vh] relative' >
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={horizontalImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2' >
          <h2 className='py-2' >Horizontal Scroll</h2>
          <h3>ReactJS / TailwindCSS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8' >
        <div className='col-span-4' >
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a horizontal scroll built in ReactJS. The
            styles were made with TailwindCSS and the code was written in 
            JavaScript. I added a video background, a clock and pop-up windows.
            The project was deployed on Vercel.
            It is responsive for mobile and tablet.
          </p>
          <a href='https://horizontal-scroll-sm.vercel.app/' target='_blank' ><button className='px-8 py-2 mt-4 mr-8' >Demo</button></a>
          <a href='https://github.com/SALVADORPOETA/Horizontal-scroll-sm' target='_blank' ><button className='px-8 py-2 mt-4' >Code</button></a>
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
                <RiRadioButtonFill className='pr-1' />JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center' >
                <RiRadioButtonFill className='pr-1' />ReactJS
              </p>
              <p className='text-gray-600 py-2 flex items-center' >
                <RiRadioButtonFill className='pr-1' />TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default horizontal