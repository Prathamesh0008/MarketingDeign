// EnquiryImageBox.jsx
import React from 'react';
import './EnquiryImageBox.css'; // Put the CSS above in this file

const EnquiryImageBox = ({ imageSrc, label }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="image-hover-wrapper">
        <img src={imageSrc} alt={label} />
        <div className="image-hover-overlay">
          <div className="enquiry-box">Enquiry Now</div>
        </div>
      </div>
      <h3 className="image-label">{label}</h3>
    </div>
  );
};

export default EnquiryImageBox;
