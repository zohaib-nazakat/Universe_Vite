import styles from "./sidenav.module.css"
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import SchoolIcon from '@mui/icons-material/School';
import { navData } from "./lib/navData";
import { useState } from "react";

export default function Sidenav() {
    const [open, setopen] = useState(true)
    const toggleOpen = () => {
        setopen(!open)
    }
  return (
    <>
    
    <div className={open?styles.sidenav:styles.sidenavClosed}>
    <button className={styles.menuBtn} onClick={toggleOpen}>
            {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
        </button>
        <div>
            <span className={`${styles.sidenav_icon}`}><SchoolIcon/></span>
            <h2 className={`${styles.heading}`}>Universe</h2>
            <p className={` ${styles.heading}`}>Welcome!</p> 
        </div>

        
        {navData.map(item =>{
            return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            {item.icon}
            <span className={styles.linkText}>{item.text}</span>
        </NavLink>
        })}
        <br />
       
        <span className={`mt-4 ${styles.sideitem}`}> <Login/>  <p className={`mt-5 ${styles.linkText}`}>Login</p></span>
        
    </div>
    </>
  )
}
