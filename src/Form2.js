import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form2 = ({ formData, setFormData }) => {
  const { firstName, lastName, address } = formData;
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateName = (name) => {
    // Name validation regex
    const nameRegex = /^[A-Za-z]{2,50}$/;
    return nameRegex.test(name);
  };

  const validateForm = () => {
    const errors = {};

    if (!firstName || !validateName(firstName)) {
      errors.firstName = "Please enter a valid first name";
    }

    if (lastName && !validateName(lastName)) {
      errors.lastName = "Please enter a valid last name";
    }

    if (!address || address.length < 10) {
      errors.address = "Address must be at least 10 characters long";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePrev = (e) => {
    e.preventDefault();
    navigate("/form1");
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/form3");
    }
  };

  return (
    <form className="form-container">
      <h2>Form 2</h2>
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
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
          value={lastName}
          onChange={handleInputChange}
        />
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
      </div>
      <div className="form-group">
        <label>Address:</label>
        <textarea name="address" value={address} onChange={handleInputChange} />
        {errors.address && <p className="error-message">{errors.address}</p>}
      </div>
      <button type="button" onClick={handlePrev}>
        Back
      </button>
      <button type="button" onClick={handleNext}>
        Save and Next
      </button>
    </form>
  );
};

export default Form2;
