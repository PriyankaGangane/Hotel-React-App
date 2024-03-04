import React, { useState, useEffect } from "react";
import axios from "axios";
import HotelCard from "./HotelCard";
import "./HotelList.css"; // Custom CSS for styling the hotel list

const HotelList = ({ user }) => {
  const [hotels, setHotels] = useState([]);

  // Function to fetch hotels from the API
  const fetchHotels = async () => {
    try {
      const response = await axios.get("/hotels");
      setHotels(response.data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  // Fetch hotels when the component mounts
  useEffect(() => {
    fetchHotels();
  }, []);

  // Function to handle deletion of a hotel
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/hotels/${id}`);
      // After successful deletion, fetch updated list of hotels
      fetchHotels();
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  };

  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="hotel-card">
          {console.log(hotel, "check")}
          <HotelCard
            name={hotel.name}
            address={hotel.address}
            rating={hotel.price}
            image={hotel.imageUrl}
            id={hotel._id}
            user={user}
            onDelete={() => handleDelete(hotel._id)} // Pass the delete function
          />
        </div>
      ))}
    </div>
  );
};

export default HotelList;
