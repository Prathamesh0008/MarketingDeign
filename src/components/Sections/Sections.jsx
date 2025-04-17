import React, { useState } from "react";
import "./Sections.css";
import HomeSection from "./HomeSection";
import PriceSection from "./PriceSection/PriceSection";
import SiteAndFloorPlanSection from "../SiteAndFloorPlanSection/SiteAndFloorPlanSection";
import AmenitiesSection from "./AmenitiesSection/AmenitiesSection";
import GallerySection from "./GallerySection/GallerySection";
import AddressSection from "./AddressSection/AddressSection";
import VirtualTourRequest from "./VirtualTourRequest/VirtualTourRequest";
import AboutSection from "./AboutSection/AboutSection";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup"; // Make sure the import path is correct

const Sections = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="sectionss">
      <section id="home">
        <HomeSection />
      </section>

      <section id="price">
        <PriceSection openPopup={openPopup} /> {/* Passing function as a prop */}
      </section>

      <section id="plans">
        <SiteAndFloorPlanSection />
      </section>

      <section id="amenities">
        <AmenitiesSection />
      </section>

      <section id="gallery">
        <GallerySection />
      </section>

      <section id="location">
        <AddressSection />
      </section>

      <section id="virtual">
        <VirtualTourRequest />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <Footer />
      
      <Popup isOpen={isPopupOpen} onClose={closePopup} title="Get Best Quote" /> {/* Render the Popup */}
    </div>
  );
};

export default Sections;
