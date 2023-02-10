import Image from 'next/image';
import React from 'react';
import AboutImg from '../public/assets/aztec5.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16' >
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8' >
            <div className='col-span-2 ml-10' >
                <p className='uppercase text-xl tracking-widest text-[#5651e5]' >About</p>
                <h2 className='py-4' >Who I Am</h2>
                <p className='py-2 text-gray-600' >I am relentless and resourceful.</p>
                <p className='py-2 text-gray-600'>
                    I specialize in building front-end UI websites. 
                    I’m passionate about learning new technologies and understand there 
                    is more than one way to accomplish a task. Though I am most 
                    proficient in building front-end applications using HTML, CSS, 
                    Javascript, and React, I can also build desktop applications with 
                    Python and Tkinter as you can see in my Github repositories.
                </p>
                <p className='py-2 text-gray-600'>
                    I always use good practices and write the cleanest code possible.
                    I believe in companionship and team work and I am willing to help my 
                    coworkers with anything they need if I can do it. I am autodidact 
                    and self disciplined so I need very little supervision.
                </p>
                <a href='#skills' ><p className='py-2 text-gray-600 underline cursor-pointer'>Check out my skills and some of my latest projects.</p></a>
            </div>
            <div className='w-fit h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300' >
                <Image src={AboutImg} className='rounded-xl' width={250} alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About