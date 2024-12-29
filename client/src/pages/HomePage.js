import React from "react";
import "./styles/HomePage.css";
import PropertyCard from "../components/PropertyCard";

const HomePage = () => {
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
  ];

  return (
    <div className="home-page">
      <h1>Explore Unique Stays</h1>
      <div className="property-list">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
