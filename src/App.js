import React, { useState } from "react";
import { Button, TextField } from "monday-ui-react-core";
// import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [res, setRes] = useState(0);
  const [dark, setDark] = useState(false);
  const [auto, setAuto] = useState(false);

  return (
    <>
      <div
        className={"flex items-center justify-center w-full min-h-screen"}
        style={{ backgroundColor: dark ? "" : "#323338" }}
      >
        <Button
          className="absolute capitalize right-10 top-10"
          onClick={() => {
            setDark(!dark);
          }}
          style={{ backgroundColor: dark ? "#4b4e69" : "#8c8c8c" }}
        >
          {dark ? "dark mode" : "light mode"}
        </Button>
        <Button
          className="absolute capitalize right-48 top-10"
          onClick={() => {
            setAuto(!auto);
            setRes(0);
          }}
          style={{ backgroundColor: dark ? "#4b4e69" : "#8c8c8c" }}
        >
          {auto ? "Auto compute on" : "Auto compute off"}
        </Button>
        <div
          className="flex flex-col items-center justify-center w-1/4 h-full "
          style={{
            backgroundColor: "#000000",
          }}
        >
          <TextField
            placeholder="Enter Number"
            size={TextField.sizes.MEDIUM}
            className="flex items-center justify-center item bg-cyan-500"
            debounceRate={500}
            onChange={(o) => {
              setNumber1(Number(o));
            }}
          />
          <TextField
            placeholder="Enter Number"
            size={TextField.sizes.MEDIUM}
            className="flex w-20 bg-cyan-500"
            debounceRate={500}
            onChange={(o) => {
              setNumber2(Number(o));
            }}
          />
        </div>
        <Button
          style={{ backgroundColor: dark ? "#4b4e69" : "#8c8c8c" }}
          className="ml-10"
          onClick={() => {
            setRes(number1 + number2);
          }}
        >
          Add
        </Button>
        <div
          className="absolute text-6xl font-bold text-black left-100 top-2/3"
          style={{ color: dark ? "#323338" : "#ccc" }}
        >
          {auto
            ? `Result: ${(number1 + number2).toFixed(2)}`
            : `Result: ${res.toFixed(2)}`}
        </div>
      </div>
    </>
  );
}

export default App;
