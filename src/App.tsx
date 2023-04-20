import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  function handleButtonclick(amount) {
    setNumber(number + amount);
  }

  return (
    <div className="background">
      <div>
        <h1> {number} </h1>
      </div>
      <div>
        <button onClick={() => handleButtonclick(-10)}>-10</button>
        <button onClick={() => handleButtonclick(-1)}>-1</button>
        <button onClick={() => handleButtonclick(1)}>+1</button>
        <button onClick={() => handleButtonclick(10)}>+10</button>
      </div>
    </div>
  );
}

export default App;
