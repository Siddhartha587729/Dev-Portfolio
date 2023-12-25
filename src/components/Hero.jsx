import { motion } from 'framer-motion';
import { styles } from "../styles"
import { ComputersCanvas } from './canvas';
import { github, linkedin, x } from "../assets"

const Hero = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white-100`}>
            <p>Hi,</p> I'm <span className="text-[#915eff]">Siddhartha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-200`}>
            a full stack web developer <br className='sm:block hidden' />and this is my portfolio
          </p>
          <div className=' mt-4 h-3 w-12 flex gap-3 items-center justify-between'>
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
          </div>
        </div>
      </div>
      <div className="absolute h-full w-[40%] left-[50%] ">
        <ComputersCanvas />
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
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