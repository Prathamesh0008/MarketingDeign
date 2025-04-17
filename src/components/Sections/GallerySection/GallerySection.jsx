import React, { useState } from "react";
import "./GallerySection.css";
import DownloadButton from "../../DownloadButton/DownloadButton";
import Popup from "../../Popup/Popup"; // make sure path is correct

// Replace with your actual images
import img1 from "../../../assets/g1.webp";
import img2 from "../../../assets/g4.webp";
import img3 from "../../../assets/infiswimming.webp";
import img4 from "../../../assets/swimming.webp";

const GallerySection = () => {
  const images = [img1, img2, img3, img4];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");

  const openPopup = (title) => {
    setPopupTitle(title);
    setIsPopupOpen(true);
  };

  return (
    <div className="gallery-section">
      <div className="gallery-header">
        <h2>Gallery of Godrej Horizon Wadala</h2>
        <DownloadButton onClick={() => openPopup("Download Brochure")} />
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-box" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* ✅ Popup Rendered Here */}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title={popupTitle}
      />
    </div>
  );
};

export default GallerySection;
