import React, { useState } from 'react';
import './VirtualTourRequest.css';
import { PlayCircle } from 'lucide-react';
import Popup from '../../Popup/Popup'; // ✅ Import your Popup component

const VirtualTourRequest = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');

  const openPopup = () => {
    setPopupTitle('Virtual Site Visit');
    setIsPopupOpen(true);
  };

  return (
    <div className="virtual-tour-container">
      <h2 className="section-title">Virtual Tour Request</h2>
      <div className="video-wrapper" onClick={openPopup} style={{ cursor: "pointer" }}>
        <iframe
          className="tour-video"
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Virtual Tour"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="video-overlay">
          <div className="overlay-content">
            <div className="overlay-title">VIRTUAL SITE VISIT</div>
            <PlayCircle className="play-icon" />
            <div className="overlay-subtitle">Godrej Horizon Wadala</div>
          </div>
        </div>
      </div>

      {/* ✅ Popup integration */}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title={popupTitle}
      />
    </div>
  );
};

export default VirtualTourRequest;
