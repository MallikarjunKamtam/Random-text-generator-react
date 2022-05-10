import "./App.css";
import React from "react";
import { useState } from "react";
import data from "./data";

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    let size = +count;

    if (count <= 0) {
      size = 0;
    }
    if (count >= 16) {
      size = 16;
    }

    setText(data.slice(0, size));
  };

  return (
    <div className="App">
      <section>
        <h1>RANDOM-TEXT-GENERATOR</h1>
        <h4>Select between 1 to 16</h4>
        <form action="#">
          <label className="label" htmlFor="size">
            Enter the Size:{" "}
          </label>
          <input
            value={count}
            id="size"
            onChange={(e) => setCount(e.target.value)}
            type="number"
            name="size"
          />
          <button className="btn" type="submit" onClick={submitHandler}>
            SUBMIT
          </button>
        </form>

        {/* <p>{text[count]}</p> */}

        <div className="text-area">
          {text.map((x, i) => {
            return <p key={i}>{x}</p>;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
