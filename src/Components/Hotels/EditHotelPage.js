import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import "./EditHotelPage.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";

const EditHotelPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the id parameter from the URL

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    rating: "",
    imageUrl: "", // Add imageUrl to the state
  });

  useEffect(() => {
    // Fetch hotel data by ID when component mounts
    const fetchHotel = async () => {
      try {
        const response = await axios.get(`/hotels/${id}`);
        const { name, address, rating, imageUrl } = response.data; // Destructure imageUrl from response data
        setFormData({ name, address, rating, imageUrl }); // Set imageUrl in the state
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };

    fetchHotel();
  }, [id]); // Include id in the dependency array to fetch data when id changes

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/hotels/${id}`, formData);
      alert("Hotel updated successfully!");

      navigate("/dashboard");
      // Optionally, redirect the user to another page after successful submission
    } catch (error) {
      console.error("Error updating hotel:", error);
      // Handle error appropriately (e.g., display error message to user)
    }
  };

  return (
    <div className="edit-hotel-container">
      <div className="edit-hotel-card">
        <h2>Edit Hotel</h2>
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
          <button type="submit">Update Hotel</button>
        </form>
      </div>
    </div>
  );
};

export default EditHotelPage;
