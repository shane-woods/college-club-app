import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Account from "../../components/Account";
import styles from './SignUp.module.css'

const SignUp = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const {theme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return null;
  }

  const authClass = theme === 'light' ? styles.authLight : styles.authDark;

  return (
    <div className={styles.signup}>
      {!session ? ( 
        <div className={authClass}>
          <SignUpHeader/>
          <Auth 
            supabaseClient={supabase} 
            appearance={{ 
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    inputBackground:'white'
                  }
                }
              }
             }} 
            theme={theme}
            providers = {['google']}
            redirectTo="http://localhost:3000/dashboard"
            view="sign_up"
            />
        </div>
      ) : (
        <Account session={session}/>
      )}
    </div>
  )
}

const SignUpHeader = () => {
  return (
    <div className={styles.header}>
      <h1>Sign Up</h1>
    </div>
  )
}

export default SignUp;