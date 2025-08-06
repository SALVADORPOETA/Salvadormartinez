import Image from 'next/image'
import uvImg from '../public/assets/general/uv.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const uv = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={uvImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Universidad Veracruzana</h2>
          <h3>Aug 2015 - Jul 2022</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Education</p>
          <h2>Overview</h2>
          <p className="mt-2">
            Universidad Veracruzana (UV) is one of the largest and most
            prestigious public universities in Mexico. Founded in 1944, it has a
            strong academic reputation in diverse fields including business,
            humanities, sciences, and the arts. With campuses across the state
            of Veracruz, UV is known for its commitment to academic excellence,
            social responsibility, and cultural engagement, serving a broad and
            diverse student population.
          </p>
          <p className="mt-2">
            I earned a Bachelor's degree in Business Administration from UV,
            building a strong foundation in organizational management, finance,
            marketing, and strategic planning. Throughout the program, I
            developed analytical and leadership skills through case studies,
            team-based projects, and research. This experience provided me with
            a broad understanding of business operations and decision-making in
            both public and private sectors.
          </p>
          <a href="https://www.uv.mx/" target="_blank">
            <button className="px-4 py-2 mt-4 mr-8">Visit the Page</button>
          </a>
          <Link href="/#projects">
            <p className="underline cursor-pointer mt-20">Back</p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2 md:p-4 md:max-h-fit">
          <div className="p-2 pb-8">
            <p className="text-center font-bold pb-2">Skills</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Communication
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Written Communication
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Project Management
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Economics
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                English
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default uv
