import React, { useState } from 'react';
import userProfiles from './UserProfileData';
import defaultImage from './images/anon.png';

const HomePage = () => {
	const [selectedProfileId, setSelectedProfileId] = useState(null);

	const displayedUserProfile = selectedProfileId
		? userProfiles.find((user) => user.id === selectedProfileId)
		: {
				imageUrl: defaultImage,
				name: 'Select a model',
				bio: 'Explore the different facets of AI personalities by selecting a character.',
				age: '',
		  };

	const handleProfileClick = (id) => {
		if (selectedProfileId === id) {
			setSelectedProfileId(null);
		} else {
			setSelectedProfileId(id);
		}
	};

	return (
		<div className="flex flex-col items-center min-h-screen text-white font-montserrat m-0 p-0 max-w-6xl mx-auto">
			<div className="flex justify-center w-full m-0 p-0 m-6">
				<img src="/seduxy.webp" alt="Seduxy Logo" className="w-32 drop-shadow-xl" />
			</div>
            <div className="rounded-lg bg-gradient-to-r from-custom-pink via-custom-red to-custom-yellow p-1 mb-6">
				<div className="flex items-center rounded-lg bg-white mx-auto p-4 w-full bg-opacity-10 backdrop-blur">
					<img
						src={displayedUserProfile.imageUrl}
						alt="Profile"
						className="w-40 h-40 md:w-32 md:h-32 rounded-md mr-4 drop-shadow-xl"
					/>
					<div className="text-left">
						<h2 className="font-bold text-xl">{displayedUserProfile.name}</h2>
						{displayedUserProfile.age && <p className="text-lg">Age: {displayedUserProfile.age}</p>}
						<p className="font-light text-lg ">{displayedUserProfile.bio}</p>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
				{userProfiles.map((user) => (
					<div
						key={user.id}
						className={`user-profile relative bg-black rounded-lg cursor-pointer drop-shadow-lg ${
							selectedProfileId === user.id ? 'outline outline-4 outline-[#C91C66]' : ''
						}`}
						onClick={() => handleProfileClick(user.id)}
						style={{ aspectRatio: '1 / 1' }}
					>
						<img
							src={user.imageUrl}
							alt={user.name}
							className="w-full h-full rounded-lg absolute top-0 left-0 z-0 opacity-70"
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
