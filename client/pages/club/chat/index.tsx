import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ChatView from "../../../components/ChatView";
import DashNavBar from "../../../components/DashNavBar";
import styles from "./Chat.module.css";

const Chat = () => {
  return (
    <div className={styles.chat}>
      <DashNavBar />
      <ChatView />
    </div>
  );
};

export default Chat;
