import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useState } from "react";
import MessageList from "../MessageList";
import styles from "./ChatView.module.css";

const ChatView = () => {
  const [message, setMessage] = useState<string>("");
  const supabase = useSupabaseClient();
  async function handleEnter(event: any) {
    if (event.keyCode === 13) {
      if (typeof message === "string" && message.length !== 0) {
        setMessage("");
        const { error, data } = await supabase.from("messages").insert({
          content: message,
          created_at: new Date().toLocaleDateString("en-US"),
        });
        console.log({ error, data });
      }
    }
  }

  return (
    <div className={styles.chat}>
      <MessageList />
      <div className={styles.messageInput}>
        <input
          type="text"
          name="message"
          autoComplete="off"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => handleEnter(e)}
        />
      </div>
    </div>
  );
};

export default ChatView;
