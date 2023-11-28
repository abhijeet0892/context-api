import React, { useState, createContext } from "react";
import CompA from "./components/CompA";

const AppData = createContext();
const StateData = createContext();

function App() {
  const [data, setData] = useState("Hello React");
  const [name, setName] = useState({ name: "Abhijit", age: 31 });

  return (
    <div className="container">
      <AppData.Provider value={data}>
        <StateData.Provider value={name}>
          <CompA />
        </StateData.Provider>
      </AppData.Provider>
    </div>
  );
}

export default App;
export { AppData, StateData };
