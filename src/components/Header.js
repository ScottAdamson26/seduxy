// Header.js
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center mb-4 p-0 h-7vh">
      <a href="/">
        <img
          src="/seduxy.webp"
          alt="Seduxy Logo"
          className="h-full drop-shadow-xl"
        />
      </a>
    </div>
  );
};

export default Header;
