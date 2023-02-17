import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center' >
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center' >
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600' >LET'S BUILD SOMETHING TOGETHER</p>
                    <h1 className='py-4 text-gray-700' >
                        Hi I'm <span className='text-[#5651e5]'>Salvador</span>
                    </h1>
                    <h1 className='py-2 text-gray-700' >
                        A Front-End Web Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I’m focused on building responsive front-end web applications.
                    </p>
                    <div className='flex items-center justify-center max-w-[330px] m-auto py-4' >
                        <a href='https://www.linkedin.com/in/salvador-mart%C3%ADnez-sm/' target='_blank' >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mr-4' >
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href='https://github.com/SALVADORPOETA' target='_blank' >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' >
                                <FaGithub />
                            </div>
                        </a>
                        {/*<a href='https://www.google.com' target='_blank' >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' >
                                <AiOutlineMail />
                            </div>
                        </a>
                        <a href='https://www.google.com' target='_blank' >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' >
                                <BsFillPersonLinesFill />
                            </div>
                        </a>*/}
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Main