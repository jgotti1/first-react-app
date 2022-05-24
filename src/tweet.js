import React, { useState } from "react";
import "./App.css";
function Tweet(props) {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const changeColor = () => {
    setRed(!isRed);
  };
  return (
    <div className={isRed ? "cred" : "tweet"}>
      <button onClick={changeColor}>Change Color</button>
      <h2>{props.name}</h2>
      <p>{props.message}</p>
      <button onClick={increment}>Likes</button>
      <h1>{count}</h1>
    </div>
  );
}
export default Tweet;
