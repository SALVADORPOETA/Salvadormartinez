import EducationItem from './EducationItem'
import uvImg from '../public/assets/general/uv.png'
import parvatImg from '../public/assets/general/parvat.png'
import platziImg from '../public/assets/general/platzi.jpg'
import codecommerceImg from '../public/assets/general/codecommerce.jpg'
import jsmImg from '../public/assets/general/jsm.png'
import codewarsImg from '../public/assets/general/codewars.png'

const Education = () => {
  return (
    <div id="education" className="w-full md:mt-10">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] pt-8">
          Education
        </p>
        <h2 className="py-4">I studied here</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <EducationItem
            title="Code Wars"
            backgroundImg={codewarsImg}
            date="May 2024 - Dec 2025"
            pageUrl="/codewars"
          />
          <EducationItem
            title="Javascript Mastery"
            backgroundImg={jsmImg}
            date="Jan 2023 - Jul 2025"
            pageUrl="/jsm"
          />
          <EducationItem
            title="Code Commerce"
            backgroundImg={codecommerceImg}
            date="Jan 2023 - Sep 2024"
            pageUrl="/codecommerce"
          />
          <EducationItem
            title="Parvat Computer Technology"
            backgroundImg={parvatImg}
            date="Oct 2022 - Dec 2022"
            pageUrl="/parvat"
          />
          <EducationItem
            title="Universidad Veracruzana"
            backgroundImg={uvImg}
            date="Aug 2015 - Jul 2022"
            pageUrl="/uv"
          />
          <EducationItem
            title="Platzi"
            backgroundImg={platziImg}
            date="Aug 2020 - Jun 2021"
            pageUrl="/platzi"
          />
        </div>
      </div>
    </div>
  )
}

export default Education
