// ReceivedMessage.js
import React from "react";
import lucieImage from './images/square.png'; // Ensure this path is correct

const ReceivedMessage = ({ message, showProfilePic }) => {
  return (
    <div className="flex items-center text-left">
      {/* Conditionally render the profile picture or an empty space to keep alignment */}
      <div className="w-8 h-8 ml-2">
        {showProfilePic ? (
          <img src={lucieImage} alt="Sender's Profile" className="w-8 h-8 rounded-full"/>
        ) : (
          <div className="w-8 h-8"></div> // Invisible placeholder to maintain alignment
        )}
      </div>
      <div className="inline-block text-white text-sm py-2 px-4 rounded-r-lg rounded-t-lg my-1 ml-2 shadow-custom bg-white bg-opacity-30 backdrop-blur-lg ">
        {message}
      </div>
    </div>
  );
};

export default ReceivedMessage;
