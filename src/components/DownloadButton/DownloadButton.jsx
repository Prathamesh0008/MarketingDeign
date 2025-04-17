import React from "react";
import { FaDownload } from "react-icons/fa";
import "./DownloadButton.css";

const DownloadButton = ({ onClick, label = "Download Brochure" }) => {
  return (
    <button className="download-btn animated-highlight" onClick={onClick}>
      <FaDownload className="download-icon" />
      {label}
    </button>
  );
};

export default DownloadButton;
