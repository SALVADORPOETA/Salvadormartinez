import Image from 'next/image'
import storeitImg from '../public/assets/projects/storeit.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const storeit = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={storeitImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">StoreIt</h2>
          <h3>NextJS / TypeScript / Appwrite</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            This cloud storage management application, inspired by platforms
            like Google Drive, Dropbox, and OneDrive, was developed following a
            tutorial by the YouTube channel JavaScript Mastery. The app features
            secure passwordless OTP authentication, a responsive and intuitive
            dashboard for tracking storage usage and recent activity, and robust
            file management capabilities including multi-file uploads, renaming,
            previews, downloads, deletions, and sharing. It also supports global
            search, filtering, detailed file views, and role-based access
            control to manage user permissions effectively across devices.
          </p>
          <p className="mt-2">
            This project showcases end-to-end fullstack development skills,
            covering backend architecture, authentication flows, database
            design, file handling, and modern UI principles. Performance
            optimization and responsive design were key focuses, ensuring a
            seamless experience across all screen sizes. Technologies used
            include Next.js, TypeScript, TailwindCSS, ShadCN/UI, Chart.js, and
            Appwrite.
          </p>
          <a href="https://store-it-sm.vercel.app/" target="_blank">
            <button className="px-4 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/SALVADORPOETA/StoreIt-sm" target="_blank">
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
                ChartJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Appwrite
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default storeit
