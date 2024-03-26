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
				<div className="flex flex-col md:flex-row items-start rounded-lg bg-black bg-opacity-60 mx-auto p-3 w-full backdrop-blur">
					<img
						src={displayedUserProfile.imageUrl}
						alt="Profile"
						className="mx-auto md:mr-4 mb-4 md:mb-0 rounded-md drop-shadow-xl"
					/>
					<div className="text-center md:text-left">
						<div className="flex justify-center md:justify-start items-center">
							<h2 className="font-bold text-xl">{displayedUserProfile.name}</h2>
							{displayedUserProfile.age && (
								<p className="ml-2 font-regular text-xl">{displayedUserProfile.age}</p>
							)}

						</div>
                        <div>
							{displayedUserProfile.tags &&
								displayedUserProfile.tags.map((tag, index) => (
									<div
										key={index}
										className="inline-block bg-gradient-to-r from-custom-pink via-custom-red to-custom-yellow text-white text-xs font-semibold rounded-full mt-2 p-1 pl-2 pr-2 shadow-smaller mr-2"
									>
										<p>{tag}</p>
									</div>
								))}
						</div>
						{/* Existing content */}
						<p className="font-light text-lg mt-2">{displayedUserProfile.bio}</p>
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
