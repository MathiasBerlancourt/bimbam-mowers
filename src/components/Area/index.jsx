import React, { useState } from "react";
import { instructionsRun } from "../../logics/instructionsRun";
import Grid from "../Grid";
import "./index.css";

const Area = ({ lawn, data }) => {
  const [mX, setMX] = useState(0);
  const [mY, setMY] = useState(0);
  const [mowerId, setMowerId] = useState(0);
  const [orientation, setOrientation] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0); // Variable d'état pour suivre l'index de la ligne current de la mower
  const [currentMowerIndex, setCurrentMowerIndex] = useState(0); // Variable d'état pour suivre l'index de la current mower
  const [alert, setAlert] = useState(""); //Message d'alerte de fin de travail des mowers

  if (data) {
    const instructionsList = instructionsRun(data);
    const mowerCount = instructionsList.length;

    const lastMower_1_Instruction =
      instructionsList[0][instructionsList[0].length - 1];
    const lastMower_2_Instruction =
      instructionsList[1][instructionsList[1].length - 1];

    const handleClick = () => {
      if (currentMowerIndex < mowerCount) {
        const currentMowerInstructions = instructionsList[currentMowerIndex];
        if (currentLineIndex < currentMowerInstructions.length) {
          const currentInstruction = currentMowerInstructions[currentLineIndex];
          //on met a jour les coordonnées de la mower :
          setMX(currentInstruction.x);
          setMY(currentInstruction.y);
          //On met un id à la mower pour le style :
          setMowerId(currentMowerIndex + 1);
          //on met a jour l'orientation de la mower :
          setOrientation(currentInstruction.orientation);
          //on passe a l'instruction suivante :
          setCurrentLineIndex(currentLineIndex + 1);
        } else {
          setCurrentLineIndex(0); //reiinitise l'index de la ligne current
          setCurrentMowerIndex(currentMowerIndex + 1); //on passe a la mower suivante
        }

        if (
          currentLineIndex === instructionsList[0].length - 1 &&
          currentMowerIndex === mowerCount - 1
        ) {
          //si on est a la derniere instruction de la derniere mower, on affiche un message d'alerte :
          setAlert(
            `Toutes les tondeuses ont fini leur travail ! Mower1: x:${lastMower_1_Instruction.x} y:${lastMower_1_Instruction.y} -orientation:${lastMower_1_Instruction.orientation} Mower2-x:${lastMower_2_Instruction.x} y:${lastMower_2_Instruction.y} orientation:${lastMower_2_Instruction.orientation}`
          );
        }
      }
    };

    return (
      <div className="area-main">
        <div className="area">
          <Grid
            x={lawn.x}
            y={lawn.y}
            mX={mX}
            mY={mY}
            mowerId={mowerId}
            orientation={orientation}
          />
        </div>

        <button onClick={handleClick}>Run</button>
        {alert && <div className="alert">{alert}</div>}
      </div>
    );
  }
};

export default Area;
