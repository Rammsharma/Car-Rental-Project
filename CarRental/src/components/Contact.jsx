import React from "react";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <div className="aboutus">
        <h1>contact Us</h1>
      </div>
      <div className="about">
        <h3 className="sub-heading">Contact Us:</h3>{" "}
        <p>
          {" "}
          Ready to hit the road? Contact Rapid Ride Rental today and discover
          the best way to explore Dehradun and beyond. Book your ride now and
          experience the difference with Rapid Ride Rental!
        </p>
        <br />
        <br />
        📞Phone: +91-766827000
        <br />
        Email: contact@car-rental.com
        <br />
        📍Address: Morowala, Clement Town, Dehradun, Uttarakhand, Pin Code –
        248009
        <Footer />
      </div>
    </>
  );
}

export default Contact;
