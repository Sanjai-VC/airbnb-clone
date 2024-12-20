import React from "react";

function BookingForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    onSubmit({
      checkIn: data.get("checkIn"),
      checkOut: data.get("checkOut"),
      guests: data.get("guests"),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Check-In:
        <input type="date" name="checkIn" required />
      </label>
      <label>
        Check-Out:
        <input type="date" name="checkOut" required />
      </label>
      <label>
        Guests:
        <input type="number" name="guests" required />
      </label>
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
