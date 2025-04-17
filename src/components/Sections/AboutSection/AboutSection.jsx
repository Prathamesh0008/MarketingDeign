import React, { useState } from "react";
import './AboutSection.css';
import logo from '../../../assets/logo1.svg';
import qrCode from '../../../assets/qrcode.webp';
import housebazaarLogo from '../../../assets/homebazaar_logo_bottom.svg'; // update path if needed
import Popup from "../../Popup/Popup";


const AboutSection = () => {
   const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility
  
    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  return (
    <div className="about-section">
      {/* Godrej Properties Section */}
      <div className="about-logo">
        <img src={logo} alt="Godrej Properties Logo" />
      </div>

      <div className="about-heading-wrapper">
        <h2 className="about-title">About Godrej Properties</h2>
        <div className="chat-box" onClick={openPopup}>Chat With Us</div>
      </div>

      <p className="about-description">
        Founded in 1897, Godrej Properties is a leading real estate developer in India with a range of residential townships, business parks, and mixed-use properties as part of its portfolio. The firm's properties stand out for their lovely architecture, quality residences, tranquil lush environs, and use of cutting-edge technologies. With a grand legacy of 125 years in the real estate industry, Godrej Properties has changed the skyline of many cities in the country.
      </p>

      <div className="rera-info">
        <h4>RERA Information</h4>
        <div className="qr-rera">
          <img src={qrCode} alt="MahaRERA QR Code" className="qr-code" />
          <p>Godrej Horizon MahaRERA - P51900034851</p>
          <img src={qrCode} alt="MahaRERA QR Code" className="qr-code" />
          <p>Godrej Horizon MahaRERA - P51900049757</p>
        </div>
        <p>
          Godrej has been registered via MahaRERA registration number and is available on the RERA website under registered projects.
        </p>
      </div>

      {/* About HouseBazaar Section */}
      <div className="about-housebazaar-container">
  <div className="housebazaar-heading-wrapper">
    <h2 className="about-title">About HouseBazaar</h2>
    <img src={housebazaarLogo} alt="HouseBazaar Logo" className="housebazaar-logo" />
  </div>

  <p className="about-description">
    Housebazaar, an esteemed initiative of HomeBazaar.com, operates as a dedicated platform exclusively designed to promote our esteemed partner brands. With a commitment to facilitating effective and transparent promotion, our platform empowers brands to efficiently reach their target audience. Through a comprehensive range of tools, including targeted advertising campaigns and data-driven analytics, Housebazaar equips brands with the essential resources needed to optimize their promotional endeavours and drive substantial growth.
  </p>
</div>


      {/* Disclaimer Section */}
      <div className="disclaimer-container">
        <h4 className="disclaimer-heading">Disclaimer</h4>
        <p className="about-description">
          We are an authorised marketing partner for this project. Provided content is given by respective owners and this website and content is for information purpose only and it does not constitute any offer to avail for any services. Prices mentioned are subject to change without prior notice and properties mentioned are subject to availability. You can expect a call, SMS or emails on details registered with us.
        </p>
      </div>
      {isPopupOpen && <Popup isOpen={isPopupOpen} onClose={closePopup} title="Chat With Us" />}
    </div>
  );
};

export default AboutSection;
