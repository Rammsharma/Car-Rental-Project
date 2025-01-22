import React from "react";
import loader from "../components/image/loader.gif";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen mt-[-100px]">
      <img
        src={loader}
        alt="Loading..."
        className="w-32 md:w-40 lg:w-48 xl:w-56"
      />
    </div>
  );
};

export default Loader;
