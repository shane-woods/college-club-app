import React, { useEffect, useState } from "react";
import styles from "./MessageList.module.css";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";
import { useTheme } from "next-themes";

type MessageType = {
  id: string;
  created_at: string;
  content: string;
  profile_id: string;
};

const MessageList = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const supabase = useSupabaseClient();
  const { theme } = useTheme();
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("messages").select("*");

      if (!data) {
        return;
      }

      setMessages(data);
    };
    getData();
  }, [messages]);

  const messageListTheme =
    theme === "light" ? styles.messageListLight : styles.messageListDark;

  return (
    <div className={messageListTheme}>
      {messages.map((message, i) => {
        return (
          <Message
            profile={message.profile_id}
            text={message.content}
            key={message.id}
            timeStamp={message.created_at}
          />
        );
      })}
    </div>
  );
};

type messageProps = {
  text: string | null;
  profile: string | null;
  timeStamp: string | null;
};

const Message = (props: messageProps) => {
  const user = useUser();
  if (user?.id === props.profile) {
    return (
      <div className={styles.userMessage}>
        <Image
          src={user.user_metadata.avatar_url}
          alt="User avatar"
          width={40}
          height={40}
        />
        {props.timeStamp}
        {props.text}
      </div>
    );
  }
  return <div className={styles.message}>{props.text}</div>;
};

export default MessageList;
