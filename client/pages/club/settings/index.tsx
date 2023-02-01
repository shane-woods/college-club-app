import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import DashNavBar from "../../../components/DashNavBar";
import styles from "./Settings.module.css";

const Settings = () => {
  const supabase = useSupabaseClient();
  const router = useRouter();

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    router.push("/login");
  }
  return (
    <div className={styles.settings}>
      <DashNavBar />
      <div className={styles.signout}>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Settings;
