import styles from './Navbar.module.css'
import React from 'react'
import Link from 'next/link';
import logo from '../../public/logo.png'
import Image from 'next/image';

interface NavProp {
  path:string;
  name:string;
};

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image alt="Company logo" src={logo} width={100} height={50}/>
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
      </div>
    </div>
  )
}

const Navitem = (navitem : NavProp) => {
  return (
    <div className={styles.navitem}>
      <Link href={'/' + navitem.path}>{navitem.name}</Link>
    </div>
  )
}

export default Navbar;