import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" data-aos="zoom-out"
    data-aos-duration="2000">
      <h1 className="text-2xl font-bold mb-6">
        Welcome, {user?.displayName || 'User'}!
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center">
        <img
          src={user?.photoURL || 'https://via.placeholder.com/150'}
          alt={user?.displayName || 'User'}
          className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">
          {user?.displayName || 'Name not provided'}
        </h2>
        <p className="text-gray-600 mb-2">
          <strong>Email:</strong> {user?.email}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Email Verified:</strong> {user?.emailVerified ? 'Yes' : 'No'}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Last Sign-In Time:</strong>{' '}
          {user?.metadata?.lastSignInTime || 'Not Available'}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Account Creation Time:</strong>{' '}
          {user?.metadata?.creationTime || 'Not Available'}
        </p>
        <button
          onClick={() => navigate('/update-profile')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
