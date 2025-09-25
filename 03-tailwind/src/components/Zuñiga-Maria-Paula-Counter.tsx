import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(10);

  return (
    <div className="p-4 border rounded-md max-w-sm bg-white shadow">
      <h3 className="text-xl font-semibold mb-4">
        Counter: <span className="font-bold">{count}</span>
      </h3>

      <div className="flex gap-4">
        <button
          className="p-2 bg-blue-500 rounded-md w-12 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>

        <button
          className="p-2 bg-blue-500 rounded-md w-12 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>

        <button
          className="p-2 bg-gray-500 rounded-md w-16 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

