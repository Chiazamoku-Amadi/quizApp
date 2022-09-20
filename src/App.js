import React, { useState } from "react";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import Quiz from "./Components/Quiz/Quiz";

function App() {
  const [started, setStarted] = useState(false);

  function start() {
    setStarted((prevStart) => !prevStart);
  }

  return (
    <div className="App">{started ? <Quiz /> : <Landing start={start} />}</div>
  );
}

export default App;
