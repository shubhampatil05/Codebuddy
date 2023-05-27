import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Posts from "./Posts";

const App = () => {
  const [formData, setFormData] = React.useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "",
    phoneNumber: "",
    acceptTermsAndCondition: false,
  });

  const submitForm = () => {
    fetch("https://codebuddy.review/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailId: formData.emailId,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        countryCode: formData.countryCode,
        phoneNumber: formData.phoneNumber,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted:", data);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={<Form1 formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/form1"
            element={<Form1 formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/form2"
            element={<Form2 formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/form3"
            element={
              <Form3
                formData={formData}
                setFormData={setFormData}
                submitForm={submitForm}
              />
            }
          />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
