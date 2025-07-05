import React from 'react';
import { useParams } from 'react-router-dom';
import citydata from '../data/citydata';

const CityDetails = () => {
  const { cityId } = useParams(); // Get city ID from URL
  const city = citydata.find((x) => x.id === parseInt(cityId)); // Find city by ID

  if (!city) {
    return <p>City not found!</p>;
  }

  return (
    <div className="city-details">
      <h1>{city.Id}</h1>
      <p><strong>Description:</strong> {city.description}</p>
      <p><strong>Population:</strong> {city.population}</p>
      <p><strong>Status:</strong> {city.status}</p>
      <img src={city.image} alt={city.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
    </div>
  );
};

export default CityDetails;