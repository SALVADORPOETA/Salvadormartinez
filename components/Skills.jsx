import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import TailwindCSS from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github.png';
import Python from '../public/assets/skills/python.png';
import NextJS from '../public/assets/skills/nextjs.png';
import Linux from '../public/assets/skills/linux.png';
import Bootstrap from '../public/assets/skills/bootstrap.png';
import Git from '../public/assets/skills/git.png';
import Ubuntu from '../public/assets/skills/ubuntu.png';
import VSCode from '../public/assets/skills/vscode.png';
import Api from '../public/assets/skills/api.png';
import ChatGPT from '../public/assets/skills/chatgpt.png';
import NodeJS from '../public/assets/skills/node.png';
import Firebase from '../public/assets/skills/firebase.png';
import Npm from '../public/assets/skills/npm.png';
import Yarn from '../public/assets/skills/yarn.png';
import RapidAPI from '../public/assets/skills/rapidapi.png';
import Axios from '../public/assets/skills/axios.png';
import SEO from '../public/assets/skills/seo.png';
import PWA from '../public/assets/skills/pwa.png';
import MaterialUI from '../public/assets/skills/materialui.png';


const Skills = () => {
  return (
    <div id='skills' className='w-full p-2' >
        <div className='max-w-[1240px] mx-auto flex-col justify-center h-full' >
            <p className='text-xl tracking-widest uppercase text-[#5651e5] ml-10 mt-20' >Skills</p>
            <h2 className='py-4 ml-10' >Primary Skills</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8' >
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={Html}
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={Css} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={Javascript} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={Python} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={ReactImg} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>ReactJS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={NextJS} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NextJS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={Bootstrap} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={TailwindCSS} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>TailwindCSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={Git} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Git</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={Github} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={Linux} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Linux</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={Ubuntu} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Ubuntu</h3>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='py-4 ml-10 mt-10' >Secondary Skills</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8' >
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={VSCode} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>VSCode</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={NodeJS} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NodeJS</h3>
                        </div>
                    </div>
                </div>    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={Npm} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Npm</h3>
                        </div>
                    </div>
                </div>    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={Yarn} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Yarn</h3>
                        </div>
                    </div>
                </div>    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={Api} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>APIs</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={Firebase} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={Axios} 
                                width='32' 
                                height='32' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Axios</h3>
                        </div>
                    </div>
                </div>    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={RapidAPI} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>RapidAPI</h3>
                        </div>
                    </div>
                </div>    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={ChatGPT} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>ChatGPT</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={MaterialUI} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MaterialUI</h3>
                        </div>
                    </div>
                </div>    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={SEO} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>SEO</h3>
                        </div>
                    </div>
                </div>    
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' >
                    <div className='grid grid-cols-2 gap-4 justify-center items-center' >
                        <div className='m-auto' >
                            <Image 
                                src={PWA} 
                                width='64' 
                                height='64' 
                                alt='/' 
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>PWAs</h3>
                        </div>
                    </div>
                </div>    
            </div>
            
        </div>
    </div>
  )
}

export default Skills