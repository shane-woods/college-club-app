import React, { useEffect, useState } from "react";
import styles from './DashNavBar.module.css'
import finance from '../../public/dash-icons/dollar-sign.svg'
import chat from '../../public/dash-icons/message-square.svg'
import roster from '../../public/dash-icons/users.svg'
import settings from '../../public/dash-icons/settings.svg'
import sun from '../../public/theme/sun.svg'
import moon from '../../public/theme/moon.svg'
import Image from "next/image";
import { useTheme } from "next-themes";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

type NavItemProp = {
  src:string,
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
  console.log(theme);
  
  return (
    <div className={styles.dashNav}>
      <div className={styles.logo}>
          <Link href="/">LOGO</Link>
      </div>
      <div className={styles.tools}>
        <Navitem src={chat} alt='chat icon' width={iconSize} height={iconSize}/>
        <Navitem src={finance} alt='finance icon' width={iconSize} height={iconSize}/>
        <Navitem src={roster} alt='roster icon' width={iconSize} height={iconSize}/>
      </div>
      <div className={styles.user}>
      <UserButton afterSignOutUrl="http://localhost:3000/"/>
      <Navitem src={settings} alt='settings icon' width={iconSize} height={iconSize}/>
        <div className={styles.themeSwitch}>
          {
            theme === 'light' ? (
              <button onClick={() => setTheme('dark')}>
                <Image alt="image of moon" src={moon} width={iconSize} height={iconSize}/>
              </button>
            ) : (
              <button onClick={() => setTheme('light')}>
                <Image alt="image of sun" src={sun} width={iconSize} height={iconSize}/>
              </button>
            )
          }    
        </div>
      </div>
    </div>
  )
}

const Navitem = (navitemprop:NavItemProp) => {
  return (
    <div className={styles.navitem}>
      <Image src={navitemprop.src}
        alt={navitemprop.alt} 
        width={navitemprop.width}
        height={navitemprop.height}
      />
    </div>
  )
}

export default DashNavBar;