import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

//template_0lf76fe
//service_cpenb1m
//8v9zsFOvIZgxY6O7z

const Contact = () => {
  const formref = useRef();
  const [form, setForm] =useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_cpenb1m','template_0lf76fe',
      {
        from_name: form.name,
        to_name: 'Siddhartha',
        from_email: form.email,
        to_email: 'siddhartha587729@gmail.com',
        message: form.message,
      },
      '8v9zsFOvIZgxY6O7z'
    ).then(()=>{
      setLoading(false);
      alert("Thank-you for contacting, I will revert back to you as soon as possible ")

      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error)=>{
      setLoading(false)
      console.log(error);
      alert('Something went wrong');
    })
  }


  return (
    <div 
      className=" xl: mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left","tween",0.2,1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          action="" 
          ref ={formref}
          onSubmit={handleSubmit}
          className="mt-8 flex  flex-col gap-7"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your name</span>
              <input 
                type="text" 
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary rounded-lg outlined-none border-none fonr-medium"
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
                className="bg-tertiary py-3 px-4 placeholder:text-secondary rounded-lg outlined-none border-none fonr-medium"
                />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your message</span>
              <textarea
                rows="5" 
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you have to say?"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary rounded-lg outlined-none border-none fonr-medium"
                />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 ouline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
        </form>
      </motion.div>  

      <motion.div
        variants={slideIn("right","tween",0.2,1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact")