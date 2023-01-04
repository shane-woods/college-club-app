import styles from './Navbar.module.css'
import React from 'react'
import Link from 'next/link';
import logo from '../../public/theme/logo.png'
import moon from '../../public/theme/moon.svg'
import sun from '../../public/theme/sun.svg'
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { useTheme } from 'next-themes';

type NavItemProp = {
  path:string;
  name:string;
};

type NavbarProp = {
  signedIn:boolean;
}

const Navbar = () => {
  const {theme, setTheme} = useTheme();
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Navitem path="" name="Logo Will Go Here"/>
        </div>
        <nav className={styles.navigation}>
          <Navitem path="about" name="About"/>
          <Navitem path="pricing" name="Pricing"/>
          <Navitem path="features" name="Features"/>
        </nav>
        <div className={styles.account}>
          <Navitem path="sign-in" name="Login"/>
          <div className={styles.signup}>
            <Navitem path="sign-up" name="Get Started"/>
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
        </div>
      </div>
    </>
  )
}

const Navitem = (navitem : NavItemProp) => {
  return (
    <div className={styles.navitem}>
      <Link href={'/' + navitem.path}>{navitem.name}</Link>
    </div>
  )
}

export default Navbar;