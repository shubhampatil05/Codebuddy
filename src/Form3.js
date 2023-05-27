import React from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form3 = ({ formData, setFormData, submitForm }) => {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: inputValue }));
  };

  const handlePrev = (e) => {
    e.preventDefault();
    navigate("/form2");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
    navigate("/posts");
  };

  return (
    <div className="form-container">
      <h2>Form 3</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Country Code:
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleInputChange}
            >
              <option value="">Select Country Code</option>
              <option value="+91">India (+91)</option>
              <option value="+1">America (+1)</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Accept Terms and Conditions:
            <input
              type="checkbox"
              name="acceptTermsAndCondition"
              checked={formData.acceptTermsAndCondition}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="button" onClick={handlePrev}>
            Back
          </button>
          <button
            type="submit"
            disabled={
              !formData.countryCode ||
              !formData.phoneNumber ||
              !formData.acceptTermsAndCondition
            }
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form3;
