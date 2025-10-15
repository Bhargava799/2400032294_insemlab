import React, { useState, useEffect } from "react";

const Insemlab = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const student = {
    name: "Bhagi",
    id: "32294",
    course: "B.Tech CSE",
    email: "bhagi@example.com",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "flex-start" : "center",
    justifyContent: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "80%",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginRight: "8px",
  };

  return (
    <div style={containerStyle}>
      <div>
        <span style={labelStyle}>Name:</span> {student.name}&nbsp;&nbsp;
      </div>
      <div>
        <span style={labelStyle}>ID:</span> {student.id}
      </div>
    </div>
  );
};

export default Insemlab;
