import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import DashNavBar from "../../../components/DashNavBar";

import styles from "./Roster.module.css";

const Roster = () => {
  const router = useRouter();
  const session = useSession();

  return (
    <div className={styles.roster}>
      <DashNavBar />
    </div>
  );
};

export default Roster;
