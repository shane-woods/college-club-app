import React, { useEffect, useState } from "react";
import Account from "../../components/Account";
import styles from './Account.module.css'
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import DashNavBar from "../../components/DashNavBar";

const AccountPage = () => {
  const session = useSession();
  const router = useRouter();

  if (!session) {
    router.push('/');
  }

  return (
    <div className={styles.account}>
      <DashNavBar/>
      {!session ? (
        <div>

        </div>
      ) : (
        <Account session={session}/>
      )}
    </div>
  )
}

export default AccountPage;