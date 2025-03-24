import React from "react";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = () => {
  const reversedData = [...data].reverse();

  return (
    <>
      {reversedData.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          <div style={{ position: "relative", width: "300px", height: "200px" }}>
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                opacity: "0",
                transition: "opacity 0.3s ease",
              }}
            >
              <p style={{ color: "#333", marginBottom: "8px" }}>{item.desc}</p>
              <div style={{ display: "flex", gap: "10px" }}>
                {/* <Link to={item.link} target="_blank" style={linkStyle}>
                  <RxExternalLink style={iconStyle} />
                  <p>Demo</p>
                </Link>
                <Link to={item.git} target="_blank" style={linkStyle}>
                  <AiOutlineGithub style={iconStyle} />
                  <p>Code</p>
                </Link> */}
              </div>
            </div>
          </div>
          <p style={{ color: "#333", fontSize: "20px", fontWeight: "500" }}>
            {item.title}
          </p>
        </div>
      ))}
    </>
  );
};

const linkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  padding: "8px",
  borderRadius: "4px",
  backgroundColor: "white",
  textDecoration: "none",
  color: "black",
};

const iconStyle = {
  width: "24px",
  height: "24px",
};

export default WorkCard;
