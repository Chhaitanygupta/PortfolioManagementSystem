import styles from './NavBar.module.css'
import { GiTakeMyMoney } from "react-icons/gi";
import { BiSolidUser } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react';
function NavBar() {
    const [ showNavBar, setShowNavBar ] = useState(false);
    return (
        <>
        <div className={`${styles.containerMain}`}>
            <div className={`${styles.containerOther}`}>
            <a href='/' className={`${styles.logoContainer}`}>
                <GiTakeMyMoney className={`${styles.logo}`}/>
                <h2>
                    PORTFOLIO<br />
                    <span>Mangement</span>
                </h2>
            </a>
            <div className={`${styles.hamburgerContainer}`} onClick={()=>{setShowNavBar((prevState)=>{return !prevState})}}>
                <RxHamburgerMenu className={`${styles.hamburgerIcon}`}/>
            </div>
            </div>
            <div className={`${styles.tabViewDiv} ${showNavBar?styles.notshowNavBar : 'null'}`}>
            <div className={`${styles.linkContainer}`}>
                <a href='/'>Home</a>
                <a href='/risk-sustainability'> Risk Sustainablity</a>
                <a href='?signup=1'>Sign In/Sign Up</a>
            </div>
            </div>
        </div>
        {/* <div className={`${styles.}`}></div> */}
        </>
    )
}

export default NavBar