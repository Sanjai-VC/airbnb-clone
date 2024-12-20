import React from "react";

function MyBookingsPage() {
  const bookings = [
    { id: 1, property: "Beach House", checkIn: "2024-12-25", checkOut: "2024-12-30" },
    { id: 2, property: "Mountain Cabin", checkIn: "2025-01-05", checkOut: "2025-01-10" },
  ];

  return (
    <div>
      <h1>My Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.property} (Check-In: {booking.checkIn}, Check-Out: {booking.checkOut})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyBookingsPage;
