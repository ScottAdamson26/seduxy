// SentMessage.js
import React from "react";
import lucieImage from './images/square.png'; // Ensure this path is correct

const SentMessage = ({ message, showProfilePic }) => {
  return (
    <div className="flex items-center justify-end text-right">
      <div className="inline-block bg-gradient-to-r from-custom-pink to-custom-red text-white text-sm py-2 px-4 rounded-l-lg rounded-t-lg my-1 mr-2 shadow-custom">
        {message}
      </div>
      {showProfilePic ? (
        <img src={lucieImage} alt="Your Profile" className="w-8 h-8 ml-2 rounded-full"/>
      ) : (
        <div className="w-8 h-8 ml-2 opacity-0"></div>
      )}
    </div>
  );
};

export default SentMessage;
