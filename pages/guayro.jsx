import Image from 'next/image'
import guayroImg from '../public/assets/general/guayro.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const guayro = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={guayroImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Guayro</h2>
          <h3>Mar 2018 - Abr 2022</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Experience</p>
          <h2>Overview</h2>
          <p className="mt-2">
            I worked as a Sales and Marketing Specialist for Guayro, a
            family-owned grocery store based in Veracruz, Mexico. My
            responsibilities included:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-5 pt-2">
            <li>
              Creating engaging content for the store’s Facebook page to
              increase brand awareness and customer engagement.
            </li>
            <li>
              Designing and managing targeted Facebook ad campaigns to drive
              foot traffic and sales.
            </li>
            <li>
              Developing and executing marketing strategies tailored to the
              local market.
            </li>
            <li>
              Preparing financial statements and overseeing reporting to support
              business decision-making.
            </li>
            <li>
              Leading and managing a small on-site team of 3 people to ensure
              efficient store operations.
            </li>
          </ul>
          <a href="https://www.facebook.com/GuayroMercadito" target="_blank">
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
                Microsoft Excel
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Facebook Marketing
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Facebook Ads
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Team Management
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Financial Reporting
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default guayro
