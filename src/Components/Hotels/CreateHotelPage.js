import React, { useState } from "react";
import axios from "axios";
import "./CreateHotelPage.css"; // Import your CSS file for styling

import { useNavigate } from "react-router-dom";

const CreateHotelPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    rating: "",
    imageUrl: "", // Add imageUrl to the initial state
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://reacthotelbackend.azurewebsites.net/api/hotels", formData);
      alert("Hotel created successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating hotel:", error);
    }
  };

  return (
    <div className="create-hotel-container">
      <div className="create-hotel-card">
        <h2>Create Hotel</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Image URL:</label> {/* Add input for imageUrl */}
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Create Hotel</button>
        </form>
      </div>
    </div>
  );
};

export default CreateHotelPage;
