import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} />
      <h2>{property.name}</h2>
      <p>{property.description}</p>
      <Link to={`/properties/${property.id}`}>View Details</Link>
    </div>
  );
}

export default PropertyCard;

