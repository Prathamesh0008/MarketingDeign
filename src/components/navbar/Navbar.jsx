import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {
  FaHome,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaFileDownload,
  FaBars,
  FaTimes,
  FaBuilding,
} from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";
import { GiVirtualMarker } from "react-icons/gi";
import { TbToolsKitchen2 } from "react-icons/tb";
import logo from "../../assets/logo1.svg";
import logo1 from "../../assets/logo_hb_new.svg";
import Popup from "../Popup/Popup"; // Ensure Popup is imported correctly

const NavItem = ({ icon, label, active, onClick }) => (
  <div
    className={`nav-item ${active ? "active" : ""}`}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
    <span className="divider">|</span>
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [popupOpen, setPopupOpen] = useState(false); // State to control popup visibility

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const sections = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "price", label: "Price", icon: <FaMoneyBillWave /> },
    { id: "plans", label: "Site & Floor Plan", icon: <FaBuilding /> },
    { id: "amenities", label: "Amenities", icon: <TbToolsKitchen2 /> },
    { id: "gallery", label: "Gallery", icon: <MdPhotoLibrary /> },
    { id: "location", label: "Location", icon: <FaMapMarkerAlt /> },
    { id: "virtual", label: "Virtual Site Visit", icon: <GiVirtualMarker /> },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close mobile menu on click
  };

  // Optional: Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollY + 100) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle "Download Brochure" click to open the popup
  const handleDownloadClick = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <img src={logo1} alt="Logo" className="logo" />
            <span className="divider">|</span>
            <img src={logo} alt="Logo" className="logo" />
          </div>

          <div className={`nav-items ${menuOpen ? "active" : ""}`}>
            {sections.map(({ id, label, icon }) => (
              <NavItem
                key={id}
                icon={icon}
                label={label}
                active={activeSection === id}
                onClick={() => handleNavClick(id)}
              />
            ))}
            <div
              className="nav-item download-brochure"
              onClick={handleDownloadClick} // Trigger popup on click
            >
              <FaFileDownload />
              <span>Download Brochure</span>
            </div>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Popup component with state control */}
      <Popup isOpen={popupOpen} onClose={closePopup} title="Download Brochure" />
    </>
  );
};

export default Navbar;
