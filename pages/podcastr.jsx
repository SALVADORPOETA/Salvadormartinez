import Image from 'next/image'
import podcastrImg from '../public/assets/projects/podcastr.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const podcastr = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={podcastrImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Podcastr</h2>
          <h3>NextJS / Open AI / Clerk / Convex</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            This platform is a cutting-edge podcast service that eliminates the
            need for a real human voice by leveraging AI-powered features. It
            was developed following a tutorial by the YouTube channel JavaScript
            Mastery. It offers advanced functionalities such as
            text-to-multiple-voices conversion and AI-generated images to host
            and enhance podcasts. The application includes secure
            authentication, a modern homepage highlighting trending podcasts,
            and a sticky podcast player for continuous listening. Users can
            easily discover podcasts through a dedicated search page, create new
            podcasts with integrated text-to-audio conversion and image
            generation previews, and manage their content via a personalized
            profile page displaying all their created podcasts.
          </p>
          <p className="mt-2">
            The technology stack includes Next.js with client-side rendering,
            dynamic and nested routing, and advanced, reusable form management
            implemented using TypeScript, React Hook Form, shadCN, and
            TailwindCSS to ensure a modern, mobile-responsive user interface.
            Authentication is managed through Clerk, while OpenAI APIs provide
            the podcast audio generation and custom thumbnails. Convex is
            utilized as the backend, delivering a seamless and scalable
            development experience.
          </p>
          <a href="https://podcastr-sm.vercel.app/" target="_blank">
            <button className="px-4 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/SALVADORPOETA/Podcastr-sm"
            target="_blank"
          >
            <button className="px-4 py-2 mt-4 mr-8">Code</button>
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
                TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ShadCN
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Clerk
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Convex
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                OpenAI API
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default podcastr
