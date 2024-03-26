import React, { useState } from 'react';
import userProfiles from './UserProfileData';
import defaultImage from './images/anon.png';
import SelectedGridSquare from './SelectedGridSquare'; // Import the SelectedGridSquare component
import UnselectedGridSquare from './UnselectedGridSquare'; // Import the UnselectedGridSquare component

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
		setSelectedProfileId(selectedProfileId === id ? null : id);
	};

	return (
		<div className="flex flex-col items-center min-h-screen text-white font-montserrat m-0 p-0 w-75 max-w-3xl mx-auto">
			<div className="flex justify-center w-full m-0 p-0 m-6">
				<img src="/seduxy.webp" alt="Seduxy Logo" className="w-32 drop-shadow-xl" />
			</div>

			<div className="rounded-lg bg-gradient-to-r from-custom-pink via-custom-red to-custom-yellow p-1 mb-6 w-full shadow-custom">
				<div
					className="flex items-center rounded-lg bg-black bg-opacity-60 mx-auto p-3 w-full backdrop-blur"
					style={{ height: '200px' }}
				>
					<img
						src={displayedUserProfile.imageUrl}
						alt="Profile"
						className="h-full rounded-md mr-4 drop-shadow-xl"
					/>
					<div className="text-left">
						<h2 className="font-bold text-xl">{displayedUserProfile.name}</h2>
						{displayedUserProfile.age && <p className="text-lg">Age: {displayedUserProfile.age}</p>}
						<p className="font-light text-lg">{displayedUserProfile.bio}</p>
					</div>
				</div>
			</div>

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
