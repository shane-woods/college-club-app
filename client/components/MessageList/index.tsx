import React, { useEffect, useState } from "react";
import styles from "./MessageList.module.css";
import { User, useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import defaultAvi from "../../public/defaultAvi.png";

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
      {messages.map((message) => {
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
  profile: string;
  timeStamp: string | null;
};

type OtherUserMessage = {
  avatar_url: string;
};

const Message = (props: messageProps) => {
  const user = useUser();
  const supabase = useSupabaseClient();
  const [otherUser, setOtherUser] = useState<OtherUserMessage | null>(null);

  async function getOtherUser() {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", props.profile)
      .maybeSingle();

    if (error) {
      return;
    }

    setOtherUser(data);
  }

  if (user?.id === props.profile) {
    return (
      <div className={styles.userMessage}>
        <Image
          src={user.user_metadata.avatar_url}
          alt="User avatar"
          width={40}
          height={40}
        />
        <div className={styles.content}>
          <p>{props.timeStamp}</p>
          <p className={styles.messageText}>{props.text}</p>
        </div>
      </div>
    );
  } else {
    getOtherUser();
    return (
      <div className={styles.message}>
        <Image
          src={otherUser?.avatar_url ? otherUser.avatar_url : defaultAvi}
          alt="User avatar"
          width={40}
          height={40}
        />
        <p className={styles.messageText}>{props.text}</p>
      </div>
    );
  }
};

export default MessageList;
