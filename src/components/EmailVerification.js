import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { getAuth, applyActionCode } from 'firebase/auth'; // Make sure to import these

const EmailVerification = () => {
  const [message, setMessage] = useState('');
  const [verifying, setVerifying] = useState(true); // State to track the verification process

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const oobCode = urlParams.get('oobCode');
    const auth = getAuth();

    if (oobCode) {
      applyActionCode(auth, oobCode)
        .then(() => {
          setMessage('Your email has been verified successfully!');
          setVerifying(false);
        })
        .catch((error) => {
          setMessage('Error verifying email. Please try the link again or contact support.');
          setVerifying(false);
          console.error(error);
        });
    } else {
      // If there's no oobCode, indicate the link is invalid or missing.
      setMessage('Invalid or missing verification link. Please check your email or contact support.');
      setVerifying(false);
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-zinc-900 p-5 w-11/12 max-w-md relative text-white">
        <h2 className="font-montserrat font-bold text-2xl">
          {verifying ? 'Verifying your email...' : 'Email Verified'}
        </h2>
        {verifying ? (
          <div className="flex justify-center items-center mt-5">
            <TailSpin color="#FFFFFF" height={30} width={30} />
          </div>
        ) : (
          <h3 className="font-montserrat font-light text-white text-sm opacity-70 mx-auto max-w-xs mt-2">
            {message}
          </h3>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
