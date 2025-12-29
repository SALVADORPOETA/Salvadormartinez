import ExperienceItem from './ExperienceItem'
import trdsmImg from '../public/assets/general/trdsm.png'
import guayroImg from '../public/assets/general/guayro.png'
import bellumImg from '../public/assets/general/bellum.png'

const Education = () => {
  return (
    <div id="experience" className="w-full md:mt-10">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] pt-8">
          Experience
        </p>
        <h2 className="py-4">I worked here</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ExperienceItem
            title="Bellum Politics"
            backgroundImg={bellumImg}
            date="Apr 2025 - Present"
            pageUrl="/bellum"
          />
          <ExperienceItem
            title="Trajes Regionales de Segunda Mano"
            backgroundImg={trdsmImg}
            date="Sep 2022 - Ago 2025"
            pageUrl="/trdsm"
          />
          <ExperienceItem
            title="Guayro"
            backgroundImg={guayroImg}
            date="Mar 2018 - Apr 2022"
            pageUrl="/guayro"
          />
        </div>
      </div>
    </div>
  )
}

export default Education
