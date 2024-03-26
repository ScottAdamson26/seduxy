import React from 'react';

const ChatUI = () => {

	return (
		<div className="flex flex-col items-center min-h-screen text-white font-montserrat m-0 p-0 w-3/4 max-w-3xl mx-auto h-screen">
			<div className="flex justify-center w-full m-0 p-0 m-6">
				<a href="/">
					<img src="/seduxy.webp" alt="Seduxy Logo" className="w-32 drop-shadow-xl" />
				</a>
			</div>

			<div className="rounded-tl-xl rounded-tr-xl bg-gradient-to-r from-custom-pink via-custom-red to-custom-yellow p-1 w-full shadow-custom h-24">
				<div className="rounded-tl-lg rounded-tr-lg bg-black opacity-70 w-full shadow-custom h-full"></div>
			</div>

			<div className="rounded-br-xl rounded-bl-xl bg-gradient-to-r from-purple via-darkish-p to-purple pl-1 pr-1 pb-1 mb-3 w-full shadow-custom h-full">
				<div className="flex flex-col md:flex-row items-start rounded-bl-lg rounded-br-lg bg-black bg-opacity-40 mx-auto p-3 w-full h-full"></div>
			</div>
		</div>
	);
};

export default ChatUI;
