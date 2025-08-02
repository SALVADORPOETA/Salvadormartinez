import Image from 'next/image'
import carepulseImg from '../public/assets/projects/carepulse.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const carepulse = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={carepulseImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">CarePulse</h2>
          <h3>NextJS / TypeScript / Appwrite</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            This healthcare management system was developed following a tutorial
            by the YouTube channel JavaScript Mastery. It features real-time SMS
            notifications to streamline the checkup process, along with secure
            authentication and patient registration workflows. Users can fill
            out personal details, medical history, and identification, then
            schedule appointments with their preferred doctor through a smooth,
            guided booking experience. The system includes confirmation screens,
            access permission models, and a comprehensive admin panel to manage,
            reschedule, or cancel appointments—all with automated SMS alerts.
          </p>
          <p className="mt-2">
            The project leverages Next.js with server-side rendering, nested
            layouts, server actions, and revalidation for optimal performance
            and scalability. It includes advanced and reusable form components
            such as date pickers, international phone inputs, and OTP
            verification, built using TypeScript, React Hook Form, and Zod. The
            UI is fully responsive and built with TailwindCSS and ShadCN/UI,
            while backend functionality is powered by Appwrite, including file
            storage and Twilio-based SMS notifications. Monitoring and error
            tracking are handled via Sentry, making this a full-featured and
            production-ready solution.
          </p>
          <a href="https://carepulse-sm.vercel.app/" target="_blank">
            <button className="px-4 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/SALVADORPOETA/Carepulse-sm"
            target="_blank"
          >
            <button className="px-4 py-2 mt-4 mr-8">Code</button>
          </a>
          <Link href="/#projects">
            <p className="underline cursor-pointer mt-20">Back</p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2 md:p-4">
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
                Appwrite
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Twilio
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

export default carepulse
