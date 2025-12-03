import Image from 'next/image'
import brainwaveImg from '../public/assets/projects/brainwave.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const brainwave = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={brainwaveImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Brainwave</h2>
          <h3>ViteJS / ReactJS / TailwindCSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            This fully responsive frontend project is a modern, UI/UX-optimized
            landing page for an AI application, developed using ReactJS with
            ViteJS and styled using TailwindCSS, based on a tutorial by
            JavaScript Mastery. The application features advanced visual
            interactions, including an interactive hero section where shapes
            react to the user's cursor and a subtle, smooth-scrolling Parallax
            effect. The design incorporates a dynamic Navbar with an animated
            hamburger menu for mobile devices, and leverages key components like
            service cards with gradient borders and a structured Bento Box
            layout to effectively present application features.
          </p>
          <p className="mt-2">
            The project serves as a comprehensive demonstration of skills in
            building high-quality, high-performance interfaces. The complete
            structure addresses essential sections such as a pricing table and
            an application roadmap, utilizing a highly stylized aesthetic with
            grid lines and geometric shapes for a modern finish. This
            implementation ensures a 100% mobile-responsive design and a
            professional polish essential for showcasing a modern technological
            product.
          </p>

          <a href="https://brainwave-sm.vercel.app" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/SALVADORPOETA/brainwave-sm"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default brainwave
