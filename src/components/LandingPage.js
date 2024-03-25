// LandingPage.js
import React from 'react';

function LandingPage({ toggleModal }) {
  return (
    <>
      <div className="w-full flex justify-center absolute top-0 pt-4">
        <img src="/seduxy.webp" alt="Seduxy Logo" className="scale-50 mt-20 drop-shadow-xl" />
      </div>
      <div className="max-w-2xl flex flex-col items-center mt-20">
        <h1 className="font-montserrat font-bold text-4xl tracking-wider text-white">
          The <span className="text-[#db5682]">#1</span> AI Girlfriend Experience
        </h1>
        <div className="max-w-lg mt-4">
          <h2 className="font-montserrat font-light text-white text-lg opacity-70">
            Sign up now for early access to AI models capable of fulfilling your every fantasy.
          </h2>
        </div>
        <button
          onClick={toggleModal}
          className="mt-4 bg-[#b82f5c] text-white font-bold py-2 px-6 rounded text-base tracking-wider drop-shadow-xl"
        >
          Early access
        </button>
      </div>
    </>
  );
}

export default LandingPage;
