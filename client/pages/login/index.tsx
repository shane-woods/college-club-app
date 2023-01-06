import React, { useEffect, useState } from "react";
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import styles from './Login.module.css'
import { useTheme } from "next-themes";
import { isWhiteSpaceLike } from "typescript";

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
            providers = {['google', 'linkedin', 'facebook']} 
            />
        </div>
      ) : (
        <p>Account page will go here.</p>
      )}
    </div>
  )
}

export default Login;