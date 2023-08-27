import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:zainkeepscode@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>India, Odisha, Bhubaneswar</p>
          </div>
          <ul className={css.menu}>
            <a href="https://www.linkedin.com/in/himansu-sekharpanda/"> <li><FaLinkedin size={"40px"}/></li></a>
            <a href="https://www.linkedin.com/in/himansu-sekharpanda/"> <li><FaGithub size={"40px"}/></li></a>
            <p>Connect with me on LinkedIn and GitHub</p>
          </ul>



        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;