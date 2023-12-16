import React, { useState } from "react";

const Alert = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [userInput, setUserInput] = useState("");

  const showAlertMessage = () => {
    if (userInput.trim() !== "") {
      setAlertMessage(userInput);
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
        setAlertMessage("");
      }, 5000);

      setUserInput("");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Enter Text</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          placeholder="Enter alert message..."
          className="outline-none text-black w-full py-1 px-3"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          onClick={showAlertMessage}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Show Alert
        </button>
      </div>
      {showAlert && (
        <div className="bg-indigo-900 text-black w-full py-1 px-3 rounded-md">
          <p>{alertMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Alert;
