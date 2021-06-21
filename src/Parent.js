import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  function handleChangeColor(){
    console.log(getRandomColor())
    setColor(randomColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child handleChangeColor={handleChangeColor}/>
      <Child handleChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
