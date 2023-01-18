import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React from "react";
import DashNavBar from "../../components/DashNavBar";
import styles from './Settings.module.css'

const Settings = () => {

  const router = useRouter();
  const session = useSession();

  if (!session) {
    router.push('/login')
  }

  return (
    <div className={styles.settings}>
      <DashNavBar/>
    </div>
  )
}

export default Settings;