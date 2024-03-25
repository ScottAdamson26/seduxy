import React from 'react';
import userProfiles from './UserProfileData'; // Importing user profiles

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white font-montserrat">
      <h1 className='font-bold text-xl mb-4 text-center'>Welcome to the Home Page!</h1>
      <p className='font-light opacity-70 mb-8 text-center'>This page will be accessible only to authenticated users in the future.</p>
      
      {/* Adjusted to use grid layout */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {userProfiles.map((user) => (
          <div key={user.id} className="user-profile relative bg-black rounded-lg w-36 h-36 cursor-pointer">
            <img src={user.imageUrl} alt={user.name} className="w-full h-full rounded-md absolute top-0 left-0 z-0 opacity-50" />
            
            <div className="absolute bottom-0 left-0 z-10 flex items-baseline m-0 ml-2">
              <h2 className="text-xl font-bold m-0 mr-2">{user.name}</h2>
              <p className="text-lg m-0">{user.age}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

