import React from "react";
import CompB from "./CompB";

const CompA = () => {
  return (
    <div className="container" style={{ backgroundColor: "lightcoral" }}>
      <h1>CompA</h1>
      <CompB />
    </div>
  );
};

export default CompA;
