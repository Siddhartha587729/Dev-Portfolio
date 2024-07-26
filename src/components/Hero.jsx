import { motion } from 'framer-motion';
import { styles } from "../styles"
import { ComputersCanvas } from './canvas';
import { github, linkedin, x } from "../assets"
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };
  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden'>
      <div className={`${styles.paddingX} absolute inset-0 sm:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        {/* <div className="flex flex-col justify-center items-center mt-5 ">
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}
        <div className='h-[80%] flex flex-col justify-center '>
          <h1 className={styles.sectionSubText}>Welcome to my portfolio.</h1>
          <h1 className={`${styles.heroHeadText} text-white-100`}>
            <p>Hello,</p> I'm <span className="text-[#915eff] drop-shadow-[0_2px_4px_rgba(145,94,255,0.5)]">Siddhartha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-200 w-[80%] md:w-[60%]` }>
          Designing and developing digital products with visual aesthetics. 
          </p>
          <div className="mt-5 flex flex-col">
            <ul className="flex gap-5">
              <li className="hover:scale-110 hover:cursor-pointer rounded-full drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)] p-1"><Link to="https://github.com/Siddhartha587729" target="_blank"><Github size={30} /></Link></li>
              <li className="drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)] hover:scale-110 hover:cursor-pointer rounded-full p-1"><Link to="https://x.com/Siddhartha294" target="_blank"><Twitter size={30} /></Link> </li>
              <li className="drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)] hover:scale-110 hover:cursor-pointer rounded-full p-1"><Link to="https://www.linkedin.com/in/siddhartha-kumar-748751223/" target="_blank"><Linkedin size={30} /></Link></li>
              <li className=" drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)] hover:scale-110 hover:cursor-pointer rounded-full p-1"><Link to="https://www.instagram.com/siddhartha_kumar13/" target="_blank"><Instagram size={30} /></Link></li>
            </ul>
          </div>
          {/* <div className=' mt-4 h-3 w-12 flex gap-3 items-center justify-between'>
            <img src={github} alt=""
              className='h-8 w-8  transition-transform duration-300 transform hover:scale-110 rounded-full cursor-pointer'
              onClick={() => openLink('https://github.com/Siddhartha587729')}
            />
            <img src={linkedin} alt=""
              className='h-7 w-7  bg-white-100 transition-transform duration-300 transform hover:scale-110  rounded-full cursor-pointer'
              onClick={() => openLink('https://www.linkedin.com/in/siddhartha-kumar-748751223/')}
            />
            <img src={x} alt=""
              className='h-7 w-7 bg-white-100 transition-transform duration-300 transform hover:scale-110 rounded-full cursor-pointer'
              onClick={() => openLink('https://twitter.com/Siddhartha294')}
            />
          </div> */}
        </div>
      </div>
      <div className="absolute h-full w-[80%] sm:w-[40%] md:w-[50%] left-[65%] sm:left-[60%] md:left-[50%] drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)]">
        <ComputersCanvas />
      </div>
      <div className='absolute bottom-10  w-full flex justify-center items-center'>
        <a href="#about">
          <div className="w-[35px] h-[59px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            {/* framer motion */}
            <motion.dev animate={{
              y: [0, 24, 0]
            }
            }
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }
              } className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero