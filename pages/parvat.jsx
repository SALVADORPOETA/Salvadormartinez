import Image from 'next/image'
import parvatImg from '../public/assets/general/parvat.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const parvat = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={parvatImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Parvat Computer Technology</h2>
          <h3>Oct 2022 - Dec 2022</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Education</p>
          <h2>Overview</h2>
          <p className="mt-2">
            Parvat Computer Technology is a YouTube channel run by a self-taught
            developer offering free programming tutorials, especially focused on
            Python and GUI development with Tkinter. The content emphasizes
            practical, beginner-friendly examples that guide viewers in building
            real-world tools like calculators, weather apps, voice recognition
            systems, and text utilities. The channel provides a project-based
            learning approach to programming in a functional and educational
            way.
          </p>
          <p className="mt-2">
            I followed numerous hands-on tutorials from the YouTube channel
            Parvat Computer Technology, where I built Python projects with GUI
            using Tkinter. I developed applications like calculators, file
            transfer tools, weather apps, and advanced text utilities with
            features such as voice recognition, text-to-MP3 conversion, PDF text
            extraction, and more. These projects helped me strengthen my skills
            in GUI design, socket programming, API consumption, and libraries
            like Pillow, PyPDF2, and speech recognition.
          </p>
          <a
            href="https://www.youtube.com/@parvatcomputertechnology"
            target="_blank"
          >
            <button className="px-4 py-2 mt-4 mr-8">Visit the Page</button>
          </a>
          <Link href="/#projects">
            <p className="underline cursor-pointer mt-20">Back</p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2 md:p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Skills</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Python
              </p>
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
                Programming
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                API
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default parvat
