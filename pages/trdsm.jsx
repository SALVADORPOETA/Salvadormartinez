import Image from 'next/image'
import trdsmImg from '../public/assets/general/trdsm.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const trdsm = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={trdsmImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Trajes Regionales de Segunda Mano</h2>
          <h3>Sep 2022 - Ago 2025</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Experience</p>
          <h2>Overview</h2>
          <p className="mt-2">
            As the owner and sole operator of this small business, I was
            responsible for end-to-end sales and marketing operations focused on
            selling second-hand traditional Mexican clothing. My main
            responsibilities included:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-5 pt-2">
            <li>Managed inventory by quantity and size</li>
            <li>Photographed and edited product images</li>
            <li>
              Published listings on Facebook Marketplace and Mercado Libre
            </li>
            <li>Provided prompt and friendly customer service</li>
            <li>Packed and delivered orders to the shipping center</li>
            <li>Tracked shipments and resolved delivery issues</li>
            <li>Handled in-person sales and managed financial records</li>
          </ul>
          <p className="mt-2">
            This experience strengthened my skills in sales, customer
            relationship management, online marketing, conflict resolution, and
            financial planning.
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=100066661120452"
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
                Facebook Marketing
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Project Planning
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Sales
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Microsoft Office
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Financial Analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default trdsm
