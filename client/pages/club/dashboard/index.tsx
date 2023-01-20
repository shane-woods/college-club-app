import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import DashNavBar from "../../../components/DashNavBar";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <DashNavBar />
      {/* Will need a side navbar
          Main page will show organizations
          Will allow you to add new organizations 
          */}
    </div>
  );
};

export default Dashboard;
