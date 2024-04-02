// SentMessage.js
import React from "react";
import "./chatstream.css";

const SentMessage = ({ message, showProfilePic }) => {
  return (
    <div className="flex items-center justify-end text-right fadeIn">
      {/* Added fadeIn class here */}
      <div className="inline-block bg-gradient-to-r from-custom-pink to-custom-red text-white text-sm py-2 px-4 rounded-l-lg m-2 rounded-t-lg my-1 shadow-custom">
        {message}
      </div>
    </div>
  );
};

export default SentMessage;
