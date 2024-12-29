import React from "react";
import "./styles/MyBookingsPage.css";

const MyBookingsPage = () => {
  const bookings = [
    {
      property: "Luxury Apartment",
      location: "Mumbai, India",
      dates: "25th Dec - 28th Dec 2024",
      price: "₹45,000",
    },
    {
      property: "Beach Villa",
      location: "Goa, India",
      dates: "1st Jan - 5th Jan 2025",
      price: "₹80,000",
    },
  ];

  return (
    <div className="my-bookings-page">
      <h2>My Bookings</h2>
      <div className="bookings-list">
        {bookings.map((booking, index) => (
          <div className="booking-card" key={index}>
            <h3>{booking.property}</h3>
            <p>Location: {booking.location}</p>
            <p>Dates: {booking.dates}</p>
            <p>Total Price: {booking.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
