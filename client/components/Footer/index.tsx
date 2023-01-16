import React from "react";
import styles from './Footer.module.css';
import Instagram from '../../public/footer-icons/instagram.svg';
import Linkedin from '../../public/footer-icons/linkedin.svg';
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Socials/>
    </div>
  )
}

const Socials = () => {
  const {theme, setTheme} = useTheme();

  const darkCode : string = "#1e2328";
  const lightCode : string = "#f3f3f3"
  const oppositeTheme : string = theme === 'light' ? darkCode : lightCode;

  return (
    <div className={styles.socials}>
      <Link href="#">
        <Instagram stroke={oppositeTheme}/>
      </Link>
      <Link href="#">
        <Linkedin stroke={oppositeTheme}/>
      </Link>
    </div>
  )
}

export default Footer;