import React from "react";

const BookingCard = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row">
      {/* Left Section: Car Info */}
      <div className="w-full md:w-1/2">
        <div className="border-b-4 border-indigo-700 pb-2">
          <h2 className="text-lg font-bold text-indigo-700 uppercase">
            Mahindra Scorpio
          </h2>
        </div>
        <div className="mt-4">
          <img
            src="https://via.placeholder.com/300x200" // Replace this with the actual car image URL
            alt="Car"
            className="rounded-md w-full"
          />
        </div>
      </div>

      {/* Right Section: Booking Info */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
        <div className="bg-indigo-100 rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold text-indigo-900">MUV</h3>
          <p className="text-sm text-gray-600">Location: Dehradun</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Tue, 31 Dec 2024</p>
            <p className="font-semibold text-gray-800">09:30 AM</p>
          </div>
          <div>
            <p className="text-gray-600">Fri, 03 Jan 2025</p>
            <p className="font-semibold text-gray-800">06:30 PM</p>
          </div>
        </div>
        <div className="my-4 text-center">
          <span className="text-indigo-600 font-bold">Duration: </span>
          <span className="text-gray-800">3 Days and 9 hours</span>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Package Type</span>
            <span className="font-medium text-gray-800">300 kms/day</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">Free kms for rental</span>
            <span className="font-medium text-gray-800">1013 kms</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">Extra km charges at</span>
            <span className="font-medium text-gray-800">₹12/km</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PickupDrop = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-lg font-bold text-indigo-700 mb-4">
        Car Pickup & Drop Location
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">
            Pickup Location | Time | Charges
          </h3>
          <textarea
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Hub location | Time | Free"
            rows="3"
          />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">
            Drop Location | Time | Charges
          </h3>
          <textarea
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Hub location | Time | Free"
            rows="3"
          />
        </div>
      </div>
    </div>
  );
};

const CarBookingPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <BookingCard />
      <PickupDrop />
    </div>
  );
};

export default CarBookingPage;
