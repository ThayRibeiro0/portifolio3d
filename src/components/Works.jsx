import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { github } from '../assets';
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ 
  index, 
  name, 
  description, 
  tags, 
  image, 
  source_code_link 
}) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
      }}
        className='bg-tertiary p-5 rounded-2x1 sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2x1"
          />
        </div>
      </Tilt> */}
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My works
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects 📝
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3x1 leanding-[30px]"
        >
        This section have I bring the projects showcase my skills and experience on this journey in the world of technology. To better understanding I put description, link with the code repository and live demos in it. All this tasks reflects all my abilities in solve problems, in different technologies and manage projects with effectivity.  
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");