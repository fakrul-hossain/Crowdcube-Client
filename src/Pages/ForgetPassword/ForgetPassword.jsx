import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Retrieve email from location state or default to an empty string
    const emailFromState = location.state?.Email || '';
    setEmail(emailFromState);
  }, [location.state]);

  const handlePasswordReset = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      Swal.fire('Invalid Email!', 'Please enter a valid email address.', 'error');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire(
          'Password Reset Email Sent!',
          'Please check your email to reset your password.',
          'success'
        );
        window.open('https://mail.google.com/', '_blank');
        navigate('/login');
      })
      .catch((err) => {
        console.error(err);
        Swal.fire('Error!', 'Failed to send reset email. Please try again.', 'error');
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-6">Reset Password</h1>
        <form onSubmit={handlePasswordReset} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-left font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
