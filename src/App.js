import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modal from './components/Modal';
import EmailVerification from './components/EmailVerification';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage'; // Make sure this path is correct

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Router>
      <div className="App bg-[url('/background.png')] bg-cover bg-no-repeat min-h-screen flex flex-col justify-center items-center text-center px-4">
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
