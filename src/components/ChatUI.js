import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import lucieImage from './images/square.png';

const ChatUI = () => {
  return (
    <div className="App bg-gradient-to-b from-purple via--dark-purple to-dark-purple flex flex-col justify-center items-center text-center h-full w-full">
      <div className="flex flex-col items-center h-full text-white font-montserrat m-0 p-0 sm:w-full xl:w-3/4 xl:max-w-3xl mx-auto">
        <div className="flex justify-center m-0 mb-4 p-0 h-10p">
          <a href="/">
            <img
              src="/seduxy.webp"
              alt="Seduxy Logo"
              className="h-full drop-shadow-xl"
            />
          </a>
        </div>

        <div className="h-90p w-full">
          <div className="rounded-tl-xl rounded-tr-xl bg-gradient-to-r from-custom-pink via-custom-red to-custom-yellow p-1 w-full shadow-custom h-10p">
            <div className="flex items-center justify-start rounded-tl-lg rounded-tr-lg bg-black bg-opacity-70 w-full shadow-custom h-full p-5">
              {/* Image */}
              <img
                src={lucieImage}
                alt="Lucie"
                className="w-10 h-10 mr-4 rounded-full" // Adjust size as needed
              />
              {/* Text */}
              <h1 className="font-bold text-white text-xl">Eve</h1>
            </div>
          </div>

          <div className="rounded-br-xl rounded-bl-xl bg-gradient-to-r from-purple via-darkish-p to-purple pl-1 pr-1 pb-1 mb-3 w-full shadow-custom h-90p">
            <div className="flex flex-col justify-end rounded-bl-lg rounded-br-lg bg-black bg-opacity-40 mx-auto p-3 w-full h-full">
              <div className="flex-grow">{/* Content area */}</div>

              <div className="p-1 w-full flex flex-row">
                <input
                  type="text"
                  placeholder="Type a message"
                  className="w-full p-2 pl-4 rounded-l-lg bg-opacity-30 bg-white text-white placeholder-gray-300 flex-grow shadow-custom"
                />
                <button className="bg-gradient-to-r from-custom-pink to-custom-red text-white px-4 p-2 rounded-r-lg">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
