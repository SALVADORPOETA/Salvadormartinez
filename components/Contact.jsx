import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
      }
    }).catch(error => {
      console.error(error);
    });
  };

    return (
    <div id='contact' className='w-full lg:h-screen' >
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full' >
            <p className='text-xl tracking-widest uppercase text-[#5651e5] pt-8' >Contact</p>
            <h2 className='py-4' >Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8' >
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-fit h-full shadow-xl shadow-gray-400 rounded-xl p-4' >
                    <div className='lg:p-4 h-full '>
                        <div>
                            <Image
                                className='rounded-xl hover:scale-105 ease-in duration-300'
                                src={ContactImg}
                                alt='/'
                                />                        
                        </div>
                        <div>
                            <h2 className='py-2' >Salvador Martínez</h2>
                            <p>Front-End Developer</p>
                            <p className='py-4' >I am available for freelance or full-time positions. Contact me and let's talk.</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8' >Connect With Me</p>
                            <div className='flex items-center justify-center py-4 mt-5'>
                                <a aria-label='Go to my Linked In page' href='https://www.linkedin.com/in/salvador-mart%C3%ADnez-sm/' target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mr-4'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a aria-label='Go to my Github page' href='https://github.com/SALVADORPOETA' target='_blank' >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' >
                                        <FaGithub />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            
                {/* right */}
                 <div className='col-span-3 h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 ' >
                    <div className='p-4'>
                        <form
                            id='form1'
                            action='https://getform.io/f/70877771-e309-418b-8fb8-d56d4a42203e' 
                            method="POST"
                            encType="multipart/form-data"
                            onSubmit={handleSubmit}
                        >                        
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2' >
                                <div className='flex flex-col' >
                                    <label for='name' className='uppercase text-sm py-2' >Name</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type="text" 
                                        name='name'
                                        id='name'
                                    />
                                </div>
                                <div className='flex flex-col' >
                                    <label for='phone' className='uppercase text-sm py-2' >Phone Number</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type="text"
                                        name='phone'
                                        id='phone' 
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col py-2' >
                                <label for='email' className='uppercase text-sm py-2' >Email</label>
                                <input 
                                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                                    type="email" 
                                    name='email'
                                    id='email'
                                />
                            </div>
                            <div className='flex flex-col py-2' >
                                <label for='subject' className='uppercase text-sm py-2' >Subject</label>
                                <input 
                                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                                    type="text"
                                    name='subject' 
                                    id='subject'
                                />
                            </div>
                            <div className='flex flex-col py-2' >
                                <label for='message' className='uppercase text-sm py-2' >Message</label>
                                <textarea 
                                    className='border-2 rounded-lg p-3 border-gray-300' 
                                    rows='10'
                                    name='message' 
                                    id='message'
                                />
                            </div>
                            <div>
                                <button 
                                    className='w-full flex-auto p-4 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white' 
                                    type='submit'
                                    >Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12' >
                <Link href='/' >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300' >
                        <HiOutlineChevronDoubleUp className='m-auto text-[#5651e5]' size={30} />  
                    </div>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Contact
