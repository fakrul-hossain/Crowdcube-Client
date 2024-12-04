import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import googleImg from "../../assets/google_sign_in.png";
import { Card, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const [email,setEmail] = useState('')

  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {

    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {
        Swal.fire(
          "Successfully Logged In",
          "Successfully Logged In by Email and Password",
          "success"
        );
        e.target.reset();
        navigate("/donationCampaign");
      })
      .catch((err) => {
        Swal.fire(
          "Password Incorrect!",
          "Please Enter Your Correct Email And Password",
          "error"
        );
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        Swal.fire(
          "Successfully Logged In",
          "Successfully Logged In by Google",
          "success"
        );
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="flex" data-aos="zoom-out" data-aos-duration="2000">
        <Card className="mx-auto" color="transparent" shadow={false}>
          <form
            onSubmit={handleLogin}
            className="mt-16 shadow-2xl p-8 rounded-2xl mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="text-center">
              <Typography variant="h4" color="blue-gray">
                Log In
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Enter your details to Sign In.
              </Typography>
            </div>
            <div>
              <div>
                <label className="label">
                  <span className="ml-2 text-lg font-medium">Email</span>
                </label>
                <input
                onChange={(e)=> setEmail(e.target.value)}
                  name="email"
                  type="email"
                  placeholder="Input your email"
                  className="w-full my-2 bg-gray-100 border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 rounded-lg py-2 pl-4 pr-12 transition duration-300 ease-in-out text-gray-700 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="ml-2 text-lg font-medium">Password</span>
                </label>
                <input
                
                  name="password"
                  type="password"
                  placeholder="Input your password"
                  className="w-full my-2 bg-gray-100 border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 rounded-lg py-2 pl-4 pr-12 transition duration-300 ease-in-out text-gray-700 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <button className="text-xl bg-black w-full text-white py-1 rounded-xl mt-2 font-semi-bold">
              Sign In
            </button>
            <div>
              <button onClick={handleGoogleSignIn}>
                <img className="w-3/6 mx-auto mt-3" src={googleImg} alt="" />
              </button>
            </div>

            <Typography
              color="gray"
              className="mt-4 text-center font-normal capitalize"
            >
              Forgot your password?{" "}
              <NavLink
                to="/forgot-password"
                className="text-blue-500 hover:underline font-medium"
                state={{
                  Email: email,
                }}
              >
                Reset Password
              </NavLink>
            </Typography>

            <Typography
              color="gray"
              className="mt-4 text-center font-normal capitalize"
            >
              Sign up first if you don't have an account{" "}
              <NavLink
                to="/register"
                className="btn font-bold capitalize text-[16px] btn-link"
              >
                Sign Up
              </NavLink>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LogIn;
