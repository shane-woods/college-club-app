import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DashNavBar from "../../../components/DashNavBar";
import Organizations from "../../../components/Organizations";
import { Database } from "../../../utils/database.types";
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [username, setUsername] = useState<Profiles["username"]>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const user = useUser();
  const supabase = useSupabaseClient();

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username`)
        .eq("id", user.id)
        .single();

      if (data?.username) {
        setUsername(data.username);
      } else {
        setUsername("user");
      }

      if (error && status !== 406) {
        throw error;
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.dashboard}>
      <DashNavBar />
      {loading ? <h1>Loading</h1> : <h1>Welcome Back {username} 👋!</h1>}
      <Organizations />

      {/* Will need a side navbar
          Main page will show organizations
          Will allow you to add new organizations 
          */}
    </div>
  );
};

export default Dashboard;
