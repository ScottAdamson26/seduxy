import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faImage } from "@fortawesome/free-solid-svg-icons";
import lucieImage from "./images/square.png";
import Header from "./Header";
import { Tooltip } from "@material-tailwind/react";
import ChatStream from "./ChatStream";
import { useState } from "react";

const ChatUI = () => {
  // At the beginning of your ChatUI component definition
  const [messages, setMessages] = useState([
    // Your initial messages here
  ]);
  const [inputValue, setInputValue] = useState("");

  const simulateApiCall = (message) => {
    console.log("Sending message to API:", message);
    // Simulate a delay
    return new Promise((resolve) => setTimeout(() => resolve(message), 500));
  };

  const handleSendMessage = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const newMessage = {
      id: Date.now(), // Simple unique ID generation for the user message
      sender: "you",
      text: inputValue,
    };

    // Simulate the API call
    simulateApiCall(newMessage).then(() => {
      // Add the user's message
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Create and add a confirmation message
      const confirmationMessage = {
        id: Date.now() + 1, // Ensure a unique ID for the confirmation message
        sender: "them", // Assuming "them" represents the system or bot
        text: "Your message has been received.",
      };

      // Simulate a slight delay before showing the confirmation to mimic network latency
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, confirmationMessage]);
      }, 200);

      setInputValue(""); // Clear the input after sending
    });
  };

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
              <ChatStream messages={messages} />

              {/* Message input */}
              <div className="p-1 w-full flex flex-row">
                <Tooltip
                  content="Coming soon"
                  className="p-2 font-montserrat font-z-10 bg-white bg-opacity-30 backdrop-blur-lg shadow-custom pl-3 pr-3"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <button className="bg-white bg-opacity-30 backdrop-blur-lg mr-2 rounded- px-3 rounded-lg leading-none">
                    <FontAwesomeIcon icon={faImage} className="" />
                  </button>
                </Tooltip>
                <form
                  onSubmit={handleSendMessage}
                  className="w-full flex flex-row"
                >
                  <input
                    type="text"
                    placeholder="Type a message"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full p-2 pl-3 rounded-l-lg bg-opacity-30 bg-white text-white placeholder-gray-300 flex-grow shadow-custom focus:outline-none text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-custom-pink to-custom-red text-white px-4 p-2 rounded-r-lg"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
