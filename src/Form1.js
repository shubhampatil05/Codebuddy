import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form1 = ({ formData, setFormData }) => {
  const { emailId, password } = formData;
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password validation regex
    const passwordRegex =
      /^(?=.*[a-z]{2,})(?=.*[A-Z]{2,})(?=.*\d{2,})(?=.*[@$!%*?&]{2,}).{8,}$/;
    return passwordRegex.test(password);
  };

  const validateForm = () => {
    const errors = {};

    if (!emailId || !validateEmail(emailId)) {
      errors.emailId = "Please enter a valid email ID";
    }

    if (!password || !validatePassword(password)) {
      errors.password =
        "Password must contain minimum 2 uppercase letters, 2 lowercase letters, 2 numbers, and 2 special characters.";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/form2");
    }
  };

  return (
    <form className="form-container">
      <h2>Form 1</h2>
      <div className="form-group">
        <label>Email ID:</label>
        <input
          type="text"
          name="emailId"
          value={emailId}
          onChange={handleInputChange}
        />
        {errors.emailId && <p className="error-message">{errors.emailId}</p>}
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>
      <button type="button" onClick={handleNext}>
        Save and Next
      </button>
    </form>
  );
};

export default Form1;
