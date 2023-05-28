import React from "react";
import "./index.css";
import { createGrid } from "../../logics/createGrid";
import grassImage from "../../assets/grass.webp";
import mowerImage from "../../assets/mower.png";

const Grid = ({ x, y, mX, mY }) => {
  const grid = createGrid(x, y, mX, mY);

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
