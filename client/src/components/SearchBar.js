import React, { useState } from "react";
import "./Searchbar.css"; // Add styles for the search bar

const Searchbar = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ location, checkIn, checkOut, guests });
    }
  };

  return (
    <div className="searchbar">
      <div className="searchbar__field">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          placeholder="Where are you going?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="searchbar__field">
        <label htmlFor="checkIn">Check-in</label>
        <input
          type="date"
          id="checkIn"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>
      <div className="searchbar__field">
        <label htmlFor="checkOut">Check-out</label>
        <input
          type="date"
          id="checkOut"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>
      <div className="searchbar__field">
        <label htmlFor="guests">Guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Searchbar;
