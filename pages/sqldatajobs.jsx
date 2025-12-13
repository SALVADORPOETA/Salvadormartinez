import Image from 'next/image'
import postgresqlImg from '../public/assets/projects/postgresql.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const sqldatahobs = () => {
  return (
    <div className="w-full overflow-hidden pb-10">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={postgresqlImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">SQL Data Job Analysis</h2>
          <h3>SQL / PostgreSQL / Docker</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-2">
            This project analyzes the data analyst job market with a focus on
            identifying top-paying roles, in-demand skills, and the intersection
            between high demand and high salary. Using real-world job posting
            data from a SQL course by Luke Barousse, the analysis addresses
            questions such as which data analyst jobs pay the most, what skills
            those roles require, which skills are most frequently requested by
            employers, and which skills are associated with higher salaries. The
            dataset includes detailed information on job titles, salaries,
            locations, and required skills. All analysis was performed using SQL
            with PostgreSQL as the database engine, Visual Studio Code for query
            execution, and Git and GitHub for version control and documentation.
            As part of the technical scope, the entire project was containerized
            using Docker and published to Docker Hub as hands-on practice with
            containerization and image distribution.
          </p>
          <p className="mt-2">
            Through a series of targeted SQL queries, the project shows that
            remote data analyst roles can offer a very wide salary range, with
            top positions reaching exceptionally high compensation levels.
            Advanced SQL emerges as both a core requirement for high-paying
            roles and the most in-demand skill overall, making it essential for
            aspiring data analysts. Additionally, skills related to cloud
            platforms, big data technologies, machine learning tools, and data
            engineering workflows are strongly associated with higher average
            salaries, reflecting the increasing convergence of analytics and
            engineering. Beyond the analytical findings, dockerizing and
            publishing the project reinforced practical experience in deploying
            reproducible, portable data projects, while the overall work
            strengthened advanced SQL skills and provided clear, actionable
            guidance for prioritizing skill development in a competitive job
            market.
          </p>

          <a
            href="https://github.com/SALVADORPOETA/SQL-Data-job-analysis-sm"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://hub.docker.com/r/salvadormartinezsm/postgres-sql-project"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4">Docker</button>
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
                SQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Docker
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sqldatahobs
