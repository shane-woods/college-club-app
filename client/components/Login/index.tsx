import styles from "./Login.module.css";
import React, { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "@supabase/auth-ui-react/dist/esm/common/theming";
import Image from "next/image";
import googleLight from "../../public/google/btn_google_signin_light_normal_web@2x.png";
import googleLightPressed from "../../public/google/btn_google_signin_light_pressed_web@2x.png";
import googleDark from "../../public/google/btn_google_signin_dark_normal_web@2x.png";
import googleDarkPressed from "../../public/google/btn_google_signin_dark_pressed_web@2x.png";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const { theme } = useTheme();
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authenticating, setAuthenticating] = useState<boolean>(false);

  const loginTheme = theme === "light" ? styles.loginLight : styles.loginDark;

  async function signInWithEmail() {
    setAuthenticating(true);
    console.log(email);
    console.log(password);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (data) {
      setAuthenticating(false);
      router.push("/club/dashboard");
    }
  }

  function handleSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    signInWithEmail();
  }

  return (
    <div className={loginTheme}>
      <form method="post">
        <h1 className={styles.title}>Login</h1>
        <div className={styles.providers}>
          <GoogleIcon />
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
        {authenticating ? (
          <button className={styles.signin} onClick={(e) => handleSubmit(e)}>
            <div className={styles.spinningWheel}></div>
            Sign In
          </button>
        ) : (
          <button className={styles.signin} onClick={(e) => handleSubmit(e)}>
            Sign In
          </button>
        )}
        <div className={styles.signupLink}>
          <p>Don't have an account?</p>
          <Link href="/signup">Sign up here</Link>
        </div>
      </form>
    </div>
  );
};

const GoogleIcon = () => {
  const [isHovering, setIsHovering] = useState<Boolean>(false);
  const supabase = useSupabaseClient();
  const router = useRouter();
  const { theme } = useTheme();

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  if (theme === "light") {
    return (
      <div
        className={styles.google}
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
          <Image src={googleLight} alt="Google" width={191} height={46} />
        )}
      </div>
    );
  } else {
    return (
      <div
        className={styles.google}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={signInWithGoogle}
      >
        {isHovering ? (
          <Image src={googleDarkPressed} alt="Google" width={191} height={46} />
        ) : (
          <Image src={googleDark} alt="Google" width={191} height={46} />
        )}
      </div>
    );
  }
};

export default Login;
