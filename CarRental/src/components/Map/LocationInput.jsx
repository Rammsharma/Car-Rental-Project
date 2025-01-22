import React from "react";
import { Autocomplete } from "@react-google-maps/api";

export default function LocationInput({ label, onPlaceSelected }) {
  let autocomplete = null;

  const handlePlaceChanged = () => {
    const place = autocomplete.getPlace();
    if (place) onPlaceSelected(place);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <Autocomplete
        onLoad={(ref) => (autocomplete = ref)}
        onPlaceChanged={handlePlaceChanged}
      >
        <input
          type="text"
          placeholder={`Enter ${label.toLowerCase()}`}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </Autocomplete>
    </div>
  );
}
