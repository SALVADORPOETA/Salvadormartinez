import Image from 'next/image'
import jsmImg from '../public/assets/general/jsm.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const jsm = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={jsmImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Code Wars</h2>
          <h3>May 2024 - Dec 2025</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Education</p>
          <h2>Overview</h2>
          <p className="mt-2">
            Codewars is a globally recognized platform for improving programming
            skills through algorithmic challenges (kata) ranked by difficulty.
            It emphasizes problem-solving, clean code, and mastery of language
            fundamentals, and is widely used by developers to strengthen logic,
            data structures, and algorithmic thinking in a competitive
            environment.
          </p>
          <p className="mt-2">
            I actively trained on Codewars and reached{' '}
            <strong>3 kyu in JavaScript</strong>, placing me in the{' '}
            <strong>top 0.6% of users globally</strong>, with over
            <strong>900 completed kata</strong>. This consistent practice
            significantly improved my problem-solving speed, code clarity, and
            ability to reason about edge cases and performance. The experience
            reinforced strong fundamentals in JavaScript and sharpened my
            analytical thinking, which I apply directly to real-world
            development and technical interviews.
          </p>
          <a
            href="https://www.codewars.com/users/SALVADORPOETA"
            target="_blank"
          >
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
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Problem Solving
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Coding Challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default jsm
