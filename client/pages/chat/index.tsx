import React from "react";
import ChatView from "../../components/ChatView";
import DashNavBar from "../../components/DashNavBar";
import styles from './Chat.module.css'

const Chat = () => {

  return (
    <div className={styles.chat}>
      <DashNavBar/>
      <ChatView/>
    </div>
  )
}

export default Chat;