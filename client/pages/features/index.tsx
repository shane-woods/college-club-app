import React from "react";
import Navbar from "../../components/Navbar";
import styles from './Feature.module.css';

const Feature = () => {
  return (
    <div className={styles.feature}>
      <Navbar/>
      <FeatureHeader/>
    </div>
  )
}

const FeatureHeader = () => {
  return (
    <div className={styles.header}>
      <h1>Features</h1>
      <p>Powerful tools that help your organization grow</p>
    </div>
  )
}

export default Feature;