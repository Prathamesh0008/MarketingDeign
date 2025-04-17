import React, { useState } from 'react';
import './PlanImageBox.css';
import Popup from '../Popup/Popup'; // Import the Popup component

const PlanImageBox = ({ imageSrc, label }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    setIsPopupOpen(true); // Open the popup when the image is clicked
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <div className="plan-box">
      <div className="plan-image-wrapper" onClick={handleClick}>
        <img src={imageSrc} alt={label} className="plan-img" />
        <div className="plan-hover-overlay">
          <div className="enquiry-now">Enquiry Now</div>
        </div>
        <div className="plan-label">{label}</div>
      </div>

      {/* Add the Popup component */}
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        title={label}
        content={`Detailed information about ${label} goes here.`}
      />
    </div>
  );
};

export default PlanImageBox;
