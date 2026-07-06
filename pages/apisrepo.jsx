import Image from 'next/image'
import apisrepoImg from '../public/assets/projects/apisrepo1.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
import Head from 'next/head'

const apisrepo = () => {
  return (
    <>
      <Head>
        <title>APIs Repository | Full-Stack Developer</title>
        <meta
          name="description"
          content="This is an ORIGINAL project built with Next.js and Firebase Firestore. It is specifically designed to manage structured content organized by projects, sections, and items."
        />
      </Head>
      <main className="w-full overflow-hidden pb-10">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={apisrepoImg}
            alt="APIs Repository Project View"
            priority
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">APIs Repository</h2>
            <h3>ReactJS / NextJS / Firebase</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p className="mt-2">
              APIs Repository is an original, centralized and scalable headless
              CMS built with Next.js and Firebase Firestore, specifically
              engineered to serve as the unified data layer for multiple
              independent frontend applications (such as Mayapan, Bharat, Kemet,
              and Empire). Its architecture stands out for an efficient domain
              modeling that structures dynamic content through hierarchical
              collections of projects, sections, and items. Furthermore, it
              offers high technical flexibility by integrating a
              dual-persistence strategy: local JSON file storage for rapid
              development and a cloud database for production, ensuring a
              seamless migration path and optimal production readiness.
            </p>
            <p className="mt-2">
              The backend prioritizes security and robustness in controlled
              environments, supporting full CRUD capabilities and a secure
              administrative access control across /admin/* routes. This
              protection is handled server-side using Next.js Middleware that
              validates incoming requests via a secure custom header
              (X-Admin-Key). Thanks to its clean design, lack of
              over-engineering, and a proven multi-tenant architecture, this
              project stands as a production-ready solution ideal for
              educational platforms, structured documentation, and internal
              content management workflows.
            </p>
            <a href="https://apis-repository-sm.vercel.app/" target="_blank">
              <button className="px-4 py-2 mt-4 mr-8">Demo</button>
            </a>
            <a
              href="https://github.com/SALVADORPOETA/Apis-repository-sm"
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
                  CSS
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
                  NodeJS
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
      </main>
    </>
  )
}

export default apisrepo
