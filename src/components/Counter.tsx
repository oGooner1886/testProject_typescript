import React, { useState } from "react";
import "./Counter.scss";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <h2>zxc</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
