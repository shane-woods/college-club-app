import React, { useState } from "react";
import styles from './ChatView.module.css'

const ChatView = () => {

  const [message, setMessage] = useState<string>('');
  const [messageList, setMessageList] = useState<string[]>([]);

  function handleEnter(event : any) {
    if (event.keyCode === 13) {
      setMessage('');
      setMessageList([...messageList, message])
    }
  }

  console.log(messageList);

  return (
    <div className={styles.chat}>
      <MessageList messageArg={messageList}/>
      <div className={styles.messageInput}>
        <input 
          type="text" 
          name="message"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => handleEnter(e)}/>
      </div>
    </div>
  )
}

type messageListProps = {
  messageArg : string[];
}

const MessageList = (props : messageListProps) => {
  return ( 
    <div className={styles.messageList}>
      {props.messageArg.map((message) => {
        return (
          <Message text={message}/>
        )
      })}
    </div>
  )
}

type messageProps = {
  text: string | null;
}

const Message = (props : messageProps) => {
  return (
    <div className={styles.message}>
      {props.text}
    </div>
  )
}

export default ChatView;