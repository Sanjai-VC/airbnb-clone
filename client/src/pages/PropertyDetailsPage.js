import React, { useState } from "react";
import BookingForm from "../components/BookingForm";

function PropertyDetailsPage() {
  const [bookingData, setBookingData] = useState(null);

  const property = {
    id: 1,
    name: "Beach House",
    description: "A beautiful house near the ocean.",
    image: "/beach-house.jpg",
    price: "$200 per night",
  };

  const handleBookingSubmit = (data) => {
    setBookingData(data);
    alert("Booking successful!");
  };

  return (
    <div>
      <h1>{property.name}</h1>
      <img src={property.image} alt={property.name} />
      <p>{property.description}</p>
      <p>{property.price}</p>
      <BookingForm onSubmit={handleBookingSubmit} />
      {bookingData && <p>Booking confirmed for {bookingData.guests} guests!</p>}
    </div>
  );
}

export default PropertyDetailsPage;
