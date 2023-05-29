import React from "react";
import "./index.css";
import { createGrid } from "../../logics/createGrid";
import grassImage from "../../assets/img/grass.webp";
import mowerImage from "../../assets/img/mower.png";

const Grid = ({ x, y, mX, mY, mowerId, orientation }) => {
  const grid = createGrid(x, y, mX, mY);
  const borderColor = mowerId === 1 ? "2px solid red" : "2px solid blue";
  const transformDegree =
    orientation === "E"
      ? "rotate(0deg)"
      : orientation === "N"
      ? "rotate(270deg)"
      : orientation === "S"
      ? "rotate(90deg)"
      : "rotate(180deg)";

  return (
    <>
      {grid.map((row, i) => {
        return (
          <div key={i} className="row">
            {row.map((col, j) => {
              return (
                <div key={j} className="col">
                  {col === " " ? (
                    <div className="cell">
                      <img
                        src={grassImage}
                        alt="grass"
                        style={{ height: "50px" }}
                      />
                    </div>
                  ) : (
                    <div className="mower">
                      <img
                        src={mowerImage}
                        style={{
                          backgroundImage: `url(${grassImage})`,
                          backgroundSize: "cover",
                          height: "50px",
                          border: borderColor,
                          transform: transformDegree,
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
            <br />
          </div>
        );
      })}
    </>
  );
};

export default Grid;
