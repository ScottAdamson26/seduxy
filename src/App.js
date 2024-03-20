import React from 'react';

function App() {
  return (
    <div className="App bg-[url('/background.png')] bg-cover bg-no-repeat min-h-screen flex justify-center items-center text-center px-4">
      {/* Central container for the headings and button */}
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-montserrat font-bold text-4xl tracking-wider text-white mb-4">
          The <span className="text-[#db5682]">#1</span> AI Girlfriend Experience
        </h1>
        {/* Subheading container to constrain its width slightly more than the main heading */}
        <div className="max-w-xl mx-auto mt-6">
          <h2 className="font-montserrat font-light text-white text-lg opacity-70">
            Sign up now to be the first to know about the release of the NSFW Seduxy AI experience.
          </h2>
        </div>
        {/* Button */}
        <button className="mt-6 bg-[#b82f5c] text-white font-bold py-3 px-9 rounded text-lg tracking-wider drop-shadow-xl">
          EARLY SIGNUP
        </button>
      </div>
    </div>
  );
}

export default App;
