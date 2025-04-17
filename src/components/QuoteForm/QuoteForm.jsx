import React, { useState } from "react";
import "./QuoteForm.css";
import { FaUser, FaPhone, FaEnvelope, FaCity, FaPhoneAlt } from "react-icons/fa";
import axios from "axios";
import Popup from "../Popup/Popup"; // Make sure the path is correct

const countryCodes = [
  { code: "+91", name: "India" },
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+61", name: "Australia" },
  { code: "+81", name: "Japan" },
  { code: "+971", name: "UAE" },
  { code: "+49", name: "Germany" },
  { code: "+33", name: "France" },
  { code: "+86", name: "China" },
  { code: "+7", name: "Russia" },
  { code: "+34", name: "Spain" },
  { code: "+39", name: "Italy" },
  { code: "+27", name: "South Africa" },
  { code: "+55", name: "Brazil" },
  { code: "+62", name: "Indonesia" },
  { code: "+60", name: "Malaysia" },
  { code: "+63", name: "Philippines" },
  { code: "+64", name: "New Zealand" },
  { code: "+82", name: "South Korea" },
  { code: "+90", name: "Turkey" },
  { code: "+98", name: "Iran" },
  { code: "+20", name: "Egypt" },
  { code: "+92", name: "Pakistan" },
  { code: "+880", name: "Bangladesh" },
  { code: "+966", name: "Saudi Arabia" },
  { code: "+964", name: "Iraq" },
  { code: "+1-876", name: "Jamaica" },
  { code: "+94", name: "Sri Lanka" },
  { code: "+965", name: "Kuwait" },
  { code: "+968", name: "Oman" },
  { code: "+974", name: "Qatar" },
  { code: "+46", name: "Sweden" },
  { code: "+47", name: "Norway" },
  { code: "+31", name: "Netherlands" },
  { code: "+32", name: "Belgium" },
  { code: "+351", name: "Portugal" },
  { code: "+420", name: "Czech Republic" },
  { code: "+45", name: "Denmark" },
  { code: "+43", name: "Austria" },
  { code: "+41", name: "Switzerland" }
];

const QuoteForm = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false); // State for success popup
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    countryCode: "+91",
    phone: ""
  });

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openSuccessPopup = () => {
    setIsSuccessPopupOpen(true);
    setTimeout(() => setIsSuccessPopupOpen(false), 3000); // Close after 3 seconds
  };

  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    // Allow only numeric values and check if the length is <= 10
    if (/^\d{0,10}$/.test(phone)) {
      setFormData({ ...formData, phone });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure the phone number is exactly 10 digits long
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/quote", formData);
      openSuccessPopup(); // Show success popup
      setFormData({
        name: "",
        email: "",
        city: "",
        countryCode: "+91",
        phone: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="quote-form-sidebar">
      <div className="quote-form-container">
        <div className="quote-form-header">
          <span onClick={openPopup}>Pre Register</span>
          <span className="quote-form-divider">|</span>
          <div className="quote-form-phone">
            <FaPhoneAlt className="quote-form-phone-icon" />
            <span id="quote-form-phone-number">+91 2248970339</span>
          </div>
        </div>

        <div className="quote-form-instant-callback" onClick={openPopup}>
          <FaPhoneAlt className="quote-form-callback-icon" />
          <span>Instant Callback</span>
        </div>

        <h2>Get the Best Quote</h2>
        <form onSubmit={handleSubmit}>
          <div className="quote-form-input-group">
            <FaUser className="quote-form-input-icon" />
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="quote-form-input-group">
            <FaEnvelope className="quote-form-input-icon" />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="quote-form-input-group">
            <FaCity className="quote-form-input-icon" />
            <input
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              required
            />
          </div>

          <div className="quote-form-input-group phone-row">
            <select
              className="quote-form-country-code"
              value={formData.countryCode}
              onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
            >
              {countryCodes.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.name} ({country.code})
                </option>
              ))}
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handlePhoneChange}
              required
            />
          </div>

          <button type="submit" className="quote-form-submit-btn">
            Get Now
          </button>
        </form>
      </div>

      {isPopupOpen && <Popup isOpen={isPopupOpen} onClose={closePopup} title="Get Best Quote" />}

      {/* Success Popup */}
      {isSuccessPopupOpen && (
        <div className="success-popup">
          <h3>Your quote has been submitted successfully!</h3>
        </div>
      )}
    </div>
  );
};

export default QuoteForm;
