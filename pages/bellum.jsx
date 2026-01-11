import Image from 'next/image'
import bellumImg from '../public/assets/general/bellum.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const bellum = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={bellumImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Bellum Politics</h2>
          <h3>Apr 2025 - Present</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Experience</p>
          <h2>Overview</h2>
          <p className="mt-2">
            Bellum Politics is an agency specialized in political strategy,
            electoral propaganda, and persuasive content production for
            political campaigns. The company focuses on designing winning
            campaigns through the “Bellum Method,” a comprehensive approach that
            combines public opinion research, voter segmentation, political ads,
            digital content, crisis management, and candidate training for
            interviews and debates. Its mission is to help candidates maximize
            their votes and improve their public positioning through a
            professional and highly effective propaganda machine.
          </p>
          <h3 className="mt-4">My Contributions at Bellum Politics</h3>
          <h4 className="mt-2">Technical Contributions (One-Person Team):</h4>
          <ul className="list-disc list-inside space-y-1 pl-5 pt-2">
            <li className="cursor-default">
              Independently designed and implemented all technical aspects of
              the project ScraperPJ as a one-person team, including data
              scraping, processing, messaging automation, and engagement
              tracking. Demonstrated full ownership of an end-to-end workflow
              from raw data collection to actionable insights.
            </li>
            <li className="cursor-default">
              Developed Node.js scripts to scrape judicial candidate information
              from Mexico’s INE “Conóceles” website
              (https://candidaturaspoderjudicial.ine.mx/), automatically
              expanding panels, handling pagination, removing duplicates, and
              organizing structured JSON datasets.
            </li>
            <li className="cursor-default">
              Built secondary scripts to parse individual candidate profiles,
              extracting key information (name, email, phone, gender) into
              categorized JSON files.
            </li>
            <li className="cursor-default">
              Created tools to convert JSON data into Excel and VCF formats,
              enabling efficient analysis and seamless import into mobile
              devices for large-scale messaging.
            </li>
            <li className="cursor-default">
              Implemented a personalized messaging system, generating
              candidate-specific strategic messages and HTML email templates,
              optimized by name complexity to improve targeting.
            </li>
            <li className="cursor-default">
              Built an automated email-sending system using Nodemailer, capable
              of dispatching hundreds of personalized emails daily. Integrated
              an email tracking system using invisible pixels linked to a remote
              API, storing engagement results in JSON and Excel for performance
              evaluation and strategic follow-up.
            </li>
            <li className="cursor-default">
              Developed a WhatsApp automation tool with Puppeteer, sending
              personalized messages at scale while tracking progress, handling
              errors, and ensuring delivery reliability.
            </li>
            <li className="cursor-default">
              Managed end-to-end data pipelines, connecting scraping,
              processing, messaging, and tracking, demonstrating advanced
              backend workflow design and automation capabilities.
            </li>
          </ul>
          <h4 className="mt-4">Marketing & Strategic Contributions:</h4>
          <ul className="list-disc list-inside space-y-1 pl-5 pt-2">
            <li className="cursor-default">
              Collaborated in writing tailored 1-minute political ad scripts for
              individual candidates.
            </li>
            <li className="cursor-default">
              Contributed to sales closure strategies and prospect follow-up
              processes, advising on manual contact collection and planning of
              new digital services.
            </li>
          </ul>
          <a href="https://bellumpolitics.com/" target="_blank">
            <button className="px-4 py-2 mt-4 mr-8">Visit the Page</button>
          </a>
          <a
            href="https://github.com/SALVADORPOETA/ScraperPJ-sm"
            target="_blank"
          >
            <button className="px-4 py-2 mt-4 mr-8">My Project</button>
          </a>
          <Link href="/#experience">
            <p className="underline cursor-pointer mt-20">Back</p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2 md:p-4 md:max-h-fit">
          <div className="p-2 pb-8">
            <p className="text-center font-bold pb-2">Skills</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Puppeteer
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Nodemailer
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JSON/Excel data manipulation
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                HTML templating automation
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                API integration
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Backend workflow design
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Large-scale messaging
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tracking systems
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Marketing
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Creative Writing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default bellum
