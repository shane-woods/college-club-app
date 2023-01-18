import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React from "react";
import ChatView from "../../components/ChatView";
import DashNavBar from "../../components/DashNavBar";
import styles from "./Chat.module.css";

const Chat = () => {
  // const router = useRouter();
  // const session = useSession();

  // if (!session) {
  //   router.push('/login')
  // }

  return (
    <div className={styles.chat}>
      <DashNavBar />
      <ChatView />
    </div>
  );
};

export default Chat;
