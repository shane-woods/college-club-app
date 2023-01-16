import Image from "next/image";
import React, { useEffect, useState } from "react"
import Navbar from "../../components/Navbar";
import styles from './Pricing.module.css'
import Check from '../../public/pricing/check-circle.svg'
import { useTheme } from "next-themes";

type TierProps = {
  theme:string | undefined;
}

const Pricing = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.pricing}>
      <Navbar/>
      <PriceHeader/>
      <div className={styles.plansContainer}>
        <div className={styles.plans}>
          <FreeTier theme={theme}/>
          <MiddleTier theme={theme}/>
          <TopTier theme={theme}/>
        </div>
      </div>
    </div>
  )
}

const PriceHeader = () => {
  return (
    <div className={styles.header}>
      <h1>Pricing</h1>
      <p>Affordable rates that can fit any budget</p>
    </div>
  )
}

const FreeTier = (tierProps : TierProps) => {
  const tierClass = tierProps.theme === 'light' ? styles.tierLight : styles.tierDark;
  return (
    <div className={tierClass}>
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

const MiddleTier = (tierProps : TierProps) => {
  const tierClass = tierProps.theme === 'light' ? styles.tierLight : styles.tierDark;
  return (
    <div className={tierClass}>
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

const TopTier = (tierProps : TierProps) => {
  const tierClass = tierProps.theme === 'light' ? styles.tierLight : styles.tierDark;
  return (
    <div className={tierClass}>
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
      <Check />
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