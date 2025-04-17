import React, { useState } from "react";
import "./PriceSection.css";
import priceImage from "../../../assets/costing.jpg";
import EnquiryImageBox from "../../EnquiryImageBox";
import PlanImageBox from "../../PlanImageBox/PlanImageBox";
import Popup from "../../Popup/Popup"; // Import Popup Component

const PriceSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupContent, setPopupContent] = useState('');

  const handlePriceBreakupClick = (type, content) => {
    setPopupTitle(`${type} - Price Breakup`);
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  return (
    <div className="price-container">
      {/* Left Table */}
      <div className="price-left">
        <h2>Apartment Pricing</h2>
        <div className="price-table-wrapper">
          <table className="price-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Carpet Area</th>
                <th>Price</th>
                <th>Price Breakup</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 BHK Premier</td>
                <td>745 Sq. ft.</td>
                <td>₹ 2.91 Cr Onwards</td>
                <td>
                  <button
                    className="breakup-btn"
                    onClick={() => handlePriceBreakupClick('2 BHK Premier', 'Here is the price breakdown for 2 BHK Premier.')}
                  >
                    Price Breakup
                  </button>
                </td>
              </tr>
              <tr>
                <td>2 BHK Luxe</td>
                <td>733 Sq. ft.</td>
                <td>₹ 2.94 Cr Onwards</td>
                <td>
                  <button
                    className="breakup-btn"
                    onClick={() => handlePriceBreakupClick('2 BHK Luxe', 'Here is the price breakdown for 2 BHK Luxe.')}
                  >
                    Price Breakup
                  </button>
                </td>
              </tr>
              <tr>
                <td>2 BHK Premier</td>
                <td>745 Sq. ft.</td>
                <td>₹ 2.99 Cr Onwards</td>
                <td>
                  <button
                    className="breakup-btn"
                    onClick={() => handlePriceBreakupClick('2 BHK Premier', 'Here is the price breakdown for 2 BHK Premier.')}
                  >
                    Price Breakup
                  </button>
                </td>
              </tr>
              <tr>
                <td>3 BHK Premier</td>
                <td>1053/1059/1070 Sq. ft.</td>
                <td>₹ 4.26 Cr Onwards</td>
                <td>
                  <button
                    className="breakup-btn"
                    onClick={() => handlePriceBreakupClick('3 BHK Premier', 'Here is the price breakdown for 3 BHK Premier.')}
                  >
                    Price Breakup
                  </button>
                </td>
              </tr>
              <tr>
                <td>3 BHK Royal</td>
                <td>1240 Sq. ft.</td>
                <td>₹ 4.99 Cr Onwards</td>
                <td>
                  <button
                    className="breakup-btn"
                    onClick={() => handlePriceBreakupClick('3 BHK Royal', 'Here is the price breakdown for 3 BHK Royal.')}
                  >
                    Price Breakup
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Side Image + Name */}
      <div className="price-right">
        <PlanImageBox imageSrc={priceImage} label="Complete Costing Details" />
      </div>

      {/* Popup Integration */}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title={popupTitle}
        content={popupContent}
      />
    </div>
  );
};

export default PriceSection;
