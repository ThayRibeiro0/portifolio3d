import React from 'react';
// import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';

import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';

const ServiceCard = ( { index, title, icon }) => {
  return(
    <Tilt>{title}</Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview ✍ </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
      I'm a skilled software developer with experience in in so many areas (as sales, law, administrative, cleaner, banker, aupair) and with code in HTML, CSS, Javascript, Python, React, Three.js, Node, Express, PHP, C, JAVA, Raspberry PI and and Aplications, Handlebars, SQL, Android Studio, GitHub, Visual Studio Code, Codespaces, Web Systems Project, Programming Logic, Portugol and others, while also being an aupair.
      Phase: "Continue learning by myself."(Unknown author)
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About