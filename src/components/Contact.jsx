import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { Check, Copy, Github, Instagram, Linkedin, MapPin, Twitter, User } from 'lucide-react';
import { Link } from "react-router-dom";
import { Contacts } from "../constants"

//template_0lf76fe
//service_cpenb1m
//8v9zsFOvIZgxY6O7z

const Contact = () => {
  const formref = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false);

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('siddhartha587729@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(import.meta.env.VITE_APP_SERVICE_ID, 'template_0lf76fe',
      {
        from_name: form.name,
        to_name: 'Siddhartha',
        from_email: form.email,
        to_email: 'siddhartha587729@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_KEY
    ).then(() => {
      setLoading(false);
      alert("Thank-you for contacting, I will revert back to you as soon as possible ")

      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong');
    })
  }


  return (
    <div
      className=" xl:mt-12 lg:flex-row flex-col flex gap-2 lg:gap-6 xl:gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="lg:flex-1 xl:h-auto "
      >
        <div className="h-full w-full flex flex-col justify-around py-10">
          <div>
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>
            <div className="w-[80%]">
              <span className="text-md">If you appreciate my work and would like to get in touch, please reach out using the methods below.</span>
            </div>
          </div>
          <div className="mt-5 flex flex-col ">
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2 items-center">
                <div className="border-2 p-2 rounded-full flex justify-center items-center shadow-[inset_0_0_10px_rgba(255,255,255,0.5)]">
                  <User size={25} />
                </div>
                <div className="flex flex-col">
                  <span>Availability:</span>
                  <span className="text-sm">Currently available for freelance projects and collaborations.</span>
                </div>
              </li>
              <li className="flex gap-2 items-center">
                <div className="border-2 p-2 rounded-full flex justify-center items-center shadow-[inset_0_0_10px_rgba(255,255,255,0.5)]">
                  <MapPin size={25} />
                </div>
                <div className="flex flex-col">
                  <span>Bhubaneswar, Odisha, India</span>
                </div>
              </li>
              <li className="flex gap-2 items-center">
                <div className="border-2 p-2 rounded-full flex justify-center items-center shadow-[inset_0_0_10px_rgba(255,255,255,0.5)]">
                  <MapPin size={25} />
                </div>
                <div className="flex flex-col break-words">
                  <span className="flex-1">Email: </span>
                  <div className="flex">siddhartha587729@gmail.com <button onClick={handleCopy} className="ml-2">
                    {copied ? <Check className="text-green-500" size={16} /> : <Copy size={16} />}
                  </button></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-3 flex flex-col">
            <ul className="flex gap-5">
              <li className="hover:scale-110 hover:cursor-pointer rounded-full drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)] p-1"><Link to="https://github.com/Siddhartha587729" target="_blank"><Github size={30} /></Link></li>
              <li className="drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)] hover:scale-110 hover:cursor-pointer rounded-full p-1"><Link to="https://x.com/Siddhartha294" target="_blank"><Twitter size={30} /></Link> </li>
              <li className="drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)] hover:scale-110 hover:cursor-pointer rounded-full p-1"><Link to="https://www.linkedin.com/in/siddhartha-kumar-748751223/" target="_blank"><Linkedin size={30} /></Link></li>
              <li className=" drop-shadow-[0_4px_6px_rgba(255,255,255,0.5)] hover:scale-110 hover:cursor-pointer rounded-full p-1"><Link to="https://www.instagram.com/siddhartha_kumar13/" target="_blank"><Instagram size={30} /></Link></li>
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] border-2 border-white/10 bg-white/1 backdrop-blur-sm shadow-lg p-8 rounded-2xl "
      >

        <form
          action=""
          ref={formref}
          onSubmit={handleSubmit}
          className="mt-3 flex flex-col gap-7"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className=" py-3 px-4 placeholder:text-secondary rounded-lg outlined-none border-2 border-white/20 bg-white/5 shadow-lg font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your e-mail?"
              className="py-3 px-4 placeholder:text-secondary rounded-lg outlined-none border-2 border-white/20 bg-white/5 shadow-lg font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Drop a suggestion."
              className=" py-3 px-4 placeholder:text-secondary rounded-lg outlined-none border-2 border-white/20 bg-white/5 shadow-lg font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-[#2946FC] py-3 px-8 ouline-none w-full text-white font-bold shadow-[inset_0_0_5px_rgba(0,0,0,0.5)] rounded-xl hover:drop-shadow-[0_2px_4px_rgba(51,67,250,0.5)] "
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>



    </div>
  )
}

export default SectionWrapper(Contact, "contact")