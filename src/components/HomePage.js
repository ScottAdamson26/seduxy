import React, { useState } from "react";
import userProfiles from "./UserProfileData";
import SelectedGridSquare from "./SelectedGridSquare"; // Import the SelectedGridSquare component
import UnselectedGridSquare from "./UnselectedGridSquare"; // Import the UnselectedGridSquare component
import LockedGridSquare from "./LockedGridSquare"; // Import the LockedGridSquare component
import ProfileCard from "./ProfileCard"; // Import the ProfileCard component
import Header from "./Header";

const HomePage = () => {
  const [selectedProfileId, setSelectedProfileId] = useState(null);

  const displayedUserProfile = selectedProfileId
    ? userProfiles.find((user) => user.id === selectedProfileId)
    : {
        imageUrl: "",
        name: "Select a model",
        bio: "Explore the different facets of AI personalities by selecting a character.",
        age: "",
      };

  const handleProfileClick = (id) => {
    const profile = userProfiles.find((user) => user.id === id);
    if (!profile.locked) {
      setSelectedProfileId(selectedProfileId === id ? null : id);
    }
  };

  return (
    <div className="App bg-gradient-to-b from-purple via--dark-purple to-dark-purple flex flex-col justify-center items-center text-center p-4 min-h-screen">
      <div className="flex flex-col items-center min-h-screen text-white font-montserrat m-0 p-4 w-75 max-w-3xl mx-auto">
        <Header />

        <ProfileCard profile={displayedUserProfile} />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
          {userProfiles.map((user) => {
            const isSelected = user.id === selectedProfileId;
            let GridSquareComponent;

            if (user.locked) {
              GridSquareComponent = LockedGridSquare;
            } else if (isSelected) {
              GridSquareComponent = SelectedGridSquare;
            } else {
              GridSquareComponent = UnselectedGridSquare;
            }

            return (
              <GridSquareComponent
                key={user.id}
                user={user}
                onClick={() => handleProfileClick(user.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
