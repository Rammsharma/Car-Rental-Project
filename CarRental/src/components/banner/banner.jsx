import React, { useState, useEffect } from "react";
import popUpImage from "../banner/bannerrr.jpg"; // Your pop-up image path

export default function HomePage() {
  const [showModal, setShowModal] = useState(true); // Modal initially visible

  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal when the cross button is clicked
  };

  useEffect(() => {
    // Modal is visible on page load, you can customize the delay if needed
    setShowModal(true);
  }, []);

  return (
    <div>
      {/* The pop-up modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg relative">
            {/* Cross button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 text-2xl"
            >
              &times;
            </button>
            {/* Pop-up image */}
            <a href="/luxury">
              <img
                src={popUpImage}
                alt="Pop-up"
                className="max-w-sm max-h-96"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
