import React from "react";
import "./styles/PropertyDetailsPage.css";

const PropertyDetailsPage = () => {
  const property = {
    title: "Beach Villa",
    location: "Goa, India",
    description: "A stunning beach villa with sea views, private pool, and modern amenities.",
    price: "₹20,000/night",
    rating: "4.9",
    images: [
      "https://th.bing.com/th/id/OIP.JS2EDiA-ncYNKkGglNQtJQHaEd?rs=1&pid=ImgDetMain",
      "https://www.theluxevoyager.com/wp-content/uploads/2020/02/The-Legian-Bali-Seminyak-Pool.jpg",
      "https://i.pinimg.com/originals/0e/13/e7/0e13e75e1d96ca465913093429792f28.jpg",
    ],
  };

  return (
    <div className="property-details-page">
      <h2>{property.title}</h2>
      <p>Location: {property.location}</p>
      <div className="property-images">
        {property.images.map((image, index) => (
          <img src={image} alt={`Property Image ${index + 1}`} key={index} />
        ))}
      </div>
      <p>{property.description}</p>
      <p>Price: {property.price}</p>
      <p>Rating: ⭐{property.rating}</p>
      <button className="search-button">Book Now</button>
    </div>
  );
};

export default PropertyDetailsPage;
