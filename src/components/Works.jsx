import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { Github, Globe} from "lucide-react"
import { Link } from "react-router-dom"

const ProjectCard = ({ index, name, description, tags, image, github_code_link, source_code_link }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 15,
        scale: 1,
        speed: 450,
      }}
      className="bg-[#17153B] rounded-2xl sm:w-[360px] w-full "
    >
      <div className="relative w-full h-[180px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-t-2xl"
        />
        {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
          <div onClick={() => window.open(source_code_link,"_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img src={linkicon} alt="link" className="w-1/2 h-1/2 object-contain"/>
          </div>
          <div onClick={() => window.open(github_code_link,"_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
          </div>
        </div> */}
      </div>
      <div className="p-5">
        <div className="mt-2 ">
          <h3 className="text-white font-bold text-xl">{name}</h3>
          <p className="mt-2 text-secondary text-[12px]">{description.split(' ').slice(0, 14).join(' ') + '...'}</p>
        </div>
        {/* <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px]`}>
              {tag.name}
            </p>
          ))}
        </div> */}
        <div className="flex flex-col text-md mt-2">
          <Link to={source_code_link} target="_blank" className="my-1 bg-blue-600 p-2 rounded-xl flex gap-2 justify-center items-center hover:scale-105 active:scale-100 shadow-inner shadow-blue-800"><Globe size={20} className="drop-shadow-[0_2px_4px_rgba(255,255,255,0.5)]"/>Visit Site</Link>
          <Link to={github_code_link} target="_blank" className="my-1 bg-gray-600 p-2 rounded-xl flex gap-2 justify-center items-center hover:scale-105 active:scale-100 shadow-inner shadow-gray-800"><Github size={20} className="drop-shadow-[0_2px_4px_rgba(255,255,255,0.5)]"/>View Code</Link>
        </div>
      </div>
    </Tilt>
  </motion.div>
)

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Explore my portfolio showcasing diverse projects, each a fusion of creativity and technical expertise. From web development to design, witness my commitment to innovation and impactful solutions.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")