import Image from 'next/image'
import mayapanImg from '../public/assets/projects/mayapan.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const mayapan = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={mayapanImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Mayapan</h2>
          <h3>NextJS / Firebase / API</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            This is an original ReactJS project about the Maya culture. I had
            this idea because I like world cultures and history. I used NextJS
            and styled it with TailwindCSS. I connected it to an API made by
            myself with NodeJS and fetched the data of the sections "Home",
            "History" and "Cities" through Axios. I tested it with Postman. I
            used Firebase to save the user's access information. I deployed it
            on Vercel.
          </p>
          <p className="mt-2">
            This website is completely interactive, so you can click on any
            image and get to see a window with iformation about it. All the
            buttons have a function as well, like the ones in the "Cities"
            section where you can filter by language families. You can sign up
            using your Google account or with an email and password (since this
            is a personal project I don't require verification, so you can
            invent any email and password that you want), then you can sign in
            with your chosen method to access the protected route of your
            Account page.
          </p>
          <a href="https://mayapan-sm.vercel.app/" target="_blank">
            <button className="px-4 py-2 mt-4 mr-8">Frontend</button>
          </a>
          <a href="https://apis-repository-sm.vercel.app/" target="_blank">
            <button className="px-4 py-2 mt-4 mr-8">Backend</button>
          </a>
          <a href="https://github.com/SALVADORPOETA/Mayapan-sm" target="_blank">
            <button className="px-4 py-2 mt-4 mr-8">Frontend Code</button>
          </a>
          <a
            href="https://github.com/SALVADORPOETA/Apis-repository-sm"
            target="_blank"
          >
            <button className="px-4 py-2 mt-4">Backend Code</button>
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
                NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
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
                Postman
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default mayapan
