import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setchildrenColor] = useState("#FFF")

  function handleChangeColor(newChildColor){
    console.log(getRandomColor())
    setColor(randomColor)
    setchildrenColor(newChildColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child handleChangeColor={handleChangeColor} childrenColor={childrenColor}/>
      <Child handleChangeColor={handleChangeColor} childrenColor={childrenColor}/>
    </div>
  );
}

export default Parent;
