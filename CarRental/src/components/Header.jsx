import React from "react";
import logo from "./image/logo.png";
import { Navbar } from "../components/Navbar";

const Header = () => {
  return (
    <div className="header">
      {/* Top Bar */}
      <div className="top-bar bg-blue-600 text-white py-2">
        <center className="text-xs sm:text-sm md:text-base">
          Need Help? 📞 Call: +91 1800 103 2222
        </center>
      </div>

      {/* Main Header */}
      <div className="main-header flex flex-wrap justify-between items-center py-6 px-4 sm:px-8 bg-gray-100">
        {/* Left Section */}
        <div className="info flex items-center space-x-8">
          <div className="info-item flex items-center space-x-2">
            <i className="icon text-xl sm:text-2xl">⏰</i>
            <p className="text-xs sm:text-sm md:text-base">
              <strong>Sunday to Friday</strong>
              <br />
              10am - 7pm
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="cta mt-4 sm:mt-0 flex items-center">
          <button className="cta-button bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base hover:bg-blue-700 transition duration-300">
            📞 Request a Call
          </button>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default Header;
