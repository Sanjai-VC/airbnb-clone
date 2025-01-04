import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/HomePage.css";
import PropertyCard from "../components/PropertyCard";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const properties = [
    {
      image: "https://patch.com/img/cdn20/users/24938404/20210624/040857/3-westchester-apartments-flight-facade-evening-4-copy___24160855313.jpg",
      title: "Luxury Apartment",
      location: "Mumbai, India",
      price: "₹15,000/night",
      rating: "4.8",
    },
    {
      image: "https://images.rosewoodhotels.com/is/image/rwhg/heroshot-punta-bonita-pool-and-beach-1",
      title: "Beach Villa",
      location: "Goa, India",
      price: "₹20,000/night",
      rating: "4.9",
    },
    {
      image: "https://th.bing.com/th/id/OIP.F8OXv5P1KllIpDrn40PtvgHaE8?rs=1&pid=ImgDetMain",
      title: "Underwater Resorts",
      location: "The Palm, Dubai",
      price: "₹25,000/night",
      rating: "4.9",
    },
    {
      image: "https://th.bing.com/th/id/OIP.J9vwtQ3baIGd7Kwz-vsvygHaE6?rs=1&pid=ImgDetMain",
      title: "Forest Camp",
      location: "Ooty, India",
      price: "₹20,000/night",
      rating: "4.5",
    },
  ];

  const handleSearchChange = (event) => {
    const { name, value } = event.target;
    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  const handleSearch = () => {
    // Navigate to SearchResultsPage and pass the search params in state
    navigate("/search-results", { state: searchParams });
  };

  return (
    <div className="home-page">
      <h1>Explore Unique Stays</h1>
      <div className="search-section">
        <input
          type="text"
          name="location"
          value={searchParams.location}
          onChange={handleSearchChange}
          placeholder="Location"
        />
        <input
          type="date"
          name="checkIn"
          value={searchParams.checkIn}
          onChange={handleSearchChange}
        />
        <input
          type="date"
          name="checkOut"
          value={searchParams.checkOut}
          onChange={handleSearchChange}
        />
        <input
          type="number"
          name="guests"
          value={searchParams.guests}
          onChange={handleSearchChange}
          min="1"
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="property-list">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
