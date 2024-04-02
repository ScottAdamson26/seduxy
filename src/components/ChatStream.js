import React, { useEffect, useRef } from "react";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";

const ChatStream = ({ messages }) => {
  const chatStreamRef = useRef(null); // Create a ref for the chat stream div

  useEffect(() => {
    // This function runs whenever the messages array changes.
    if (chatStreamRef.current) {
      const { scrollHeight, clientHeight } = chatStreamRef.current;
      chatStreamRef.current.scrollTo({
        left: 0,
        top: scrollHeight - clientHeight,
        behavior: 'smooth' // Optional: add smooth scrolling
      });
    }
  }, [messages]); // Dependency array, ensures effect runs when messages change

  return (
    <div className="chat-stream text-white flex flex-col pb-1 overflow-y-auto mb-1 pt-20" ref={chatStreamRef}>
      {messages.map((message, index) => {
        const isLastInBurst = index === messages.length - 1 || messages[index + 1].sender !== message.sender;
        const MessageComponent = message.sender === "you" ? SentMessage : ReceivedMessage;

        return (
          <MessageComponent
            key={message.id}
            message={message.text}
            showProfilePic={isLastInBurst} // Pass this prop to show/hide the profile pic
          />
        );
      })}
    </div>
  );
};

export default ChatStream;
