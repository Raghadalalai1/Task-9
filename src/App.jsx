import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const Increment = () => {
    setCount((count) => {
      if (count < 1000) {
        if (count >= 100) {
          return count + 100;
        } else if (count >= 10) {
          return count + 10;
        } else {
          return count + 1;
        }
      } else {
        return count;
      }
    });
    switch (count) {
      case 10:
        setShow(true);
        break;
      case 100:
        setShow(true);
        break;
      case 1000:
        setShow(true);
        break;
    
      default:
        break;
    }
  };

  const Decrement = () => {
    setCount((count) => {
      if (count > 0) {
        if (count > 100) {
          return count - 100;
        } else if (count > 10) {
          return count - 10;
        } else {
          return count - 1;
        }
      } else {
        return count;
      }
    });
    switch (count) {
      case 10:
        setShow(true);
        break;
      case 100:
        setShow(true);
        break;
      case 1000:
        setShow(true);
        break;
    
      default:
        break;
    }
  };

  function showPopup() {
    setShow(!show);
  }

  return (
    <div
      id="contant"
      className={
        count === 10
          ? "backrgound1"
          : count === 100
          ? "backrgound2"
          : count === 1000
          ? "backrgound3"
          : "backrgound"
      }
    >
      <p
        className={
          count === 10
            ? "titel1"
            : count === 100
            ? "titel1"
            : count === 1000
            ? "titel1"
            : "titel"
        }
      >
        Current Count: {count}
      </p>

      <div className="buttons">
        <button
          onClick={Increment}
          className={count == 1000 ? " hide" : "show"}
        >
          Increment
        </button>
        <button onClick={Decrement} className={count ? "show" : "hide"}>
          Decrement
        </button>
      </div>
      <div
        className={
          show && (count == 0 || count == 10 || count == 100 || count == 1000) ? "show" : "hide"
        }
        id="popup"
      >
        <h1>
          {show && count == 0? "Welcom to our site": show && (count == 10 || count == 100 || count == 1000)? `count is ${count}`: ""}
        </h1>
        <button onClick={showPopup}>close</button>
      </div>
    </div>
  );
}

export default App;
