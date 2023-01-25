import React, { useEffect, useState } from "react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import styles from "./LoginPage.module.css";
import { useTheme } from "next-themes";
import Account from "../../components/Account";
import Home from "../../public/dash-icons/home.svg";
import Login from "../../components/Login";
import { useRouter } from "next/router";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();
  const session = useSession();
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
      <div className={styles.login}>
        <div className={styles.home}>
          <Link href="/">
            <Home stroke={oppositeTheme} />
          </Link>
        </div>
        <Login />
      </div>
    );
  } else {
    router.push("/club/dashboard");
  }
};

export default LoginPage;
