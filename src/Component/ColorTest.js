import React, { useContext } from "react";
import { themeSettings } from "./Color";

function ColorTest() {
  const darkTheme = useContext(themeSettings);

  return (
    <div
      style={{
        backgroundColor: darkTheme,
        height: "100px",
        width: "100px",
        position: "relative",
        bottom: "200px",
        left: "1000px",
        border: "1px solid black",
      }}
    />
  );
}

export default ColorTest;
