import React, { useState } from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { ScrollText } from 'lucide-react';
import Me  from '../assets/me.jpeg'

const ServiceCard =({index,title,icon}) =>{
  console.log(title);
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring",0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] rounded-[20px] shadow-card'
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  const [load, setload] = useState(false);

  const downloadCV = ()=>{
  
    setload(true);
    setTimeout(()=>{
      alert("Thanks")
      setload(false);
    },2000)
    
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>
      <motion.div variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] leading-[30px] flex lg:flex-no-wrap flex-wrap justify-center items-center gap-10'>
        <img src={Me} alt="My pic" className='w-1/6 rounded-lg object-contain grayscale' />
        <div className='max-w-3xl flex flex-wrap gap-10'>
          <p>Lorem ipsum dolor, sit amet consectetur ipsam odit provident eius non tempora unde omnis alias debitis ipsum quas inventore accusamus illum qui. Quas corporis nam cum? Voluptatibus fugit debitis maxime, blanditiis nam totam tenetur eos dolorem quis facere!</p>
          <div className='mt-3'>
            <button 
              onClick={downloadCV}
              className='bg-tertiary py-3 px-8 ouline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl flex flex-wrap gap-3'
              >
                {load? "Downloading..." : "Download CV "} <ScrollText />
            </button>
          </div>
        </div>
      </motion.div>
      
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}{...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")