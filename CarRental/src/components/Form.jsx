import React, { useState } from "react";
import DatePicker from "react-datepicker"; // Install with `npm install react-datepicker`
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [journeyDate, setJourneyDate] = useState(new Date());
  const [journeyTime, setJourneyTime] = useState("11:53 PM");

  return (
    <div className="search-container">
      <div className="form-section">
        <h2>Search your best cars here</h2>
        <form className="search-form">
          <input type="text" placeholder="From" className="form-input" />
          <input type="text" placeholder="To" className="form-input" />
          <DatePicker
            selected={journeyDate}
            onChange={(date) => setJourneyDate(date)}
            dateFormat="dd/MM/yyyy"
            className="form-input"
          />
          <input
            type="time"
            placeholder="Journey Time"
            value={journeyTime}
            onChange={(e) => setJourneyTime(e.target.value)}
            className="form-input"
          />
          <select className="form-input">
            <option value="AC Car">AC Car</option>
            <option value="Non-AC Car">Non-AC Car</option>
          </select>
          <button type="submit" className="search-button">
            Find Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
