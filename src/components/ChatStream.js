import React from "react";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";

const ChatStream = ({ messages }) => {
  return (
    <div className="chat-stream text-white flex flex-col p-3 overflow-y-auto mb-1">
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
