import React from "react";
import "./HotelCard.css"; // Custom CSS for styling the hotel card
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import axios from "axios"; // Import axios for making HTTP requests

const HotelCard = ({ image, name, address, price, id, user, onDelete }) => {
  console.log(user, "user");

  return (
    <div className="hotel-card">
      <img src={image} alt={name} className="hotel-img" />
      <div className="hotel-details">
        <p className="hotel-description">{address}</p>
        <p className="hotel-price">Price: ${price} per night</p>
        {user.email ? (
          <div className="button-container">
            <button className="edit-button">
              <Link to={`/hotels/${id}`} className="edit-link">
                Edit hotel
              </Link>
            </button>
            <button className="delete-button" onClick={onDelete}>
              Delete
            </button>{" "}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HotelCard;
