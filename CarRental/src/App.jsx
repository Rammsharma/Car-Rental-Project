import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import Price from "./components/Price";
import Error from "./components/Error";
import Sadan from "./components/Sadans";
import Elecric from "./components/electric car/ElectricCar";
import Mini from "./components/mini car/MiniCar";
import Luxury from "./components/luxury car/LuxuryCar";
import Van from "./components/van car/Van";
import Logout from "./components/Logout";
import LuxuryBook from "./components/luxury car/LuxuryBook";
import ElectricCarBook from "./components/electric car/ElectricCarBook";
import SuvCarBook from "./components/Suv car/SuvCarBook";
import VanCarBook from "./components/van car/VanCarBook";
import MiniCarBook from "./components/mini car/MiniCarBook";
import HondaCity from "./components/HondaCity";
import SuvCar from "./components/Suv car/SuvCar";
import Loader from "./components/Loader"; // Import the Loader component

export default function App() {
  const location = useLocation(); // React Router hook to track route changes
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader on route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading delay
    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [location]);

  return (
    <>
      <Header />
      {loading ? (
        <Loader /> // Show the loader while loading
      ) : (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Price" element={<Price />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Sadan" element={<Sadan />} />
          <Route path="/Electric" element={<Elecric />} />
          <Route path="/Mini" element={<Mini />} />
          <Route path="/Suv" element={<SuvCar />} />
          <Route path="/Luxury" element={<Luxury />} />
          <Route path="/Van" element={<Van />} />
          <Route path="/HondaCity" element={<HondaCity />} />
          <Route path="/LuxuryBook" element={<LuxuryBook />} />
          <Route path="/SuvCarBook" element={<SuvCarBook />} />
          <Route path="/ElectricCarBook" element={<ElectricCarBook />} />
          <Route path="/VanCarBook" element={<VanCarBook />} />
          <Route path="/MiniCarBook" element={<MiniCarBook />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      )}
    </>
  );
}
