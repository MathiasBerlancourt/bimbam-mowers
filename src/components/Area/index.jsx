import React, { useEffect, useState } from "react";
import { instructionsRun } from "../../logics/instructionsRun";
import backgroundGrass from "../../assets/grass.webp";
import mowerImage from "../../assets/mower.png";
import { createGrid } from "../../logics/createGrid";
import Grid from "../Grid";
import "./index.css";

const Area = ({ lawn, data }) => {
  const [mX, setMX] = useState(0);
  const [mY, setMY] = useState(0);
  const mower1 = [];
  const mower2 = [];
  let step = 0;
  // console.log("lawn:", lawn);
  if (data) {
    const instructionsList = instructionsRun(data);

    const handleClick = (instructionsList) => {
      console.log("run");
      for (let i = 0; i < instructionsList.length; i++) {
        for (let j = 0; j < instructionsList[i].length; j++) {
          setMX(instructionsList[i][j].x);
          setMY(instructionsList[i][j].y);
          console.log("instructionsList[i][j]:", instructionsList[i][j]);
        }
      }
    };

    return (
      <div>
        <div className="area">
          <Grid x={lawn.x} y={lawn.y} mX={mX} mY={mY} />
        </div>

        <button onClick={() => handleClick(instructionsList)}>Run</button>
      </div>
    );
  }
};

export default Area;
