import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'

const SkillModal = ({ skill, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center bg-black/70 pt-24"
      onClick={onClose}
    >
      <div
        className="w-[90%] max-w-[600px] max-h-[80vh] bg-[#ecf0f3] rounded-xl shadow-xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 shadow-md hover:scale-105 ease-in duration-200 z-10"
          aria-label="Close modal"
        >
          <AiOutlineClose size={20} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b">
          <div className="w-14 h-14 flex items-center justify-center">
            <Image src={skill.logo} alt={skill.name} />
          </div>
          <h2 className="text-2xl font-bold">{skill.name}</h2>
        </div>

        {/* Scrollable content */}
        <div className="p-6 overflow-y-auto">
          <p className="text-gray-700 mb-6">{skill.description}</p>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Projects using this technology
            </h3>
            <ul className="space-y-3">
              {skill.projects.map((project) => (
                <li key={project.name}>
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 rounded-lg bg-white shadow hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:text-white ease-in duration-200"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillModal
