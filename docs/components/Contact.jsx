import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn} from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loanding, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_eu6spwn', 
      'template_kwby66q',
      {
        from_name:form.name,
        to_name: 'Thays',
        from_email: form.email,
        to_email: 'thaysmoiaribeiro@gmail.com',
      message: form.message,
      },
      'SsMWgmXQLt2z9gRXB'
     )
     .then(() => {
        setLoading(false);
        alert('Thank you so much for send me a message. I will return to you as soon as possible.')
        
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)

        console.log(error);

        alert('Ops...Try again!')
      })
  }

  return (
    <div className="x1:mt-12 x1:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2x1"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact ✆</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Tap your Name
            </span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Tap your Email
            </span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Message
            </span>
            <textarea
              rows="7" 
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to write?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-x1"
          >
            {loanding ? 'Sending...' : 'Send'}
          </button>

        </form>
      </motion.div>

      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="x1:flex-1 x1:h-auto md:h-[0px] h-[0px]"
      >
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");