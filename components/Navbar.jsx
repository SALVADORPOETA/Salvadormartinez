import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useRouter } from 'next/router';
import NavLogo from '../public/assets/navLogo.png'

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter()

  useEffect(()=>{
    if (
      router.asPath === '/animations' ||
      router.asPath === '/bmi' ||
      router.asPath === '/python' ||
      router.asPath === '/shapes' ||
      router.asPath === '/elements' ||
      router.asPath === '/filter' ||
      router.asPath === '/stopwatch' ||
      router.asPath === '/horizontal' ||
      router.asPath === '/parallax' ||
      router.asPath === '/dropdown' ||
      router.asPath === '/darktheme' ||
      router.asPath === '/navbar' ||
      router.asPath === '/githubauth' ||
      router.asPath === '/googleauth' ||
      router.asPath === '/amazon' ||
      router.asPath === '/gif' ||
      router.asPath === '/firebasegoogle' ||
      router.asPath === '/login' ||
      router.asPath === '/powerlist' ||
      router.asPath === '/weather' ||
      router.asPath === '/calculator' ||
      router.asPath === '/quotes' ||
      router.asPath === '/momentum' ||
      router.asPath === '/food' ||
      router.asPath === '/firebaseemail' ||
      router.asPath === '/weathernext' ||
      router.asPath === '/todo' ||
      router.asPath === '/materialui' ||
      router.asPath === '/pwa' ||
      router.asPath === '/portfolio' ||
      router.asPath === '/airtravel' ||
      router.asPath === '/dashboard' ||
      router.asPath === '/movieland'
      ) 
      {
        setNavBg('transparent')
        setLinkColor('#ecf0f3')
      } else {
        setNavBg('#ecf0f3')
        setLinkColor('#1f2937')
      }
  },[router]);


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >=90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow);
  },[]);

  return (
    <div
      style={{backgroundColor: `${navBg}`}} 
      className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'} >
      <div 
        className='flex justify-between items-center w-full h-full px-2 2xl:px-16' >
        <Link href='/' >
        <Image 
          src={NavLogo} 
          alt="/" 
          width="75" 
          height="50" 
        />
        </Link>
        <div>
          <ul style={{color: `${linkColor}`}} className='hidden md:flex' >
            <li>  
              <Link href='/'>
                <ul>
                  <li className='ml-10 text-sm uppercase hover:border-b' >Home</li>
                </ul>
              </Link>
            </li>
            <li>
              <Link href='/#about'>
                <ul>
                  <li className='ml-10 text-sm uppercase hover:border-b' >About</li>
                </ul>
              </Link>
            </li>
            <li>
              <Link href='/#skills'>
                <ul>
                  <li className='ml-10 text-sm uppercase hover:border-b' >Skills</li>
                </ul>
              </Link>
            </li>
            <li>
              <Link href='/#projects'>
                <ul>
                  <li className='ml-10 text-sm uppercase hover:border-b' >Projects</li>
                </ul>
              </Link>
            </li>
            <li>
              <Link href='/#contact'>
                <ul>
                  <li className='ml-10 text-sm uppercase hover:border-b' >Contact</li>
                </ul>
              </Link>
            </li>
          </ul>
          <div 
            onClick={handleNav} 
            className='md:hidden' >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div 
        className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''} 
      >
        <div 
          className={
            nav 
              ? 'fixed left-0 top-0 w[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'} >
          <div>
            <div className='flex w-full items-center justify-between' >
              <Link href='/' >
                <Image 
                  src={NavLogo} 
                  width='37' 
                  height='35' 
                  alt='/' 
                  onClick={()=> setNav(false)}
                />        
              </Link>
              <div 
                onClick={handleNav} 
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer' >
                <AiOutlineClose />                
              </div>
            </div>
            <div className='border-b border-gray-300 my-4' >
              <p className='w-[85%] md:[90%] py-4' >Let's build something legendary together</p>
            </div>
          </div>
          <div className='py-4 flex-col' >
            <ul className='uppercase' >
              <li>
                <Link href='/' >
                  <ul>
                    <li onClick={()=> setNav(false)} className='py-4 text-sm' >Home</li>
                  </ul>
                </Link>
              </li>
              <li>
                <Link href='/#about' >
                  <ul>
                    <li onClick={()=> setNav(false)} className='py-4 text-sm' >About</li>
                  </ul>
                </Link>
              </li>  
              <li>
                <Link href='/#skills' >
                  <ul>
                    <li onClick={()=> setNav(false)} className='py-4 text-sm' >Skills</li>
                  </ul>
                </Link>
              </li>
              <li>
                <Link href='/#projects' >
                  <ul>
                    <li onClick={()=> setNav(false)} className='py-4 text-sm' >Projects</li>
                  </ul>
                </Link>
              </li>
              <li>
                <Link href='/#contact' >
                  <ul>
                    <li onClick={()=> setNav(false)} className='py-4 text-sm' >Contact</li>
                  </ul>
                </Link>
              </li>
            </ul>
            <div className='pt-10' >
              <p className='uppercase tracking-widest text-[#5651e5]' >Let's connect</p>
                <div className='flex items-center justify-center py-4 mt-5 w-full sm:w-[80%]' >
                <a aria-label='Go to my Linked In page' href='https://www.linkedin.com/in/salvador-martinez-sm/' target='_blank'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 mr-4' >
                    <FaLinkedinIn />
                  </div>
                </a>
                <a aria-label='Go to my Linked In page' href='https://github.com/SALVADORPOETA' target='_blank' >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300' >
                    <FaGithub />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar