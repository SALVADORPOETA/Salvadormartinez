import Image from 'next/image'
import Link from 'next/link'

const EducationItem = ({ title, backgroundImg, date, pageUrl }) => {
  return (
    <div className="relative flex items-center justify-center w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        src={backgroundImg}
        alt={title}
        width={1000} // usa un valor grande para que se adapte al contenedor padre
        height={600}
        className="rounded-xl w-full h-auto object-cover group-hover:opacity-10 transition-opacity duration-300"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-2 pt-1 text-white text-center">{date}</p>
        <Link href={pageUrl}>
          <p className="text-center py-2 px-2 rounded-lg bg-white text-gray-700 font-bold text-md cursor-pointer">
            Go to the Education
          </p>
        </Link>
      </div>
    </div>
  )
}

export default EducationItem

// import Image from 'next/image'
// import Link from 'next/link'

// const EducationItem = ({ title, backgroundImg, date, pageUrl }) => {
//   return (
//     <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
//       <Image
//         className="rounded-xl group-hover:opacity-10"
//         src={backgroundImg}
//         alt="/"
//       />
//       <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
//         <h3 className="text-2xl text-white tracking-wider text-center">
//           {title}
//         </h3>
//         <p className="pb-4 pt-2 text-white text-center">{date}</p>
//         <Link href={pageUrl}>
//           <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer px-3">
//             Go to the school
//           </p>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default EducationItem
