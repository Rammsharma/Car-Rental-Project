import React, { useEffect, useState } from "react";
import logo from "./image/logo1.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const Navbar = () => {
  const [userdata, setUserdata] = useState({});
  const isLoggedIn = Boolean(userdata && userdata.name);

  // Fetch user data
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:6001/login/success", {
        withCredentials: true,
      });
      setUserdata(response.data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Logout function
  const logout = () => {
    window.open("http://localhost:6001/logout", "_self");
    setUserdata({});
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <nav className="bg-white w-full z-20 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            className="w-32 h-auto md:w-40 lg:w-48 xl:w-56"
            alt="Company Logo"
          />
        </NavLink>

        {/* Navbar Links */}
        <div className="hidden w-full md:flex md:w-auto">
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Contact
              </NavLink>
            </li>

            {isLoggedIn ? (
              <>
                <li className="flex items-center space-x-2">
                  <img
                    src={userdata.picture || "/default-avatar.png"}
                    alt="User Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-gray-700 font-medium">
                    {userdata.name}
                  </span>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="cursor-pointer text-red-500 hover:underline"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/Login"
                  className="cursor-pointer text-blue-700 hover:text-green-500"
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
