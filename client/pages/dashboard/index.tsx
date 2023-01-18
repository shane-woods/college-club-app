import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React from "react";
import DashNavBar from "../../components/DashNavBar";
import styles from './Dashboard.module.css'


const Dashboard = () => {
  const router = useRouter();
  const session = useSession();

  if (!session) {
    router.push('/login')
  }
  return (
    <div className={styles.dashboard}>
      <DashNavBar/>
      {/* Will need a side navbar
          Main page will show organizations
          Will allow you to add new organizations 
          */}
    </div>
  )
};

export default Dashboard;