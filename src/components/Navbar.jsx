import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom"
import { styles } from "../styles"
import { navLinks } from "../constants"
import { catfish, catpeak, menu, close } from "../assets"
import { MoveRight } from 'lucide-react';
import Lottie from 'lottie-react'
import { LottieInteractivity } from '@lottiefiles/lottie-interactivity';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const lottieRef = useRef(null);

  /* useEffect(() => {
    if (lottieRef.current) {
      LottieInteractivity.create({
        player: lottieRef.current,
        mode: "cursor",
        actions: [
          {
            type: "hover",
            forceFlag: false,
          },
        ],
      });
    }
  }, []); */

  return (
    <nav
      className={`${styles.paddingX} w-screen sm:w-full flex items-center py-5 fixed top-0 z-20 `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <div className='w-16 h-12 overflow-visible relative ' >
            <Lottie animationData={catpeak} loop={false} className='absolute -top-16 drop-shadow-[0_1px_5px_rgba(255,255,255,0.5)]' lottieRef={lottieRef} />
          </div>
          {/* <img src={logo} alt="logo" className='mr-2 w-10 h-10 object-contain' /> */}
          {/* <p className='font-sans text-white text-[20px] font-bold cursor-pointer flex bg-clip-text opacity-75'>Siddhartha's &nbsp;<span className='font-sans sm:block text-white-200'>Portfolio</span></p> */}
        </Link>
        {/* <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key={link.id} className={`${active===link.title ? "text-magenta" : "text-white-100"} hover:text-orange text-[18px] font-medium cursor-pointer`}
              onClick={()=> setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul> */}
        <div className=" flex gap-6 justify-center items-center ">
          <a href={`#contact`}><div className='hidden sm:flex gap-1 border-2 p-2 px-4 rounded-3xl shadow-[inset_0_0_5px_rgba(255,255,255,0.5)] drop-shadow-[0_1px_6px_rgba(255,255,255,0.5)] hover:cursor-pointer hover:scale-105'>Get in touch<MoveRight /></div></a>
          <div className=" flex flex-1 justify-end item-center">
            <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer '
              onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 border-2 border-white/10 bg-white/1 backdrop-blur-sm shadow-lg absolute top-20 right-30 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((link) => (
                  <li key={link.id} className={`${active === link.title ? "text-primary" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px] hover:scale-105`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar