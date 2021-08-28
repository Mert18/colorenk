import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [hue, setHue] = useState(262);
  const [saturation, setSaturation] = useState(100);
  const [lightness, setLightness] = useState(50);

  const generate = () => {
    setHue(Math.trunc(Math.random() * 360));
  };

  const handleChange = () => {
    generate();
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div
      style={{
        backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        height: "100vh",
      }}
    >
      <div>
        <div
          style={{
            backgroundColor: `hsl(${hue}, ${saturation - 10}%, ${lightness}%)`,
            width: "2rem",
            height: "2rem",
          }}
        ></div>
        <div
          style={{
            backgroundColor: `hsl(${hue}, ${saturation - 30}%, ${lightness}%)`,
            width: "2rem",
            height: "2rem",
          }}
        ></div>
        <div
          style={{
            backgroundColor: `hsl(${hue}, ${saturation - 50}%, ${lightness}%)`,
            width: "2rem",
            height: "2rem",
          }}
        ></div>
        <div
          style={{
            backgroundColor: `hsl(${hue}, ${saturation - 80}%, ${lightness}%)`,
            width: "2rem",
            height: "2rem",
          }}
        ></div>
      </div>

      <div>
        <div
          style={{
            backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness - 10}%)`,
            width: "2rem",
            height: "2rem",
          }}
        ></div>
        <div
          style={{
            backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness + 10}%)`,
            width: "2rem",
            height: "2rem",
          }}
        ></div>
        <div
          style={{
            backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness - 20}%)`,
            width: "2rem",
            height: "2rem",
          }}
        ></div>
        <div
          style={{
            backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness + 20}%)`,
            width: "2rem",
            height: "2rem",
          }}
        ></div>
      </div>

      <button onClick={handleChange}>Hello There!</button>
    </div>
  );
};

export default App;
