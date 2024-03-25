import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, applyActionCode } from 'firebase/auth';

const EmailVerification = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const oobCode = urlParams.get('oobCode');
    const auth = getAuth();

    if (oobCode) {
      applyActionCode(auth, oobCode)
        .then(() => {
          setMessage('Your email has been verified successfully!');
          // Here you can also navigate the user away from the verification page if desired
          // navigate('/'); // for example, back to the home page
        })
        .catch((error) => {
          setMessage('Error verifying email. Please try the link again or contact support.');
          console.error(error);
        });
    }
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-zinc-900 p-5 w-11/12 max-w-md relative text-white">
        <h2 className="font-montserrat font-bold text-2xl mb-2">Email Verification</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default EmailVerification;
