import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { frontend, techbackend, devops, tools, languages } from '../constants';
import { fadeIn, slideIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { planet, bplanet } from "../assets"
import { Tooltip } from 'react-tooltip'

const Tech = () => {
  const renderTechList = (techList) => {
    return (
      <ul className="list-none flex flex-wrap lg:flex-col items-center justify-center gap-2">
        {techList.map((tech, index) => (
          <li key={index} className="mb-2 flex flex-col items-center hover:cursor-pointer hover:scale-110">
            <div className="w-10 h-10 mr-2 bg-center bg-cover rounded-full " style={{ backgroundImage: `url(${tech.icon})` }} 
            data-tooltip-id="my-tooltip" data-tooltip-content={tech.name}></div>
            
            {/* <span className='text-sm'>{tech.name}</span> */}
          </li>
        ))}
        
      </ul>
    );
  };

  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>My skills</p>
        <h2 className={styles.sectionHeadText}>Technology.</h2>
      </motion.div>
      
      <motion.div variants={fadeIn("", "", 0.1, 1)} className='rounded-3xl mt-10  text-[17px] leading-[30px] flex flex-wrap md:flex-nowrap justify-start items-center gap-10 w-full '>
        <motion.div variants={slideIn()} className='w-[40%] -z-10'>
          <img src={planet} alt="" className='absolute -bottom-48 -left-12 w-[600px] '/>
        </motion.div>
        <Tooltip id="my-tooltip" place="right" className='z-40 font-sans text-base ' />
        <div className={`${styles.heroSubText} flex flex-wrap md:flex-row gap-3 w-full z-1`}>
          <div className='w-full md:w-1/6 flex flex-col items-center border-2 rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.5)] p-5 hover:scale-105 backdrop-blur-sm'>
            <h1 className='text-base lg:text-xl mb-2'>Languages</h1>
            {renderTechList(languages)}
          </div>
          <div className=' w-full md:w-1/6 flex flex-col items-center border-2 rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.5)] p-5 hover:scale-105 backdrop-blur-sm'>
            <h1 className='text-base lg:text-xl mb-2'>Frontend</h1>
            {renderTechList(frontend)}
          </div>
          <div className=' w-full md:w-1/6 flex flex-col items-center border-2 rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.5)] p-5 hover:scale-105 backdrop-blur-sm'>
            <h1 className='text-base lg:text-xl mb-2'>Backend</h1>
            {renderTechList(techbackend)}
          </div>
          <div className='w-full md:w-1/6 flex flex-col items-center border-2 rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.5)] p-5 hover:scale-105 backdrop-blur-sm'>
            <h1 className='text-base lg:text-xl mb-2'>Cloud</h1>
            {renderTechList(devops)}
          </div>
          <div className=' w-full md:w-1/6 min flex flex-col items-center border-2 rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.5)] p-5 hover:scale-105 backdrop-blur-sm'>
            <h1 className='text-base lg:text-xl mb-2'>Tools</h1>
            {renderTechList(tools)}
          </div>

        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
