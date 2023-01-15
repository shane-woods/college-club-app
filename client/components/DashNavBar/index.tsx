import React, { useEffect, useState } from "react";
import styles from './DashNavBar.module.css'
import Finance from '../../public/dash-icons/dollar-sign.svg'
import Chat from '../../public/dash-icons/message-square.svg'
import Roster from '../../public/dash-icons/users.svg'
import Settings from '../../public/dash-icons/settings.svg'
import Sun from '../../public/theme/sun.svg'
import Moon from '../../public/theme/moon.svg'
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

type NavItemProp = {
  src: string,
  alt:string,
  width:number,
  height:number
}

const DashNavBar = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return null;
  }

  const iconSize : number = 25;
  const darkCode : string = "#1e2328";
  const lightCode : string = "#f3f3f3"
  const oppositeTheme : string = theme === 'light' ? darkCode : lightCode;
  
  return (
    <div className={styles.dashNav}>
      <div className={styles.logo}>
          <Link href="/">LOGO</Link>
      </div>
      <div className={styles.tools}>
        <div className={styles.dashButton}>
          <Chat stroke={oppositeTheme}/>
        </div>
        <div className={styles.dashButton}>
          <Finance stroke={oppositeTheme}/>
        </div>
        <div className={styles.dashButton}>
          <Roster stroke={oppositeTheme}/>
        </div>
      </div>
      <div className={styles.user}>
        <Settings stroke={oppositeTheme} />
        <div className={styles.themeSwitch}>
          {
            theme === 'light' ? (
              <button onClick={() => setTheme('dark')}>
                <Sun stroke={darkCode} />
              </button>
            ) : (
              <button onClick={() => setTheme('light')}>
                <Moon stroke={lightCode} />
              </button>
            )
          }    
        </div>
      </div>
    </div>
  )
}

export default DashNavBar;