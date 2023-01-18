import React, { useEffect, useState } from "react";
import styles from "./MessageList.module.css";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";

type MessageType = {
  id: string;
  created_at: string;
  content: string;
  profile_id: string;
};

const MessageList = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const supabase = useSupabaseClient();
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("messages").select("*");

      if (!data) {
        alert("no data");
        return;
      }

      setMessages(data);
    };
    getData();
  }, [messages]);

  return (
    <div className={styles.messageList}>
      {messages.map((message, i) => {
        if (i % 2 === 0) {
          return (
            <Message profile={"0"} text={message.content} key={message.id} />
          );
        }
        return (
          <Message
            profile={message.profile_id}
            text={message.content}
            key={message.id}
          />
        );
      })}
    </div>
  );
};

type messageProps = {
  text: string | null;
  profile: string | null;
};

const Message = (props: messageProps) => {
  const user = useUser();
  console.log(user);
  if (user?.id === props.profile) {
    return (
      <div className={styles.userMessage}>
        <Image
          src={user.user_metadata.avatar_url}
          alt="User avatar"
          width={40}
          height={40}
        />
        {props.text}
      </div>
    );
  }
  return <div className={styles.message}>{props.text}</div>;
};

export default MessageList;
