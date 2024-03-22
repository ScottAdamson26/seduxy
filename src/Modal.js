import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [emailSubmitted, setEmailSubmitted] = useState(false); // New state to track email submission

  if (!isOpen) return null;

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = () => {
    if (!emailSubmitted) {
      if (validateEmail(email)) {
        setEmailSubmitted(true); // Email is valid, show auth token input
      } else {
        setIsValid(false); // Indicate invalid input
      }
    } else {
      // Accept any code for now and close the popup
      console.log(`Email: ${email}, Auth Token: ${authToken}`); // For demonstration
      onClose(); // Close modal
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-zinc-900 p-5 w-11/12 max-w-md relative">
        {/* Close button */}
        <button onClick={onClose} className="text-white font-montserrat font-light absolute top-0 right-0 m-3 text-4xl leading-none">
          &times;
        </button>
        <h2 className="text-white font-montserrat font-bold text-2xl mb-2">Early Access</h2>
        {/* Subheading */}
        <div className="w-full text-center mb-4">
          <h3 className="font-montserrat font-light text-white text-sm opacity-70 mx-auto max-w-xs">
            Get notified of the Seduxy beta release and to receive early access
          </h3>
        </div>
        {/* Email input field */}
        <div className="relative w-full mb-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-zinc-900" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 10.588l7.997-4.704A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4.71-8-4.71V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsValid(true); // Reset validation state on input change
            }}
            placeholder="Enter your email"
            disabled={emailSubmitted} // Disable email input after submission
            className={`py-2 pl-10 pr-3 w-full rounded ${!isValid && !emailSubmitted ? 'border-2 border-red-500' : 'border border-transparent'} bg-white outline-none`}
          />
        </div>
        {!isValid && !emailSubmitted && <p className="text-red-500 text-sm text-center font-montserrat">Please enter a valid email.</p>}
        {/* Auth Token input field (appears after email is submitted) */}
        {emailSubmitted && (
          <>
            <div className="relative w-full mb-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                {/* Placeholder for an auth token icon */}
              </span>
              <input
                type="text"
                value={authToken}
                onChange={(e) => setAuthToken(e.target.value)}
                placeholder="Confirmation code"
                className="py-2 pl-10 pr-3 w-full rounded border border-transparent bg-white outline-none mt-2"
              />
            </div>
            <p className="text-white font-montserrat text-medium text-sm text-center mb-2 ml- mt-4">Please check your email for a confirmation code</p>
          </>
        )}
        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#b82f5c] text-white font-semibold py-2 rounded text-base tracking-wider mt-2"
        >
          {emailSubmitted ? 'Submit Code' : 'Submit Email'}
          </button>
      </div>
    </div>
  );
};

export default Modal;

