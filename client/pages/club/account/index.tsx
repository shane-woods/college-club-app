import React, { useEffect, useState } from "react";
import Account from "../../../components/Account";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import styles from "./AccountPage.module.css";
import DashNavBar from "../../../components/DashNavBar";

const AccountPage = () => {
  const session = useSession();

  if (!session) {
    return <div></div>;
  } else {
    return (
      <div className={styles.accountPage}>
        <DashNavBar />
        <Account session={session} />
      </div>
    );
  }
};

export default AccountPage;
