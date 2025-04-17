import React, { useState } from 'react';
import './AddressSection.css';
import { MapPin } from 'lucide-react';
import locationmap from '../../../assets/locationmap.webp';
import Popup from '../../Popup/Popup'; // Import Popup

const AddressSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');

  const openPopup = (title) => {
    setPopupTitle(title);
    setIsPopupOpen(true);
  };

  return (
    <div className="address-section">
      <h2 className="address-title">Address of Godrej Horizon Wadala</h2>

      <div className="address-top">
        <div className="map-view">
          <h3>Map View</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609959546!2d72.74109904530941!3d19.08219783828737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cefbb42dd07d%3A0x4217c658027c6205!2sWadala%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713277487532!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="location-map">
          <h3>Location Map</h3>
          <div
            className="plan-image-wrapper"
            onClick={() => openPopup("Download Location Map")}
            style={{ cursor: "pointer" }}
          >
            <img src={locationmap} alt="Location Map" className="plan-img" />
            <div className="plan-hover-overlay">
              <div className="enquiry-now">Download Location Map</div>
            </div>
          </div>
        </div>
      </div>

      <div className="location-highlights">
        <div className="highlight"><MapPin /> Reach Wadala Railway Station within 5 mins</div>
        <div className="highlight"><MapPin /> 10 mins from Tata Memorial and Kem Hospital</div>
        <div className="highlight"><MapPin /> ITC Grand Central - 15 mins</div>
        <div className="highlight"><MapPin /> Get to St Joseph High School in 3 min</div>
        <div className="highlight"><MapPin /> VJTI College is 4 mins drive away</div>
        <div className="highlight"><MapPin /> Reach Five Gardens in 5 mins</div>
      </div>

      {/* ✅ Popup Integration */}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title={popupTitle}
      />
    </div>
  );
};

export default AddressSection;
