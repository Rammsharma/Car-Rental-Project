import React from "react";
import Mapping from "../../components/Map/Mapping";

function Booking() {
  const screenHeight = window.innerHeight * 0.52;
  return (
    <div className="text-black">
      <Mapping />
    </div>
  );
}

export default Booking;
