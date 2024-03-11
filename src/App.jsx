import { useState } from "react";
import "../src/App.css";
import Intro from "./components/Intro";

function App() {
  const [counter, setCounter] = useState(0);

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div>
        <button onClick={decrementCounter}>-</button>
        <div>{counter}</div>
        <button onClick={incrementCounter}>+</button>
        <div className={`${counter % 2 == 0 ? "red" : "blue"}`}>
          {counter > 10 || <p>PERFECT</p>}
        </div>
      </div>
    </>
  );
}

export default App;
