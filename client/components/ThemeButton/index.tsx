import { useTheme } from "next-themes";
import Sun from '../../public/theme/sun.svg'
import Moon from '../../public/theme/moon.svg'
import React from "react";
import styles from './ThemeButton.module.css'

const ThemeButton = () => {
  const {theme, setTheme} = useTheme();
  const darkCode : string = "#1e2328";
  const lightCode : string = "#f3f3f3"
  const oppositeTheme : string = theme === 'light' ? darkCode : lightCode;
  return (
    <div className={styles.themeSwitch}>
      {
        theme === 'light' ? (
          <div className={styles.dashButton}>
            <button onClick={() => setTheme('dark')}>
              <Sun stroke={darkCode} />
            </button>
          </div>
        ) : (
          <div className={styles.dashButton}>
            <button onClick={() => setTheme('light')}>
              <Moon stroke={lightCode} />
            </button>
          </div>
        )
      }    
    </div>
  )
}

export default ThemeButton;