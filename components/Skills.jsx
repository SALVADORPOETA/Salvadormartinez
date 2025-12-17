import Image from 'next/image'
import Html from '../public/assets/skills/html.png'
import Css from '../public/assets/skills/css.png'
import Javascript from '../public/assets/skills/javascript.png'
import ReactImg from '../public/assets/skills/react.png'
import TailwindCSS from '../public/assets/skills/tailwind.png'
import Github from '../public/assets/skills/github.png'
import NextJS from '../public/assets/skills/nextjs.png'
import Git from '../public/assets/skills/git.png'
import NodeJS from '../public/assets/skills/node.png'
import Firebase from '../public/assets/skills/firebase.png'
import Postman from '../public/assets/skills/postman.png'
import TypeScript from '../public/assets/skills/typescript.png'
import Vite from '../public/assets/skills/vite.png'
import Appwrite from '../public/assets/skills/appwrite.png'
import Clerk from '../public/assets/skills/clerk.png'
import GSAPImg from '../public/assets/skills/gsap.png'
import MongoDB from '../public/assets/skills/mongodb.png'
import Convex from '../public/assets/skills/convex.png'
import SQLImg from '../public/assets/skills/sql.png'
import PostgreSQL from '../public/assets/skills/postgresql.svg'
import Python from '../public/assets/skills/python.png'
import Docker from '../public/assets/skills/docker.svg'
import ThreeJS from '../public/assets/skills/threejs.png'
import OpenAI from '../public/assets/skills/openai.png'
import { useState } from 'react'
import SkillModal from './SkillModal'
import skillsData from '../data/skillsData.json'

const skillsList1 = [
  { key: 'html', name: 'HTML', logo: Html },
  { key: 'css', name: 'CSS', logo: Css },
  { key: 'javascript', name: 'JavaScript', logo: Javascript },
  { key: 'typescript', name: 'TypeScript', logo: TypeScript },
  { key: 'react', name: 'ReactJS', logo: ReactImg },
  { key: 'nextjs', name: 'NextJS', logo: NextJS },
  { key: 'tailwind', name: 'TailwindCSS', logo: TailwindCSS },
  { key: 'node', name: 'NodeJS', logo: NodeJS },
  { key: 'firebase', name: 'Firebase', logo: Firebase },
  { key: 'postman', name: 'Postman', logo: Postman },
  { key: 'git', name: 'Git', logo: Git },
  { key: 'github', name: 'GitHub', logo: Github },
]

const skillsList2 = [
  { key: 'vite', name: 'Vite', logo: Vite },
  { key: 'clerk', name: 'Clerk', logo: Clerk },
  { key: 'appwrite', name: 'Appwrite', logo: Appwrite },
  { key: 'gsap', name: 'GSAP', logo: GSAPImg },
  { key: 'mongodb', name: 'MongoDB', logo: MongoDB },
  { key: 'convex', name: 'Convex', logo: Convex },
  { key: 'sql', name: 'SQL', logo: SQLImg },
  { key: 'postgresql', name: 'PostgreSQL', logo: PostgreSQL },
  { key: 'python', name: 'Python', logo: Python },
  { key: 'docker', name: 'Docker', logo: Docker },
  { key: 'threejs', name: 'ThreeJS', logo: ThreeJS },
  { key: 'openai', name: 'OpenAI', logo: OpenAI },
]

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null)
  return (
    <div id="skills" className="w-full p-2">
      <div className="max-w-[1240px] mx-auto flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] ml-10 mt-20">
          Skills
        </p>
        <h2 className="py-4 ml-10">Primary Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsList1.map((skill) => (
            <div
              key={skill.key}
              onClick={() =>
                setSelectedSkill({
                  name: skill.name,
                  logo: skill.logo,
                  description: skillsData[skill.key]?.description,
                  projects: skillsData[skill.key]?.projects || [],
                })
              }
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={skill.logo}
                    width={64}
                    height={64}
                    alt={skill.name}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="py-4 ml-10 pt-28">Secondary Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsList2.map((skill) => (
            <div
              key={skill.key}
              onClick={() =>
                setSelectedSkill({
                  name: skill.name,
                  logo: skill.logo,
                  description: skillsData[skill.key]?.description,
                  projects: skillsData[skill.key]?.projects || [],
                })
              }
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={skill.logo}
                    width={64}
                    height={64}
                    alt={skill.name}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedSkill && (
        <SkillModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </div>
  )
}

export default Skills
