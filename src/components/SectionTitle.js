/* 
  This is a reusable component for section titles throughout the website.
  It displays a consistent heading style with an optional icon.
  It's used in multiple sections to keep the heading style consistent.
*/

import React from "react";
import "../styles/sectionTitle.css";

const SectionTitle = ({ title, icon, color }) => {
  return (
    <h2 
      className="section-title" 
      style={{ 
        fontFamily: "'Oswald', sans-serif", 
        fontWeight: 700,
        color: color || "#012142"
      }}
    >
      {icon && <i className={icon} style={{ color: "#FF9E1B", marginRight: "10px" }}></i>}
      {title}
    </h2>
  );
};

export default SectionTitle;