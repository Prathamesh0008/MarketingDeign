import React from "react";
import "./SiteAndFloorPlanSection.css";
import masterPlanImage from "../../assets/masterplan2.webp";
import floorPlanImage from "../../assets/costing.jpg";
import PlanImageBox from "../PlanImageBox/PlanImageBox";

const SiteAndFloorPlanSection = () => {
  return (
    <div className="site-floor-plan-section">
      <h2 className="section-title">Site & Floor Plan of Godrej Horizon Wadala</h2>

      {/* Master Plan */}
      <h3 className="subsection-title">Master Plan</h3>
      <div className="master-plan-wrapper">
        <PlanImageBox imageSrc={masterPlanImage} label="Master Plan" />
      </div>

      {/* Floor Plan */}
      <h3 className="subsection-title">Floor Plan</h3>
      <div className="floor-plan-grid">
        <PlanImageBox imageSrc={floorPlanImage} label="Floor Plan 1" />
        <PlanImageBox imageSrc={floorPlanImage} label="Floor Plan 2" />
        <PlanImageBox imageSrc={floorPlanImage} label="Floor Plan 3" />
      </div>
    </div>
  );
};

export default SiteAndFloorPlanSection;
