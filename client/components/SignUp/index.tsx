import React, { useState } from "react";
import styles from './SignUp.module.css'
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "@supabase/auth-ui-react/dist/esm/common/theming";
import Image from "next/image";
import googleLight from '../../public/google/btn_google_signin_light_normal_web@2x.png'
import googleLightPressed from '../../public/google/btn_google_signin_light_pressed_web@2x.png'
import googleDark from '../../public/google/btn_google_signin_dark_normal_web@2x.png'
import googleDarkPressed from '../../public/google/btn_google_signin_dark_pressed_web@2x.png'
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Link from "next/link";

const SignUp = () => {

  const supabase = useSupabaseClient();
  const {theme} = useTheme();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmed, setConfirmed] = useState<string>('');

  const signUpTheme = theme === 'light' ? styles.signupLight : styles.signupDark;

  async function signUpWithEmail() { 
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
  }

  function handleSubmit(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    if (confirmed === password) {
      signUpWithEmail();
    }
  }

  return (
    <div className={signUpTheme}>
      <form method="post">
        <h1 className={styles.title}>Sign Up</h1>
        <div className={styles.providers}>
          <GoogleIcon/>
        </div>
        <div className={styles.email}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.password}>
          <label>Password</label>
          <input 
            type="password"
            name="password"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className={styles.password}>
          <label>Confirm Password</label>
          <input 
            type="password"
            name="confirmed"
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            value={confirmed}
            onChange={(e) => setConfirmed(e.target.value)}
            />
        </div>              
        <button 
          onClick={(e) => handleSubmit(e)}
          className={styles.signupButton}
        >Sign Up</button>
        <div className={styles.signinLink}>
          <p>Already have an account?</p>
          <Link href="/login">Sign in here</Link>
        </div>
        </form>
    </div>
  )
}

const GoogleIcon = () => {

  const [isHovering, setIsHovering] = useState<Boolean>(false);
  const supabase = useSupabaseClient();
  const {theme, setTheme} = useTheme();

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  if (theme === 'light') {
    return (
      <div className={styles.google}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={signInWithGoogle}
      >
        {isHovering ? (
          <Image 
            src={googleLightPressed} 
            alt="Google"
            width={191}
            height={46}
          />
    
        ) : (
          <Image 
            src={googleLight} 
            alt="Google"
            width={191}
            height={46}
          />
        )}
      </div>
      )
  } else {
    return (
      <div className={styles.google}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={signInWithGoogle}
      >
        {isHovering ? (
          <Image 
            src={googleDarkPressed} 
            alt="Google"
            width={191}
            height={46}
          />
    
        ) : (
          <Image 
            src={googleDark} 
            alt="Google"
            width={191}
            height={46}
          />
        )}
      </div>
      )
  }
  
}

export default SignUp;