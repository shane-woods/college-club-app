import React, { useEffect, useState } from "react";
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import styles from './Login.module.css'
import { useTheme } from "next-themes";
import Account from "../../components/Account";

const Login = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return null;
  }

  const authClass = theme === 'light' ? styles.authLight : styles.authDark;

  return (
    <div className={styles.login}>
      {!session ? ( 
        <div className={authClass}>
          <LoginHeader/>
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
            view="sign_in"
            />
        </div>
      ) : (
        <Account session={session}/>
      )}
    </div>
  )
}

const LoginHeader = () => {
  return (
    <div className={styles.header}>
      <h1>Login</h1>
    </div>
  )
}

export default Login;