import React from "react";
import ReactDOM from "react-dom";

const name1 = "Frank";
const name2 = "Duah";

const luckyNum = 3;

ReactDOM.render(
  <div>
    <h1>Hello {name1 + " " + name2}!</h1>
    <h4>
      Your lucky number is {Math.floor(Math.random() * 10)} {"okay?"}
    </h4>
  </div>,
  document.getElementById("root")
);
