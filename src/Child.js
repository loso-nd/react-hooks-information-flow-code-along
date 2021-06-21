import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({handleChangeColor, childrenColor}) {
  console.log(handleChangeColor)
 
  function handleChange(){
    console.log(getRandomColor)
    handleChangeColor(getRandomColor)
  }


  return <div className="child" style={{ backgroundColor: childrenColor}} onClick={handleChange}/>;
}

export default Child;
