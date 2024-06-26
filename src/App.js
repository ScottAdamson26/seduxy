import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modal from './components/Modal';
import EmailVerification from './components/EmailVerification';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage'; // Make sure this path is correct
import ChatUI from './components/ChatUI'; // Import ChatUI component

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Router>
        <Routes>
          <Route path="/" element={
            <>
              <LandingPage toggleModal={toggleModal} />
              <Modal isOpen={isModalOpen} onClose={toggleModal} />
            </>
          } />
          <Route path="/verifyEmail" element={
            <>
              <LandingPage toggleModal={toggleModal} />
              <EmailVerification />
            </>
          } />
          <Route path="/home" element={<HomePage />} />
          <Route path="/chat" element={<ChatUI />} /> 
        </Routes>
    </Router>
  );
}

export default App;
