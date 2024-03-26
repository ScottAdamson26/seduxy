import React, { useState } from 'react';
import userProfiles from './UserProfileData';
import SelectedGridSquare from './SelectedGridSquare'; // Import the SelectedGridSquare component
import UnselectedGridSquare from './UnselectedGridSquare'; // Import the UnselectedGridSquare component
import ProfileCard from './ProfileCard'; // Import the ProfileCard component

const HomePage = () => {
    const [selectedProfileId, setSelectedProfileId] = useState(null);

    const displayedUserProfile = selectedProfileId
        ? userProfiles.find((user) => user.id === selectedProfileId)
        : {
                imageUrl: '',
                name: 'Select a model',
                bio: 'Explore the different facets of AI personalities by selecting a character.',
                age: '',
          };

    const handleProfileClick = (id) => {
        setSelectedProfileId(selectedProfileId === id ? null : id);
    };

    return (
        <div className="flex flex-col items-center min-h-screen text-white font-montserrat m-0 p-0 w-75 max-w-3xl mx-auto">
            <div className="flex justify-center w-full m-0 p-0 m-6">
                <a href="/">
                    <img src="/seduxy.webp" alt="Seduxy Logo" className="w-32 drop-shadow-xl" />
                </a>
            </div>

            <ProfileCard profile={displayedUserProfile} />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
                {userProfiles.map((user) => {
                    const isSelected = user.id === selectedProfileId;
                    const GridSquareComponent = isSelected ? SelectedGridSquare : UnselectedGridSquare;
                    return (
                        <GridSquareComponent key={user.id} user={user} onClick={() => handleProfileClick(user.id)} />
                    );
                })}
            </div>
        </div>
    );
};

export default HomePage;
