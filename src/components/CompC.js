import React, { useContext } from "react";
import { AppData } from "../App";
import { StateData } from "../App";

const CompC = () => {
  const txtData = useContext(AppData);
  const statData = useContext(StateData);

  return (
    <div className="container" style={{ backgroundColor: "lightgray" }}>
      <h1>CompC</h1>
      <h1>{txtData}</h1>
      <h1>{statData.name}</h1>
      <h1>{statData.age}</h1>
    </div>
  );
};

export default CompC;
