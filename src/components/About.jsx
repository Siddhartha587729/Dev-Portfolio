import React, { useState } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { ScrollText } from 'lucide-react';
import Me from '../assets/me.jpeg'


const ServiceCard = ({ index, title, icon }) => {
  /* console.log(title); */
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:cursor-pointer'
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[80px] flex justify-evenly items-center flex-col'
        >
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  const [load, setload] = useState(false);

  const downloadCV = () => {
    const url = 'https://bit.ly/4djHa02'
    setload(true);
    setTimeout(() => {
      setload(false);
      window.open(url, '_blank');
    }, 1500)

  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>
      <motion.div variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] leading-[30px] flex lg:flex-no-wrap flex-wrap justify-start items-center gap-10'>
        <img src={Me} alt="My pic" className='w-1/3 lg:w-1/6 rounded-lg object-contain hover:scale-105 transition-all' />
        <div className='max-w-4xl flex flex-wrap gap-10 text-[15px] md:text-[16px] lg:text-[17px]'>
          <p>Hello, I'm a dedicated Full Stack developer passionate about delivering innovative and efficient web solutions. With expertise in both front-end and back-end technologies, I approach development with a comprehensive perspective. I am driven by a commitment to enhance user experiences and contribute to the success of web projects.</p>
          
          <div className='mt-3'>
            <button
              onClick={downloadCV}
              className='bg-tertiary py-3 px-8 ouline-none w-fit text-white font-bold hover:scale-105 active:scale-100 rounded-lg flex flex-wrap gap-3'
            >
              {load ? "Downloading..." : "Download CV "} <ScrollText />
            </button>
          </div>
          
        </div>
        
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-5 xl:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}{...service} />
        ))}
      </div>
    </>
  )
}
export default SectionWrapper(About, "about")