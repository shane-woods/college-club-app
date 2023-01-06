import styles from './Navbar.module.css'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import logo from '../../public/theme/logo.png'
import moon from '../../public/theme/moon.svg'
import sun from '../../public/theme/sun.svg'
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

type NavItemProp = {
  path:string;
  name:string;
  showSelected:boolean;
};

const Navbar = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className={styles.navbar}>
        <nav className={styles.navSection}>
          <Navitem showSelected={false} path="" name="Logo Will Go Here"/>
        </nav>
        <nav className={styles.navSection}>
          <Navitem showSelected={true} path="about" name="About"/>
          <Navitem showSelected={true} path="pricing" name="Pricing"/>
          <Navitem showSelected={true} path="features" name="Features"/>
        </nav>
        <nav className={styles.navSection}>
          <Navitem showSelected={false} path="login" name="Login"/>
          <div className={styles.signup}>
            <Navitem showSelected={false} path="sign-up" name="Get Started"/>
          </div>      
          <div className={styles.themeSwitch}>
            {
              theme === 'light' ? (
                <button onClick={() => setTheme('dark')}>
                  <Image alt="image of moon" src={moon} width={25} height={25}/>
                </button>
              ) : (
                <button onClick={() => setTheme('light')}>
                  <Image alt="image of sun" src={sun} width={25} height={25}/>
                </button>
              )
            }    
          </div>
        </nav>
      </div>
    </>
  )
}

const Navitem = (navitem : NavItemProp) => {
  const router = useRouter();
  if ((router.pathname === "/" + navitem.path) && navitem.showSelected) {
    return (
      <div className={styles.selected}>
        <Link href={'/' + navitem.path}>{navitem.name}</Link>
      </div>
    )
  } else {
    return (
      <div className={styles.navitem}>
        <Link href={'/' + navitem.path}>{navitem.name}</Link>
      </div>
    )
  }
}


export default Navbar;