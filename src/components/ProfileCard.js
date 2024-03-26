import React from 'react';
import defaultImage from './images/anon.png';

const ProfileCard = ({ profile }) => {
	return (
		<div className="rounded-xl bg-gradient-to-r from-custom-pink via-custom-red to-custom-yellow p-1 mb-6 w-full shadow-custom">
			<div className="flex flex-col md:flex-row items-start rounded-lg bg-black bg-opacity-70 mx-auto p-3 w-full backdrop-blur">
				<img
					src={profile.imageUrl || defaultImage}
					alt="Profile"
					className="mx-auto md:mr-4 mb-4 md:mb-0 rounded-md drop-shadow-xl"
				/>
				<div className="text-center md:text-left">
					<div className="flex justify-center md:justify-start items-center">
						<h2 className="font-bold text-xl">{profile.name}</h2>
						{profile.age && <p className="ml-2 font-regular text-xl">{profile.age}</p>}
					</div>
					<div>
						{profile.tags &&
							profile.tags.map((tag, index) => (
								<div
									key={index}
									className="inline-block bg-gradient-to-r from-custom-pink via-custom-red to-custom-yellow text-white text-xs font-semibold rounded-full mt-2 p-1 pl-2 pr-2 shadow-smaller mr-2"
								>
									<p>{tag}</p>
								</div>
							))}
					</div>
					<p className="font-light text-lg mt-2">{profile.bio}</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
