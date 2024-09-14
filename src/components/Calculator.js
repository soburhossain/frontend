import React, { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setDisplay("");
    } else if (value === "DE") {
      setDisplay(display.slice(0, -1));
    } else if (value === "=") {
      try {
        setDisplay(calculate(display).toString());
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay(display + value);
    }
  };

  const calculate = (expression) => {
    // Use a safer evaluation method
    // Replace "--" with "+" to handle cases like "5--3" => "5 + 3"
    expression = expression.replace(/--/g, "+");

    // Split the expression into tokens
    const tokens = expression.split(/([+\-*/])/).filter(Boolean);

    let result = parseFloat(tokens[0]);
    let operator = null;

    for (let i = 1; i < tokens.length; i++) {
      if (isNaN(tokens[i])) {
        operator = tokens[i];
      } else {
        const num = parseFloat(tokens[i]);
        switch (operator) {
          case "+":
            result += num;
            break;
          case "-":
            result -= num;
            break;
          case "*":
            result *= num;
            break;
          case "/":
            result /= num;
            break;
          default:
            break;
        }
      }
    }
    return result;
  };

  return (
    <div className="calculator">
      <form>
        <div className="grid-container">
          <div className="display">
            <input
              type="text"
              name="display"
              className="display"
              value={display}
              readOnly
            />
          </div>
          <div className="row-1 row">
            <input
              type="button"
              value="AC"
              onClick={() => handleClick("AC")}
              className="button color"
            />
            <input
              type="button"
              value="DE"
              onClick={() => handleClick("DE")}
              className="button color"
            />
            <input
              type="button"
              value="."
              onClick={() => handleClick(".")}
              className="button color"
            />
            <input
              type="button"
              value="/"
              onClick={() => handleClick("/")}
              className="button color"
            />
          </div>
          <div className="row-2 row">
            <input
              type="button"
              value="7"
              onClick={() => handleClick("7")}
              className="button"
            />
            <input
              type="button"
              value="8"
              onClick={() => handleClick("8")}
              className="button"
            />
            <input
              type="button"
              value="9"
              onClick={() => handleClick("9")}
              className="button"
            />
            <input
              type="button"
              value="*"
              onClick={() => handleClick("*")}
              className="button color"
            />
          </div>
          <div className="row-3 row">
            <input
              type="button"
              value="4"
              onClick={() => handleClick("4")}
              className="button"
            />
            <input
              type="button"
              value="5"
              onClick={() => handleClick("5")}
              className="button"
            />
            <input
              type="button"
              value="6"
              onClick={() => handleClick("6")}
              className="button"
            />
            <input
              type="button"
              value="-"
              onClick={() => handleClick("-")}
              className="button"
            />
          </div>
          <div className="row-4 row">
            <input
              type="button"
              value="1"
              onClick={() => handleClick("1")}
              className="button"
            />
            <input
              type="button"
              value="2"
              onClick={() => handleClick("2")}
              className="button"
            />
            <input
              type="button"
              value="3"
              onClick={() => handleClick("3")}
              className="button"
            />
            <input
              type="button"
              value="+"
              onClick={() => handleClick("+")}
              className="button"
            />
          </div>
          <div className="row-5 row">
            <input
              type="button"
              value="00"
              onClick={() => handleClick("00")}
              className="button"
            />
            <input
              type="button"
              value="0"
              onClick={() => handleClick("0")}
              className="button"
            />
            <input
              type="button"
              value="="
              onClick={() => handleClick("=")}
              className="button equal color"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
