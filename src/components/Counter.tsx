import React, { useState } from "react";
import style from "./Counter.module.scss";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className={style.btn}>
      <h1 className={style.numb}>{count}</h1>
      <h2>zxc</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
