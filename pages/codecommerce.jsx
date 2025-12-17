import Image from 'next/image'
import codecommerceImg from '../public/assets/general/codecommerce.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const codecommerce = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={codecommerceImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Code Commerce</h2>
          <h3>Jan 2023 - Sep 2024</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Education</p>
          <h2>Overview</h2>
          <p className="mt-2">
            Code Commerce is a YouTube channel by a self-taught developer
            focused on teaching web development fundamentals to help others
            learn programming. Its goal is for beginners to build real projects
            using current technologies like React, Firebase, Tailwind CSS, and
            Authentication, providing a practical and accessible approach to
            transforming lives through code.
          </p>
          <p className="mt-2">
            I followed several practical tutorials from the Code Commerce
            channel, developing modern web applications using React, Firebase,
            and Tailwind CSS. These videos helped me improve my advanced
            JavaScript skills, user authentication with Google, real-time data
            management, and responsive design.
          </p>
          <a href="https://www.youtube.com/@codecommerce" target="_blank">
            <button className="px-4 py-2 mt-4 mr-8">Visit the Page</button>
          </a>
          <Link href="/#education">
            <p className="underline cursor-pointer mt-20">Back</p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2 md:p-4 md:max-h-fit">
          <div className="p-2 pb-8">
            <p className="text-center font-bold pb-2">Skills</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TailwindCSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NodeJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default codecommerce
