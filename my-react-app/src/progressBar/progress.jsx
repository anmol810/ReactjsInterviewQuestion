import React from "react";

function ProgressBar({ progress }) {
  return (
    <div
      style={{
        height: "20px",
        width: "100%",
        backgroundColor: "#e0e0e0",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          backgroundColor: progress < 100 ? "#76c7c0" : "#4caf50",
          transition: "width 0.3s ease-in-out",
        }}
      />
    </div>
  );
}

export default ProgressBar;
