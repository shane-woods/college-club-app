import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Home from "../../public/dash-icons/home.svg";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Account from "../../components/Account";
import SignUp from "../../components/SignUp";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const session = useSession();
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const darkCode: string = "#1e2328";
  const lightCode: string = "#f3f3f3";
  const oppositeTheme: string = theme === "light" ? darkCode : lightCode;

  if (!session) {
    return (
      <div className={styles.signup}>
        <div className={styles.home}>
          <Link href="/">
            <Home stroke={oppositeTheme} />
          </Link>
        </div>
        <SignUp />
      </div>
    );
  } else {
    router.push("/dashboard");
  }
};

export default SignUpPage;
