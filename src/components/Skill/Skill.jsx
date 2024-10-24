import React from 'react';
import styles from './Skill.module.scss';
import {motion} from 'framer-motion'
import { fadeIn, slideIn, staggerChildren, textVariant, textVariant2, zoomIn } from "../../utils/motion";
const skillsData = [
  { skill: 'Java', percentage: 85 },
  { skill: 'Python', percentage: 80 },
  { skill: 'MERN Stack', percentage: 75 },
  { skill: 'MySQL', percentage: 80 },
  { skill: 'Linux', percentage: 90 },
  { skill: 'Shell Scripting', percentage: 70 },
  { skill: 'AWS', percentage: 70 },
  { skill: 'Docker', percentage: 75 },
  { skill: 'Kubernetes', percentage: 75 },
  { skill: 'Jenkins', percentage: 75 },
  { skill: 'Terraform', percentage: 75 },
  { skill: 'Ansible', percentage: 75 },
  { skill: 'GitHub', percentage: 90 },
];

const Skill = () => {
  return (
    <motion.section  
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    >
    <a className="anchor" id="skill"></a>

    <motion.div className={styles.skillSection}>
      <h2> My Skills</h2>
      <motion.div variants={fadeIn("up", "tween", .5, .6)} className={styles.skillBars}>
        {skillsData.map((item, index) => (
          <div className={styles.skillBar} key={index}>
            <div className={styles.skillName}>{item.skill}</div>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
    </motion.section>
  );
};

export default Skill;
