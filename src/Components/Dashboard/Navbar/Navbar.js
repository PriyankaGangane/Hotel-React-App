import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  console.log(user, "userdd----->");
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "1vh",
    backgroundColor: "#333",
    color: "#fff",
    padding: "0rem",
  };

  const ulStyle = {
    display: "flex",
    listStyle: "none",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 1rem", 
  };
  const navigate = useNavigate();

  const handleogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <nav style={navStyle}>
      <h3>MOONLIGHT</h3>
      <ul style={ulStyle}>
       
        <li>
          {user ? (
            user.email
          ) : (
            <Link style={linkStyle} to="/login">
              Login
            </Link>
          )}
        </li>
        <li>
          {user.email ? (
            <Link style={linkStyle} to="/login" onClick={() => handleogout()}>
              logout
            </Link>
          ) : (
            <Link style={linkStyle} to="/">
              Register
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
