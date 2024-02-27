import React from "react";
import "./Header.css"; // Custom CSS for styling the header

const Header = ({ backgroundImage, title, user }) => {
  return (
    <header
      className="header"
      style={{ backgroundColor: "#003580" }}
    >
      <div className="header-content">
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>

        {user.email ? (
          <button className="headerBtn">
            <a href="/hotels">Add Hotel</a>
          </button>
        ) : (
          <button className="headerBtn">
            <a href="/">Sign in / Register</a>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
