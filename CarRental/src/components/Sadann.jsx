import React, { useState } from "react";

const Sadan = () => {
  const [promoCode, setPromoCode] = useState("");
  const [luggageCarrier, setLuggageCarrier] = useState(false);
  const [tripProtection, setTripProtection] = useState(false);

  const rentalCharges = 12483;
  const gst = 3495.24;
  const refundableDeposit = 3000;

  const totalAmount = rentalCharges + gst + refundableDeposit;

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Booking Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Rental Charges</span>
          <span className="font-medium text-gray-800">
            ₹ {rentalCharges.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">GST</span>
          <span className="font-medium text-gray-800">
            ₹ {gst.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Refundable Deposit</span>
          <span className="font-medium text-gray-800">
            ₹ {refundableDeposit.toLocaleString()}
          </span>
        </div>
        <hr className="border-t my-4" />
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="luggageCarrier"
            checked={luggageCarrier}
            onChange={() => setLuggageCarrier(!luggageCarrier)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label htmlFor="luggageCarrier" className="text-gray-700">
            Luggage carrier (Subject to availability)
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="tripProtection"
            checked={tripProtection}
            onChange={() => setTripProtection(!tripProtection)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label htmlFor="tripProtection" className="text-gray-700">
            Trip Protection Plan{" "}
            <span className="text-blue-600">View Details</span>
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Promo Code"
            value={promoCode}
            onChange={handlePromoCodeChange}
            className="w-full border rounded-md p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <hr className="border-t my-4" />
        <div className="flex justify-between text-lg font-semibold">
          <span>Total Amount</span>
          <span>₹ {totalAmount.toLocaleString()}</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Sadan;
