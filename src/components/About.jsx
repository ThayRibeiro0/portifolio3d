import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';

import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';
import Pdf from '../assets/Thays Moia Ribeiro - Current CV (1).pdf';

const ServiceCard = ( { index, title, icon }) => {
  return(
    <Tilt className="xs:w=[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
              <img src={icon} alt={title} className="w-16 h-16 object-contain"
               />
               <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

            </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview ✍ </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
      I am a skilled software developer with experience in in so many areas (as sales, law, administrative, cleaner, banker, aupair) and with code in HTML, CSS, Javascript, Python, React, Three.js, Node, Express, PHP, C, JAVA, Raspberry PI and and Aplications, Handlebars, SQL, Android Studio, GitHub, Visual Studio Code, Codespaces, Web Systems Project, Programming Logic, Portugol and others, while also being an aupair.
      Phase: "Continue learning by myself."(Unknown author)
      <h2 className={styles.sectionCVText}>
        <a href = {Pdf} target = "_blank">Download my Curriculum 📋</a>
      </h2>
      <h2 className={styles.sectionCVText}>
        <a href = "https://www.linkedin.com/in/thays-moia-ribeiro-82647987/" target = "_blank">LinkedLn 🕵🏾‍♀️</a>
      </h2>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
    </section>
  )
}

export default SectionWrapper(About, "about");
