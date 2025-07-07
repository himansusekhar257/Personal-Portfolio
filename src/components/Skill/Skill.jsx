import React from 'react';
import styles from './Skill.module.scss';
import {motion} from 'framer-motion'
import { fadeIn, slideIn, staggerChildren, textVariant, textVariant2, zoomIn } from "../../utils/motion";
const skillsData = [
  { skill: 'Azure', percentage: 90 },
  { skill: 'AWS', percentage: 80 },
  { skill: 'Linux', percentage: 85 },
  { skill: 'Bash Scripting', percentage: 80 },
  { skill: 'Python', percentage: 60 },
  { skill: 'Docker', percentage: 85 },
  { skill: 'Kubernetes (AKS)', percentage: 85 },
  { skill: 'Jenkins', percentage: 80 },
  { skill: 'Azure DevOps', percentage: 85 },
  { skill: 'GitHub', percentage: 90 },
  { skill: 'Ansible', percentage: 70 },
  { skill: 'Prometheus & Grafana', percentage: 75 },
  { skill: 'CI/CD Pipelines', percentage: 90 },
  { skill: 'Infrastructure as Code (IaC)', percentage: 70 },
  { skill: 'Monitoring & Logging', percentage: 80 },
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
