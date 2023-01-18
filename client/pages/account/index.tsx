import React, { useEffect, useState } from "react";
import Account from "../../components/Account";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import DashNavBar from "../../components/DashNavBar";
import styles from './AccountPage.module.css'

const AccountPage = () => {
  const router = useRouter();
  const session = useSession();

  if (!session) {
    router.push('/login');
  } else {
    return (
      <div className={styles.accountPage}>
        <DashNavBar/>
        <Account session={session}/>
      </div>
    )
  }

}

export default AccountPage;