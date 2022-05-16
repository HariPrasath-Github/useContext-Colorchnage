import React, { useState, useEffect, useContext } from "react";
import { SketchPicker } from "react-color";
import ComponentTest from "./ComponentTest";
import ColorTest from "./ColorTest";

export const themeSettings = React.createContext();

const Color = () => {
  const [colorChange, setcolorChange] = useState("#F1EEE9");
  const [toggle, settoggle] = useState(false);

  useEffect(() => {
    console.log(colorChange);
  }, [colorChange]);

  const changingColor = (e) => {
    const enteredValue = e.target.value;
    if (enteredValue.length >= 6) {
      setcolorChange("#" + enteredValue);
    } else {
      setcolorChange("");
    }
  };

  const contextComponent = () => {
    settoggle(true);
  };

  return (
    <div>
      <SketchPicker
        color={colorChange}
        onChangeComplete={(colorChange) => {
          setcolorChange(colorChange.hex);
        }}
      />
      <div
        style={{
          backgroundColor: colorChange,
          height: "200px",
          width: "200px",
          position: "relative",
          left: "600px",
          border: "1px solid black",
        }}
      />
      <input type="text" onChange={(e) => changingColor(e)} />
      <button onClick={contextComponent}>Check the Context</button>
      <div className="Component-render">
        {toggle ? (
          <themeSettings.Provider value={colorChange}>
            <ComponentTest />
            <ColorTest />
          </themeSettings.Provider>
        ) : null}
      </div>
    </div>
  );
};

export default Color;
