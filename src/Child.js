import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({handleChangeColor}) {
  console.log(handleChangeColor)



  return <div className="child" style={{ backgroundColor: "#FFF" }} onClick={handleChangeColor}/>;
}

export default Child;
