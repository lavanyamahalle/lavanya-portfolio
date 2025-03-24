import React from "react";

const SkillBox = ({ logo, skill }) => {
  return (
    <div
      style={{
        width: "10rem",
        height: "10rem",
        borderRadius: "10px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          fontSize: "24px",
        }}
      >
        {logo}
      </div>
      <p style={{ fontWeight: "bold", fontSize: "14px", marginTop: "10px" }}>
        {skill}
      </p>
    </div>
  );
};

export default SkillBox;
