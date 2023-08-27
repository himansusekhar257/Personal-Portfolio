import React from 'react'
import css from './Header.module.scss'
import {BiMenuAltRight, BiPhoneCall} from 'react-icons/bi'
import {motion} from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { useState } from 'react'
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow()
  return (
    <motion.div 
    initial = "hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once: false, amount: 0.25}}
    className={`paddings ${css.wrapper}`
              }
     style={{boxShadow: headerShadow}}
    >
        <div className={`flexCenter innerWidth ${css.container}`}>
            <div className={css.name}>
                Himansu
            </div>

            <ul
              style={getMenuStyles(menuOpened)}
            className={`flexCenter ${css.menu}`}>
                <li><a href="#experties">Services</a></li>
                <li><a href="#work">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#skill">Skill</a></li>
                <li className={`flexCenter ${css.phone}`}>
                    <p>+91 7682045719</p>
                    <BiPhoneCall size={"40px"}/>
                </li>
            </ul>
            <div className={css.menuIcon}
            onClick={()=>setMenuOpened((prev)=>!prev)}
            >
                <BiMenuAltRight size={30}/>
            </div>
        </div>
    </motion.div>
  )
}

export default Header