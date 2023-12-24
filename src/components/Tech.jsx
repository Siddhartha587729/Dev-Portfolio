import React, { useState } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { frontend, techbackend } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { ScrollText } from 'lucide-react';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technology i use</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>
      <motion.div variants={fadeIn("", "", 0.1, 1)} className='mt-20 text-secondary text-[17px] leading-[30px] flex flex-wrap md:flex-nowrap justify-start items-center gap-10 w-full'>
        <div className='w-1/2'>
          <motion.div
            variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
          >
            <h3 className='text-white text-[20px] font-bold text-center'>Frontend</h3>
            <div options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <ul className="list-none">
                {frontend.map((tech, index) => (
                  <li className="mb-2 flex items-center">
                    <div className="w-4 h-4 mr-2 bg-center bg-cover rounded-full" style={{ backgroundImage: `url(${tech.icon})` }}></div>  
                    {tech.name}
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>
        </div>
        <div className='w-1/2'>
          <motion.div
            variants={fadeIn("right", "spring", 0.5 * 1, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
          >
            <h3 className='text-white text-[20px] font-bold text-center'>Backend</h3>
            <div options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <ul className="list-none">
                {techbackend.map((tech, index) => (
                  <li className="mb-2 flex items-center">
                    <div className="w-4 h-4 mr-2 bg-center bg-cover rounded-full" style={{ backgroundImage: `url(${tech.icon})` }}></div>
                    {tech.name}
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")