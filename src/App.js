import React from "react";
import "./App.css";
import Tweet from "./tweet";

function App() {
  return (
    <div className="app">
      <Tweet name="John Gotti" message="I am the dad" />
      <Tweet name="Marcie Gotti" message="I am the mom" />
      <Tweet name="Luna Gotti" message="I am the puppy" />
      <Tweet name="Gracie Gotti" message="I am the killer" />
    </div>
  );
}
export default App;
