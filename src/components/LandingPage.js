// LandingPage.js
import React from 'react';
import Modal from './Modal'; // Adjust the path as necessary

const LandingPage = ({ toggleModal, isModalOpen }) => {
  return (
    <>
      <div className="w-full flex justify-center absolute top-0 pt-4">
        <img src="/seduxy.webp" alt="Seduxy Logo" className="scale-50 mt-20 drop-shadow-xl" />
      </div>
      <div className="max-w-2xl flex flex-col items-center mt-20">
        <h1 className="font-montserrat font-bold text-4xl tracking-wider text-white">
          The <span className="bg-gradient-to-r from-custom-pink to-custom-red text-white inline-block text-transparent bg-clip-text">#1</span> AI Girlfriend Experience
        </h1>
        <div className="max-w-lg mt-4">
          <h2 className="font-montserrat font-light text-white text-lg opacity-70">
            Sign up now for early access to AI models capable of fulfilling your every fantasy.
          </h2>
        </div>
        <button
          onClick={toggleModal}
          className="mt-4 bg-gradient-to-r from-custom-pink to-custom-red text-white font-bold py-2 px-6 rounded-full text-base tracking-wider shadow-custom"
        >
          Early access
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}

export default LandingPage;
