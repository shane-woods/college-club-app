import React, { useEffect, useState } from "react";
import Account from "../../components/Account";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import DashNavBar from "../../components/DashNavBar";
import styles from './AccountPage.module.css'

const AccountPage = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    // if (!session) {
    //   router.push('http://localhost:3000/');
    // }
  }, [session])

  return (
    <div className={styles.accountPage}>
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