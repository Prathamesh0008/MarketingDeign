import React, { useState, useRef, useEffect } from "react";
import "./HomeSection.css";
import image1 from "../../assets/deskban3.webp";
import image2 from "../../assets/deskban4.webp";
import DownloadButton from "../DownloadButton/DownloadButton";
import Popup from "../Popup/Popup";

const HomeSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");

  const extraContentRef = useRef(null);

  useEffect(() => {
    if (showMore && extraContentRef.current) {
      setTimeout(() => {
        extraContentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [showMore]);

  const handleToggle = () => {
    setShowMore((prev) => !prev);
  };

  const openPopup = (title) => {
    setPopupTitle(title);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div className="home-section">
        <div className="image-slider">
          <img src={image1} alt="Real Estate 1" />
          <img src={image2} alt="Real Estate 2" />
        </div>

        <div className="booking-info">
          <div className="book-box">
          <h4>Booking Open: Limited Time Only</h4>
          <h2>Godrej Horizon Wadala</h2>
          <h3>At Wadala By Godrej Properties</h3>
          {/* <p>by Godrej Properties</p> */}
          <ul>
            <li>Land Parcel: <strong>5 Acres</strong></li>
            <li>Floors: <strong>44 Storeys</strong></li>
            <li>Possession: <strong>Dec 2026</strong></li>
          </ul>
          <ul className="highlighted-offers">
  <li>✔ Get 1% Monthly Payment Plan Benefit</li>
  <li>✔ 30:30:30:10 Payment Plan Available</li>
  <li>✔ Exclusive Flexi Payment Plan</li>
</ul>

          <h3 className="price">
            Luxurious 2 & 3 BHK Starts at <br />
            <span>₹ 2.91 Cr Onwards</span>
          </h3>

          {/* DOWNLOAD BUTTON WITH POPUP LINK */}
          <DownloadButton onClick={() => openPopup("Download Brochure")} />
        </div>
        </div>
      </div>

      <div className="welcome-text">
        <h2>Welcome to Godrej Horizon Wadala</h2>
        <p>
          A residential address at the premium locale of Wadala, Signature Tower at Godrej Horizon offers a world of grandeur in the heart of Mumbai. Its modern 2 and 3-BHK residences with balcony offer views of the breathtaking sunrise at Eastern bay and the unique Mumbai skyline. Amenities include a 5-storeyed clubhouse, steam room, sky lounge, and an infinity pool - all crafted to provide a luxurious, almost regal lifestyle.
          {!showMore && (
            <button className="read-btn-inline" onClick={handleToggle}> Read More</button>
          )}
        </p>

        {showMore && (
          <p ref={extraContentRef}>
            These luxuries become only more enhanced by the beautiful locale of the property! One of the most high-end neighbourhoods of the city, you get access to reputed landmarks such as Don Bosco High School, Poddar college, Tata Memorial Hospital, and the iconic 5 Gardens. The property is also close to the Wadala Railway Station, Wadala Bridge, Monorail station, Dadar TT Circle, & the Eastern Express Highway. With such an appealing locale and dazzling cityscape views - Signature Tower at Godrej Horizon offers a lifestyle where you can enjoy the transitioning hues of the city from sunrise to sunset to the fullest!
            <button className="read-btn-inline" onClick={handleToggle}> Read Less</button>
          </p>
        )}

        <div className="brochure-btn-container">
          <DownloadButton onClick={() => openPopup("Download Brochure")} />
        </div>
      </div>

      {/* Popup shown when DownloadButton is clicked */}
      <Popup isOpen={isPopupOpen} onClose={closePopup} title={popupTitle} />

    </div>
  );
};

export default HomeSection;
