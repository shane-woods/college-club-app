import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Account from "../../components/Account";
import SignUp from "../../components/SignUp";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const session = useSession();
  const router = useRouter();
  const supabase = useSupabaseClient();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!session) {
    return (
      <div className={styles.signup}>
        <div className={styles.home}>
          <Link href="/">Home</Link>
        </div>
        <SignUp />
      </div>
    );
  } else {
    router.push("/dashboard");
  }
};

export default SignUpPage;
