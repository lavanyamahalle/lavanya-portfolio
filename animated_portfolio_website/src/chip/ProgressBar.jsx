import React from "react";

const ProgressBar = ({ logo, name, value }) => {
  return (
    <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ fontSize: "18px", display: "flex", alignItems: "center", gap: "10px" }}>
          {logo} {name}
        </p>
        {/* <span style={{ color: "gray", fontSize: "16px" }}>{value}%</span> */}
      </div>
      <div
        style={{
          height: "8px",
          width: "100%",
          backgroundColor: "lightgray",
          borderRadius: "20px",
          overflow: "hidden",
          marginTop: "5px",
        }}
      >
        <div
          style={{
            height: "8px",
            width: `${value}%`,
            backgroundColor: "gold",
            borderRadius: "20px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
