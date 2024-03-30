import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@material-tailwind/react";

const LockedGridSquare = ({ user, onClick }) => {
  return (
    <Tooltip
      content="You have not unlocked this character yet."
	  className="p-2 font-montserrat font- z-10  bg-white bg-opacity-30 backdrop-blur-lg shadow-custom pl-3 pr-3"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <div
        className="user-profile relative bg-black rounded-lg cursor-pointer shadow-small flex justify-center items-center"
        onClick={onClick}
        style={{ aspectRatio: "1 / 1" }}
      >
        <img
          src={user.imageUrl}
          alt={user.name}
          className="w-full h-full rounded-lg absolute top-0 left-0 z-0 opacity-35"
        />
        <div className="z-10 flex justify-center items-center absolute">
          <FontAwesomeIcon icon={faLock} className="fa-xl text-white shadow-small" />
        </div>
      </div>
    </Tooltip>
  );
};

export default LockedGridSquare;
