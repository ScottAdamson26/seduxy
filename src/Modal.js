import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { auth } from './firebaseConfig'; // Adjust this import path as necessary
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

const Modal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [emailSendingStatus, setEmailSendingStatus] = useState('idle'); // New state to track the email sending status

  if (!isOpen) return null;

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendVerificationEmail = (email) => {
    setEmailSendingStatus('sending'); // Update status to 'sending'
    const tempPassword = "tempPassword123"; // You might want to generate a random temporary password
    createUserWithEmailAndPassword(auth, email, tempPassword)
      .then((userCredential) => {
        sendEmailVerification(userCredential.user)
          .then(() => {
            setEmailSendingStatus('sent'); // Update status to 'sent'
            setEmailSubmitted(true);
          })
          .catch((error) => {
            console.error("Error sending verification email:", error.message);
            setIsValid(false); // Optionally handle errors differently
            setEmailSendingStatus('idle'); // Reset the status
          });
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
        setIsValid(false); // Optionally handle errors differently
        setEmailSendingStatus('idle'); // Reset the status
      });
  };

  const handleSubmit = () => {
    if (!emailSubmitted && emailSendingStatus !== 'sending') {
      if (validateEmail(email)) {
        sendVerificationEmail(email);
      } else {
        setIsValid(false); // Indicate invalid input
      }
    } else {
      // This part will handle post-verification actions later on
      console.log(`Email: ${email}`); // For demonstration
      onClose(); // Close modal
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-zinc-900 p-5 w-11/12 max-w-md relative">
        <button onClick={onClose} className="text-white font-montserrat font-light absolute top-0 right-0 m-3 text-4xl leading-none">
          &times;
        </button>
        <h2 className="text-white font-montserrat font-bold text-2xl mb-2">Early Sign-Up</h2>
        <div className="w-full text-center mb-4">
          <h3 className="font-montserrat font-light text-white text-sm opacity-70 mx-auto max-w-xs">
            Get notified of the Seduxy beta release and receive early access
          </h3>
        </div>
        
        <div className="relative w-full mb-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsValid(true);
            }}
            placeholder="Enter your email"
            disabled={emailSubmitted || emailSendingStatus === 'sending'}
            className={`font-montserrat py-2 pl-10 pr-3 w-full rounded ${!isValid && !emailSubmitted ? 'border-2 border-red-500' : 'border border-transparent'} bg-white outline-none`}
          />
        </div>
        {!isValid && !emailSubmitted && <p className="text-red-500 text-sm text-center font-montserrat">Please enter a valid email.</p>}
        {emailSendingStatus === 'sending' && <p className="text-white text-sm text-center font-montserrat">Sending verification email...</p>}
        {emailSubmitted && <p className="text-white font-montserrat text-medium text-sm text-center mb-2 ml- mt-4">Please check your email for a confirmation link</p>}
        
        <button
          onClick={
            handleSubmit}
            className="w-full bg-[#b82f5c] text-white font-bold py-2 rounded text-base tracking-wider mt-2"
            disabled={emailSendingStatus === 'sending'} // Disable the button while the email is being sent
          >
            {emailSendingStatus === 'sending' ? 'Sending confirmation email...' : emailSubmitted ? 'Waiting on verification...' : 'Submit email'}
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  
