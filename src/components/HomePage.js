import React, { useState } from 'react';
import userProfiles from './UserProfileData';

const HomePage = () => {
    // State to keep track of the selected profile ID
    const [selectedProfileId, setSelectedProfileId] = useState(null);

    // Find the selected user profile from the userProfiles array
    const selectedUserProfile = userProfiles.find(user => user.id === selectedProfileId);

    // Function to handle profile selection
    const handleProfileClick = (id) => {
        // Toggle selection: If the same ID is clicked, deselect, otherwise select the new ID
        if (selectedProfileId === id) {
            setSelectedProfileId(null); // Deselect
        } else {
            setSelectedProfileId(id); // Select
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen text-white font-montserrat m-0 p-0">
            <div className="w-full flex justify-center m-0 p-0">
                <img src="/seduxy.webp" alt="Seduxy Logo" className="w-40 drop-shadow-xl m-10" />
            </div>
            {
                selectedProfileId ? (
                    <div className="text-center">
                        <img
                            src={selectedUserProfile.imageUrl}
                            alt={selectedUserProfile.name}
                            className="w-40 h-40 rounded-full mx-auto"
                        />
                        <h2 className="font-bold text-xl mt-4">{selectedUserProfile.name}</h2>
                    </div>
                ) : (
                    <>
                        <h1 className="font-bold text-xl mb-4 text-center">Welcome to the Home Page!</h1>
                        <p className="font-light opacity-70 mb-20 text-center">
                            This page will be accessible only to authenticated users in the future.
                        </p>
                    </>
                )
            }

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {userProfiles.map((user) => (
                    <div
                        key={user.id}
                        className={`user-profile relative bg-black rounded-lg w-40 h-40 cursor-pointer drop-shadow-lg ${selectedProfileId === user.id ? 'outline outline-4 outline-[#C91C66]' : ''}`}
                        onClick={() => handleProfileClick(user.id)}
                    >
                        <img
                            src={user.imageUrl}
                            alt={user.name}
                            className="w-full h-full rounded-lg absolute top-0 left-0 z-0 opacity-50"
                        />

                        <div className="absolute bottom-0 left-0 z-10 flex items-baseline m-0 ml-4 mb-2">
                            <h2 className="text-xl font-bold m-0 mr-2">{user.name}</h2>
                            <p className="text-lg m-0">{user.age}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;

