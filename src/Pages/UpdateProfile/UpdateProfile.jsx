import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProfile = () => {
  const { user, updateAUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user)

  const [formData, setFormData] = useState({
    displayName: user?.displayName || '',
    photoURL: user?.photoURL || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAUser(formData.displayName, formData.photoURL);
      setUser((prev) => ({
        ...prev,
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      }));
      Swal.fire('Profile Updated!', 'Your profile has been updated successfully.', 'success');
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Failed to update profile. Please try again.', 'error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" data-aos="zoom-out"
    data-aos-duration="2000">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-4"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Update Profile</h1>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Name</label>
          <input
            type="text"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleChange}
            placeholder="Enter your photo URL"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
