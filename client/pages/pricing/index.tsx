import Image from "next/image";
import React from "react"
import Navbar from "../../components/Navbar";
import styles from './Pricing.module.css'
import check from '../../public/pricing/check-circle.svg'

const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <Navbar/>
      <div className={styles.plans}>
        <div>
          <FreeTier/>
        </div>
        <div>
          <MiddleTier/>
        </div>
        <div>
          <TopTier/>
        </div>
      </div>
    </div>
  )
}

const FreeTier = () => {
  return (
    <div className={styles.tier}>
      <h2>Free</h2>
      <p className={styles.orgSize}>For organizations with less than 12 members</p>
      <div className={styles.monthly}>
        <h2>$0</h2>
        <p>/month</p>
      </div>
      <Feature/>
      <Feature/>
      <Feature/>
      <Subscribe/>
    </div>
  )
}

const MiddleTier = () => {
  return (
    <div className={styles.tier}>
      <h2>Growing</h2>
      <p className={styles.orgSize}>For organizations with 13 - 49 members</p>
      <div className={styles.monthly}>
        <h2>$12</h2>
        <p>/month</p>
      </div>
      <Feature/>
      <Feature/>
      <Feature/>
      <Subscribe/>
    </div>
  )
}

const TopTier = () => {
  return (
    <div className={styles.tier}>
      <h2>Established</h2>
      <p className={styles.orgSize}>For organizations with 50+ members</p>
      <div className={styles.monthly}>
        <h2>$23</h2>
        <p>/month</p>
      </div>
      <Feature/>
      <Feature/>
      <Feature/>
      <Subscribe/>
    </div>
  )
}

const Feature = () => {
  return (
    <div className={styles.feature}>
      <Image src={check} alt="checkmark" width={20} height={20}/>
      <p>Feature</p>
    </div>
  )
}

const Subscribe = () => {

  return (
    <button className={styles.subscribe}>
      Subscribe
    </button>
  )
}

export default Pricing;