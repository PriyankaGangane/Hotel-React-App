import React from "react";
import "./Header.css"; // Custom CSS for styling the header

const Header = ({ backgroundImage, title, user }) => {
  return (
    <header
      className="header"
      style={{ backgroundColor: "#7F00FF" }}
    >
      <div className="header-content">
        <h1 className="headerTitle">WHERE EVERY STAY FEELS LIKE HOME!!</h1>
        <p className="headerDesc">
        !!..LET US EXCEED YOUR EXPECTATIONS AND CREATE UNFORGETTABLE MEMORIES..!!
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
