import React from "react";
import "./styles/PropertyCard.css";

const PropertyCard = ({ image, title, location, price, rating }) => {
  return (
    <div className="property-card">
      <img src={image} alt={title} />
      <div className="property-info">
        <h3>{title}</h3>
        <p>{location}</p>
        <p>Price: {price}</p>
        <p>Rating: ⭐{rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
