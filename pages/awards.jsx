import Image from 'next/image'
import awardsImg from '../public/assets/projects/awards.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const awards = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={awardsImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Awards Web</h2>
          <h3>GSAP / ViteJS / ReactJS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            This project is built with Vite.js, React.js, TailwindCSS, and GSAP,
            inspired by the award-winning "Site of the Month" Zentry website.
            Created while following a tutorial from JavaScript Mastery, it
            features a floating navbar with animated music controls, allowing
            users to start music playback with a click. The hero section
            showcases a full-screen video background with smooth transitions
            that switch to the next video. The About section includes animated
            text and image transitions triggered by scrolling, creating a
            visually engaging experience. Below that, a trendy Bento grid design
            with a card tilt effect reacts dynamically to cursor movement,
            adding interactivity.
          </p>
          <p className="mt-2">
            Another section highlights animated text and images in unique
            shapes, complete with stylish hover effects. The project concludes
            with a compelling call-to-action section that features images in
            various shapes, followed by a minimalist footer. This project serves
            as both a practice piece and a creative showcase of modern web
            design techniques, blending cutting-edge frameworks with interactive
            animations.
          </p>

          <a href="https://awards-sm.vercel.app" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/SALVADORPOETA/awards-sm" target="_blank">
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
          <Link href="/#projects">
            <p className="underline cursor-pointer mt-20">Back</p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default awards
