import React from "react";
import CompC from "./CompC";

const CompB = () => {
  return (
    <div className="container" style={{ backgroundColor: "lightsalmon" }}>
      <h1>CompB</h1>
      <CompC />
    </div>
  );
};

export default CompB;
