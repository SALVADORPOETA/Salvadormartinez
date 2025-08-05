import Image from 'next/image'
import platziImg from '../public/assets/general/platzi.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const platzi = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={platziImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Platzi</h2>
          <h3>Aug 2020 - Jun 2021</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Education</p>
          <h2>Overview</h2>
          <p className="mt-2">
            Platzi is a leading online education platform in Latin America,
            focused on technology, business, and personal development. With
            courses taught by industry professionals, Platzi emphasizes
            practical, project-based learning and real-world skills. Students
            learn at their own pace and gain up-to-date knowledge in
            programming, software engineering, productivity, and financial
            education.
          </p>
          <p className="mt-2">
            I completed foundational courses in software engineering and
            programming, acquiring strong problem-solving and logical thinking
            skills. Additionally, I developed financial literacy through courses
            in personal finance, budgeting, and productivity, enhancing both
            technical and professional competencies. I Committed to continuous
            learning and personal growth through project-based, self-paced
            education.
          </p>
          <a href="https://platzi.com/" target="_blank">
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
                Software Development
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
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Financial Education
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default platzi
