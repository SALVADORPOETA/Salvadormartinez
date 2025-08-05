import Image from 'next/image'
import AboutImg from '../public/assets/aztec5.jpg'

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 ml-10">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] mt-10">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I build responsive, high-performance web applications from front to
            back. On the front end, I work with React.js, Next.js, TypeScript,
            TailwindCSS, and more. On the back end, I integrate APIs and manage
            services using Node.js, Firebase, MongoDB, Appwrite, and Convex.
          </p>
          <p className="py-2 text-gray-600">
            I believe in companionship and team work and I am willing to help my
            coworkers with anything they need if I can do it. I am autodidact
            and self disciplined so I need very little supervision.
          </p>
          <p className="py-2 text-gray-600">
            I am willing to work with people from anywhere in the world and be
            respectful with their religions, ideologies, sexual preferences,
            identities, etc. I believe in the love for the entire humankind and
            I am optimist about our future as species.
          </p>
          <p className="py-2 text-gray-600">
            BTW... I am very good at public speaking in spanish and english.
          </p>
          <a href="#skills">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out my skills and some of my latest projects.
            </p>
          </a>
        </div>
        <div className="w-fit h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4">
          <Image
            src={AboutImg}
            className="rounded-xl max-md:w-[200px]"
            width={250}
            alt="/"
          />
        </div>
      </div>
    </div>
  )
}

export default About
