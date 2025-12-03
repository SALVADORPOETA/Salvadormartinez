import Image from 'next/image'
import appleImg from '../public/assets/projects/apple.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const apple = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={appleImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Apple Web</h2>
          <h3>ThreeJS / GSAP / ViteJS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            This high-fidelity frontend project is a technical reproduction of
            the Apple iPhone 15 Pro website, developed following a tutorial by
            the YouTube channel JavaScript Mastery. Built using ReactJS and
            ViteJS, and deployed on Vercel, it showcases advanced web
            development capabilities focused on visual fidelity and complex
            interactions driven by animation and 3D graphics. The implementation
            utilizes GSAP (GreenSock) for sophisticated custom animations,
            including scroll triggers, staggers, and detailed timeline
            management. Furthermore, the project integrates ThreeJS to render
            and animate interactive 3D models with dynamic lighting and
            viewports. The interface features a custom video slider with
            progress tracking and is styled using TailwindCSS to ensure complete
            responsiveness and optimal performance across all devices.
          </p>

          <a href="https://apple-web-sm.vercel.app" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/SALVADORPOETA/apple-web-sm"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
          <Link href="/#projects">
            <p className="underline cursor-pointer mt-20">Back</p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2 md:p-4 md:max-h-fit">
          <div className="p-2 pb-8">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TailwindCSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ViteJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                GSAP
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ThreeJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Sentry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default apple
