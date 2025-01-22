import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import LocationInput from "../Map/LocationInput";
import video from "../../components/image/video.mp4";

export default function App() {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [distance, setDistance] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    number: "",
  });
  const [error, setError] = useState(""); // State for error message
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [showCustomAlert, setShowCustomAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBVH7vdkxuD-y9pHdX8sZuVMPfW_TkBiy8", // Replace with your Google Maps API key
    libraries: ["places"],
  });

  const pricePerKm = 80;

  // Function to calculate the center of the two locations
  const calculateCenter = (location1, location2) => {
    if (location1 && location2) {
      const lat =
        (location1.geometry.location.lat() +
          location2.geometry.location.lat()) /
        2;
      const lng =
        (location1.geometry.location.lng() +
          location2.geometry.location.lng()) /
        2;
      return { lat, lng };
    }
    return null;
  };

  useEffect(() => {
    if (from && to) {
      const distanceService = new window.google.maps.DistanceMatrixService();
      distanceService.getDistanceMatrix(
        {
          origins: [from.geometry.location],
          destinations: [to.geometry.location],
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === "OK" && response.rows[0].elements[0].status === "OK") {
            const km = response.rows[0].elements[0].distance.value / 1000;
            setDistance(km);
          }
        }
      );
    }
  }, [from, to]);

  const handleBooking = () => {
    if (!from || !to || !pickupDate || !pickupTime) {
      setAlertMessage("Please fill all the entries before proceeding.");
      setShowCustomAlert(true);
      return;
    }
    setShowModal(true); // Show the modal when all validations pass
    setError("");
  };

  const CustomAlert = ({ message, onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg max-w-sm">
        <p>{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-white text-red-500 rounded hover:bg-gray-200"
        >
          Close
        </button>
      </div>
    </div>
  );

  const SuccessAlert = ({ message, onClose }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-green-100 bg-opacity-50 z-50">
      <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg max-w-sm">
        <p>{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-white text-green-500 rounded hover:bg-gray-200"
        >
          Close
        </button>
      </div>
    </div>
  );

  const handleProceedToPay = () => {
    if (!userDetails.name || !userDetails.number) {
      setError("Please fill in both your name and phone number.");
    } else {
      setSuccessMessage(
        "Booking Confirm 😊 Our customer will contact you soon!"
      );
      setShowModal(false); // Close the modal when booking is confirmed
      setError(""); // Reset any error
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  if (!isLoaded) return <div>Loading...</div>;

  const calculatePrice = (distance) => {
    if (!distance) return { price: 0, gst: 0, grandTotal: 0 };

    const price = distance * pricePerKm;
    const gst = price * 0.18;
    const grandTotal = price + gst;

    return { price, gst, grandTotal };
  };

  const { price, gst, grandTotal } = calculatePrice(distance);

  const center = calculateCenter(from, to);

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="sm:w-2/5 w-full relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 p-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
            Car Rental
          </h1>
          <LocationInput
            label="Where From?"
            onPlaceSelected={(place) => setFrom(place)}
          />
          <LocationInput
            label="Where To?"
            onPlaceSelected={(place) => setTo(place)}
          />
          <div className="mb-4">
            <label className="block text-gray-700">Pick-up Date:</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Pick-up Time:</label>
            <input
              type="time"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
            />
          </div>

          {distance && (
            <div className="mt-4">
              <p className="font-semibold text-black bg-gray-200">
                Distance: {distance} km
              </p>
            </div>
          )}
          <button
            onClick={handleBooking}
            className="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Booking
          </button>
          {/* Render the custom alert modal */}
          {showCustomAlert && (
            <CustomAlert
              message={alertMessage}
              onClose={() => setShowCustomAlert(false)}
            />
          )}
        </div>
      </div>
      <div className="border-l-4 border-black"></div>
      <div className="sm:w-3/5 w-full sm:h-full h-96">
        <GoogleMap
          center={center || { lat: 28.6139, lng: 77.209 }}
          zoom={8}
          mapContainerClassName="w-full h-full"
        >
          {from && <Marker position={from.geometry.location} />}
          {to && <Marker position={to.geometry.location} />}
        </GoogleMap>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-40">
          <div className="bg-white p-6 rounded-lg w-4/5 sm:w-1/3 relative z-50 shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-xl sm:text-2xl text-black font-bold mb-4">
              Booking Details
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-gray-700 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number:</label>
              <input
                type="text"
                name="number"
                value={userDetails.number}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-gray-700 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
            {error && <p className="text-red-500 font-semibold">{error}</p>}
            <div className="mb-4 flex justify-between">
              <p className="font-semibold text-black">Price:</p>
              <p className="font-semibold text-black">₹{price}</p>
            </div>
            <div className="mb-4 flex justify-between">
              <p className="font-semibold text-black">GST (18%):</p>
              <p className="font-semibold text-black">₹{gst}</p>
            </div>
            <hr className="my-2 border-t border-gray-300" />
            <div className="mb-4 flex justify-between">
              <p className="font-semibold text-black">Grand Total:</p>
              <p className="font-semibold text-black">₹{grandTotal}</p>
            </div>
            <button
              onClick={handleProceedToPay}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      )}
      {successMessage && (
        <SuccessAlert
          message={successMessage}
          onClose={() => setSuccessMessage("")}
        />
      )}
    </div>
  );
}
