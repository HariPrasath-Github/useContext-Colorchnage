import React, { useContext } from "react";
import { themeSettings } from "./Color";

function ComponentTest() {
  const colorSetting = useContext(themeSettings);

  return (
    <div>
      {" "}
      <div
        style={{
          backgroundColor: colorSetting,
          height: "100px",
          width: "100px",
          position: "relative",
          left: "100px",
          border: "1px solid black",
        }}
      />
    </div>
  );
}

export default ComponentTest;
