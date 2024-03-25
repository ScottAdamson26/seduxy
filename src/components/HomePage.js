// Create a new file named HomePage.js in your components folder
import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page-container font-montserrat text-white">
      <h1 className='font-bold'>Welcome to the Home Page!</h1>
      <p className='font-light opacity-70'>This page will be accessible only to authenticated users in the future.</p>
    </div>
  );
}

export default HomePage;
