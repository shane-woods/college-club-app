import React from "react";
import Navbar from "../../components/Navbar";
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <Navbar/>
      <AboutHeader/>
    </div>
  )
}

const AboutHeader = () => {
  return (
    <div className={styles.header}>
      <h1>About</h1>
      <p>Who we are, and how we can help you.</p>
    </div>
  )
}

export default About;