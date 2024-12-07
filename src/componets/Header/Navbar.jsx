import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import logo from "../../assets/logo.png";
import { FaHome, FaList, FaPlus, FaDonate, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { MdMenu, MdCancel } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Success!", "You have logged out successfully!", "success");
        navigate("/"); // Redirect to home after logout
      })
      .catch((error) => console.error("Logout Error:", error));
  };

  const activeLink =
    "text-teal-600 font-semibold border-b-2 border-teal-600 pb-1 transition-all ease-in-out duration-100 flex items-center gap-2";
  const normalLink =
    "text-gray-600 hover:text-teal-600 transition-all duration-300 flex items-center gap-2";

  return (
    <div
      className={`bg-white shadow-md ${
        isSticky ? "fixed top-0 w-full mx-auto ease-in-out z-50" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex  justify-center items-center gap-2 text-xl font-bold text-teal-600">
            <img src={logo} alt="Crowdcube Logo" className="h-12 w-12" />
            <span className="hidden sm:inline">Crowdcube</span>

          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              <FaHome />
              Home
            </NavLink>
            <NavLink
              to="/campaigns"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <FaList />
              All Campaigns
            </NavLink>
            {user && (
              <>
                <NavLink
                  to="/addNewCampaign"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  <FaPlus />
                  Add New Campaign
                </NavLink>
                <NavLink
                  to="/myCampaigns"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  <FaList />
                  My Campaigns
                </NavLink>
                <NavLink
                  to="/myDonations"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  <FaDonate />
                  My Donations
                </NavLink>
              </>
            )}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative">
                {/* User Photo */}
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="User Profile"
                  className="h-10 w-10 rounded-full cursor-pointer"
                  title={user.displayName || "User"}
                  onClick={() => {
                    setIsProfileOpen(!isProfileOpen);
                    setIsMenuOpen(false); // Close menu if open
                  }}
                />
                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-48 bg-white border rounded shadow-lg">
                    <div className="p-2">
                      <p className="text-gray-700 text-sm">{user.displayName}</p>
                    </div>
                    <hr />
                    <button
                      onClick={handleLogOut}
                      className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-100"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-3">
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  <FaSignInAlt />
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                  <FaUserPlus />
                  Register
                </NavLink>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsProfileOpen(false); // Close profile if open
            }}
            className="md:hidden text-gray-600 hover:text-teal-600 text-2xl"
          >
            {isMenuOpen ? <MdCancel /> : <MdMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t mt-2">
            <nav className="flex flex-col gap-2 p-4">
              <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                <FaHome />
                Home
              </NavLink>
              <NavLink
                to="/campaigns"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
              >
                <FaList />
                All Campaigns
              </NavLink>
              {user && (
                <>
                  <NavLink
                    to="/addNewCampaign"
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <FaPlus />
                    Add New Campaign
                  </NavLink>
                  <NavLink
                    to="/myCampaigns"
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <FaList />
                    My Campaigns
                  </NavLink>
                  <NavLink
                    to="/myDonations"
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <FaDonate />
                    My Donations
                  </NavLink>
                </>
              )}
              {!user && (
                <>
                  <NavLink to="/login" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <FaSignInAlt />
                    Login
                  </NavLink>
                  <NavLink to="/register" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                    <FaUserPlus />
                    Register
                  </NavLink>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
