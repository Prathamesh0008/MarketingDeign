import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
import Popup from "../../Popup/Popup";

import "./AmenitiesSection.css";
import DownloadButton from "../../DownloadButton/DownloadButton";

// 12 unique amenities
import golf from "../../../assets/minigolf.webp";
import gym from "../../../assets/gym.webp";
import pool from "../../../assets/swimming.webp";
import spa from "../../../assets/steamroom.webp";
import theater from "../../../assets/indoorgame.webp";
import yoga from "../../../assets/infiswimming.webp";
import clubhouse from "../../../assets/indoorgame.webp";
import garden from "../../../assets/libraryg.webp";
import kidsplay from "../../../assets/skylounge.webp";
import jogging from "../../../assets/roofjogging.webp";
import tennis from "../../../assets/squash.webp";
import parking from "../../../assets/swimming.webp";

const AmenitiesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");

  const amenities = [
    { id: 1, title: "Mini Golf", image: golf },
    { id: 2, title: "Gymnasium", image: gym },
    { id: 3, title: "Swimming Pool", image: pool },
    { id: 4, title: "Luxury Spa", image: spa },
    { id: 5, title: "Mini Theater", image: theater },
    { id: 6, title: "INFINITY EDGE SWIMMING POOL", image: yoga },
    { id: 7, title: "Clubhouse", image: clubhouse },
    { id: 8, title: "Library", image: garden },
    { id: 9, title: "Sky Lounge", image: kidsplay },
    { id: 10, title: "Jogging Track", image: jogging },
    { id: 11, title: "Tennis Court", image: tennis },
    { id: 12, title: "Swimming Pool", image: parking },
  ];

  const itemsPerSlide = isMobile ? 4 : 6;
  const totalSlides = Math.ceil(amenities.length / itemsPerSlide);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openPopup = (title) => {
    setPopupTitle(title);
    setIsPopupOpen(true);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, totalSlides]);

  const handleManualScroll = (dir) => {
    setCurrentSlide((prev) =>
      dir === "left"
        ? (prev - 1 + totalSlides) % totalSlides
        : (prev + 1) % totalSlides
    );
  };

  return (
    <div className="amenities-section">
      <div className="amenities-header">
        <h2>Amenities of Godrej Horizon Wadala</h2>
        <DownloadButton onClick={() => openPopup("Download Brochure")} />
      </div>

      <div
        className="scroll-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="scroll-arrow left" onClick={() => handleManualScroll("left")}>
          <VscSend style={{ transform: "rotate(180deg)", fontSize: "24px" }} />
        </button>

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {[...Array(totalSlides)].map((_, i) => (
              <div className="carousel-slide" key={i}>
                {amenities
                  .slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide)
                  .map((amenity) => (
                    <div className="amenity-box" key={amenity.id}>
                      <div className="image-container">
                        <p className="amenity-title">{amenity.title}</p>
                        <img src={amenity.image} alt={amenity.title} />
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <button className="scroll-arrow right" onClick={() => handleManualScroll("right")}>
          <VscSend />
        </button>
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

export default AmenitiesSection;
