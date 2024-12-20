import React from "react";
import PropertyCard from "../components/PropertyCard";

function HomePage() {
  const properties = [
    { id: 1, name: "Beach House", description: "Oceanfront property.", image: "/beach-house.jpg" },
    { id: 2, name: "Mountain Cabin", description: "Cozy mountain retreat.", image: "/mountain-cabin.jpg" },
  ];

  return (
    <div>
      <h1>Welcome to Airbnb Clone</h1>
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
