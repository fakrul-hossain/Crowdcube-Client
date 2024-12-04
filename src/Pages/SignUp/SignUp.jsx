import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Card, Input, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false); // Toggle state for password visibility
  const { createUser, updateAUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const img = e.target.img.value;

    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/
;
    if (!regex.test(password)) {
      Swal.fire(
        "Password Incorrect!",
        '- Must have an Uppercase letter in the password\n- Must have a Lowercase letter in the password  \n- Length must be at least 6 character ',
        "error"
      );
      return;
    }

    createUser(email, password)
      .then((res) => {
        Swal.fire("Sign Up Successful", "You are now registered!", "success");
        updateAUser(name, img).then(() => {
          setUser((previous) => {
            previous.displayName = name;
            previous.photoURL = img;
            return { ...previous };
          });
          navigate("/");
        });
      })
      .catch((err) => {
        Swal.fire("Error", "Something went wrong. Please try again.", "error");
      });

    e.target.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen" data-aos="zoom-out" data-aos-duration="2000">
      <Card className="w-96 shadow-lg p-8">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-2 text-center">
          Enter your details to register.
        </Typography>
        <form onSubmit={handleRegister} className="mt-6">
          {/* Name Field */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Image Link Field */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Image Link</label>
            <input
              name="img"
              type="text"
              placeholder="Enter your image link"
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Password Field with Toggling */}
          <div className="mb-6 relative">
            <label className="block mb-1 text-gray-700 font-medium">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <div
              className="absolute top-10 right-4 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Sign Up
          </button>
        </form>
        <Typography color="gray" className="mt-4 text-center">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-500 font-medium hover:underline">
            Log In
          </NavLink>
        </Typography>
      </Card>
    </div>
  );
};

export default SignUp;
