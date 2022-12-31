import React from "react";
import styles from './Login.module.css'

const Login = () => {
  return (
    <div className={styles.login}>
      <form>
        <label>
          <p>Username</p>
          <input type="text"/>
        </label>
        <label>
          <p>Password</p>
          <input type="text"/>
        </label>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  )
}

export default Login;