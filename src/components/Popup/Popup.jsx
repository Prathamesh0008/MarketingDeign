import React, { useState } from "react";
import "./Popup.css";
import { FaPhoneAlt, FaMapMarkedAlt, FaTag } from "react-icons/fa";
import logo from "../../assets/logo1.svg"; // Ensure the logo path is correct

const Popup = ({ isOpen, onClose, title }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // State to handle submission success

  const getTitleColor = () => {
    switch (title.toLowerCase()) {
      case "download brochure":
        return "#4A90E2";
      case "get best quote":
        return "#27ae60";
      case "enquire now":
        return "#f39c12";
      default:
        return "#333";
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Basic validation
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
  
    if (!validatePhoneNumber(formData.phone)) {
      setError("Phone number must be 10 digits.");
      return;
    }
  
    setError(""); // Reset error if form is valid
  
    // Data to be submitted to the backend
    const formDataToSubmit = {
      name: formData.name,
      email: formData.email,
      city: "Some City", // Replace with actual city if you have a city input
      countryCode: formData.countryCode,
      phone: formData.phone,
    };
  
    // Sending POST request to backend API
    fetch("http://localhost:5000/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataToSubmit),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Quote submitted and saved!") {
          setSuccess(true); // Show success message
        } else {
          setError("There was an error submitting your quote.");
        }
      })
      .catch((err) => {
        setError("An error occurred. Please try again.");
        console.error(err);
      });
  
    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      countryCode: "+91",
    });
  };
  

  const handleCloseSuccess = () => {
    setSuccess(false); // Close confirmation popup
    onClose(); // Close the main popup
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="popup-header">
          <h2 className="popup-title" >
            {title}
          </h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="popup-body">
          {success ? (
            // Confirmation message
            <div className="success-message">
              <h3>Success!</h3>
              <p>Thank you for registering. You will receive a confirmation email shortly.</p>
              <button onClick={handleCloseSuccess}>Close</button>
            </div>
          ) : (
            <div className="popup-left">
              <img src={logo} alt="Logo" className="popup-big-logo" />
              <h3 className="promise-title">We Promise</h3>
              <div className="popup-point">
                <FaPhoneAlt /> Instant Call Back
              </div>
              <div className="popup-point">
                <FaMapMarkedAlt /> Free Site Visit
              </div>
              <div className="popup-point">
                <FaTag /> Unmatched Price
              </div>
            </div>
          )}

          {!success && (
            <div className="popup-right">
              <p>
                Register here and <span className="highlight-text">Avail the Best Offers!!</span>
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <div className="phone-input">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    required
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                    <option value="+971">+971</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {error && <div className="error-message">{error}</div>}

                <button type="submit" className="register-btn">
                  Register Now
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
