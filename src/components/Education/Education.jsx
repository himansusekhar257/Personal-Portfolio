import React from 'react'
import { motion } from "framer-motion";
import css from "./Education.module.scss";
import { fadeIn, slideIn, staggerChildren, textVariant, textVariant2, zoomIn } from "../../utils/motion";
const Education = () => {
  return (
   <motion.section
      variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="education"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Education</span>
          </div>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./Gan.png" alt="education" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./Gan1.png" alt="education" />
            {/* <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="education" /> */}
        </div>
      </div>
   </motion.section>
  )
}

export default Education