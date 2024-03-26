import React from 'react';

const SelectedGridSquare = ({ user, onClick }) => {
	return (
		<div className='rounded-xl bg-gradient-to-r from-custom-pink to-custom-dp p-1 shadow-small'>
			<div
				className="user-profile relative bg-black rounded-lg cursor-pointer"
				onClick={onClick}
				style={{ aspectRatio: '1 / 1' }}
			>
				<img
					src={user.imageUrl}
					alt={user.name}
					className="w-full h-full rounded-lg absolute top-0 left-0 z-0 opacity-60"
				/>
				<div className="absolute bottom-0 left-0 z-10 flex items-baseline m-0 ml-2 mb-0">
					<h2 className="text-xl font-bold m-0 mr-2">{user.name}</h2>
					<p className="text-lg m-0">{user.age}</p>
				</div>
			</div>
		</div>
	);
};

export default SelectedGridSquare;
