import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import './styles/SearchResultPage.css';

const SearchResultsPage = () => {
  const location = useLocation(); // To get query parameters from URL
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('price'); // Sort by price by default
  const [filters, setFilters] = useState({
    priceRange: [0, 1000], // Default price range
    amenities: [],
  });

  // Extract query parameters from the URL (e.g., location, dates, guests)
  const { location: queryLocation, checkIn, checkOut, guests } = location.state || {};

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        // Build the query params string
        const queryParams = new URLSearchParams({
          location: queryLocation,
          checkIn,
          checkOut,
          guests,
          sortBy,
          minPrice: filters.priceRange[0],
          maxPrice: filters.priceRange[1],
          amenities: filters.amenities.join(','),
        }).toString();

        const response = await fetch(`http://localhost:5000/api/properties/search?${queryParams}`);
        const data = await response.json();
        setProperties(data.properties); // Assuming the response contains an array of properties
      } catch (err) {
        setError('Failed to fetch properties');
      } finally {
        setLoading(false);
      }
    };

    if (queryLocation && checkIn && checkOut && guests) {
      fetchProperties();
    }
  }, [queryLocation, checkIn, checkOut, guests, sortBy, filters]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: newValue,
    }));
  };

  const handleAmenityChange = (amenity) => {
    setFilters((prevFilters) => {
      const newAmenities = prevFilters.amenities.includes(amenity)
        ? prevFilters.amenities.filter((item) => item !== amenity)
        : [...prevFilters.amenities, amenity];
      return { ...prevFilters, amenities: newAmenities };
    });
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="search-results-page">
      <div className="filters-container">
        <div className="sort-by">
          <label htmlFor="sort-by">Sort by: </label>
          <select id="sort-by" value={sortBy} onChange={handleSortChange}>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div className="price-range">
          <label>Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceRangeChange(e, [e.target.value, filters.priceRange[1]])}
          />
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceRangeChange(e, [filters.priceRange[0], e.target.value])}
          />
        </div>
        <div className="amenities">
          <h4>Amenities:</h4>
          <label>
            <input
              type="checkbox"
              checked={filters.amenities.includes('wifi')}
              onChange={() => handleAmenityChange('wifi')}
            />
            Wifi
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.amenities.includes('pool')}
              onChange={() => handleAmenityChange('pool')}
            />
            Pool
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.amenities.includes('parking')}
              onChange={() => handleAmenityChange('parking')}
            />
            Parking
          </label>
        </div>
      </div>

      <div className="properties-container">
        <h1>Search Results</h1>
        <p>{properties.length} properties found</p>
        <div className="property-list">
          {properties.length > 0 ? (
            properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <p>No properties found for the selected criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
