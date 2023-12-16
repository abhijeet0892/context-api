import React, { useState } from "react";

const Increment = () => {
  const [count, setCount] = useState(0);

  const handleClickIncr = () => {
    setCount((prev) => prev + 1);
  };
  const handleClickDecr = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Counter</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <button
          onClick={handleClickDecr}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Decrement
        </button>
        <h1 className="outline-none text-center w-full py-1 px-3">{count}</h1>
        <button
          onClick={handleClickIncr}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Increment;
