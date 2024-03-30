import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faImage } from "@fortawesome/free-solid-svg-icons";
import lucieImage from "./images/square.png";
import Header from "./Header";
import { Tooltip } from "@material-tailwind/react";

const ChatUI = () => {
  return (
    <div className="App bg-gradient-to-b from-purple via--dark-purple to-dark-purple flex flex-col justify-center items-center text-center p-4 h-screen">
        <div className="flex flex-col items-center h-full text-white font-montserrat m-0 p-0 w-full xl:w-3/4 xl:max-w-3xl mx-auto">
          {/* header */}
          <Header />

          {/* Body container */}
          <div className="h-90p w-full relative shadow-custom">
            {/* Nameplate */}
            <div className="relative z-10 rounded-xl shadow-xl bg-gradient-to-r from-custom-pink via-custom-red to-custom-yellow p-1 w-full h-10p">
              <div className="flex items-center justify-start rounded-lg bg-black bg-opacity-70 w-full h-full p-5">
                <img
                  src={lucieImage}
                  alt="Lucie"
                  className="w-10 h-10 mr-4 rounded-full"
                />
                <h1 className="font-bold text-white text-xl">Eve</h1>
              </div>
            </div>

            {/* Chat box */}
            <div className="absolute top-0 z-0 rounded-br-xl rounded-bl-xl bg-gradient-to-r from-purple via-darkish-p to-purple pl-1 pr-1 pb-1 mb-3 w-full h-full mt-[calc7%-1rem)]">
              <div className="flex flex-col justify-end rounded-bl-lg rounded-br-lg bg-black bg-opacity-40 mx-auto p-3 w-full h-full">
                {/* Message input */}
                <div className="p-1 w-full flex flex-row">
                  <Tooltip
                    content="Coming soon"
                    className="p-2 font-montserrat font- z-10  bg-white bg-opacity-30 backdrop-blur-lg shadow-custom pl-3 pr-3"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <button className="bg-white bg-opacity-30 backdrop-blur-lg mr-2 rounded- px-3 rounded-lg leading-none">
                      <FontAwesomeIcon icon={faImage} className="" />
                    </button>
                  </Tooltip>
                  <input
                    type="text"
                    placeholder="Type a message"
                    className="w-full p-2 pl-3 rounded-l-lg bg-opacity-30 bg-white text-white placeholder-gray-300 flex-grow shadow-custom focus:outline-none text-sm"
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
