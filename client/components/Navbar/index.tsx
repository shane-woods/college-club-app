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
      <Image alt="Company logo" src={logo} width={100} height={50}/>
      <Navitem path="login" name="Login"/>
      <Navitem path="about" name="About"/>
      <Navitem path="finances" name="Finances"/>
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