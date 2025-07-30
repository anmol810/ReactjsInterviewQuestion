import React, { useState, useEffect } from "react";
import ProgressBar from "./progress";

function ProgressBarParent() {
  const [progress, setProgress] = useState(0);

  // Optional: simulate loading
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px", width: "300px" }}>
      <h3>Progress: {progress}%</h3>
      <ProgressBar progress={progress} />
    </div>
  );
}

export default ProgressBarParent;
