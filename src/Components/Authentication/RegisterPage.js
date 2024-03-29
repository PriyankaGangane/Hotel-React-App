import React, { useState } from "react";
import axios from "axios";
import "./RegisterPage.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNo: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //localhost:5000/api/auth/register
      http: await axios.post("https://reacthotelbackend.azurewebsites.net/api/auth/register", formData);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && (
            <p className="error-message">{errors.firstName}</p>
          )}
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && (
            <p className="error-message">{errors.lastName}</p>
          )}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Mobile number should be 10 digits"
            required
          />
          {errors.mobileNo && (
            <p className="error-message">{errors.mobileNo}</p>
          )}
        </div>
        <button type="submit">Register</button>
        <p>
          if you already have account <div onClick={() => navigate("/login")}>login</div> here
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
