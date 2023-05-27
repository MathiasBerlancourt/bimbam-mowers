import "./index.css";
import { instructionsRun } from "../../logics/instructionsRun";
import backgroundGrass from "../../assets/grass.webp";
import mowerImage from "../../assets/mower.png";

const Area = ({ lawn, data }) => {
  const { x, y } = lawn;

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${x}, 1fr)`,
    gridTemplateRows: `repeat(${y}, 1fr)`,
    backgroundImage: `url(${backgroundGrass})`,
    backgroundSize: "cover",
    border: "1px solid green",
    width: "500px",
    height: "500px",
    borderRadius: "10px",
    //je veux que la position x=5 et y=5 soit positionnée en haut a droite en faisant une rotation
    transform: "rotate(90deg)",
  };

  const gridItemStyle = {
    display: "flex",
    flexDirection: "column",
    color: "black",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
    border: "3px solid green",
    borderRadius: "10px",
    width: "100px",
    height: "100px",
    // gridColumn: `${x + 1}`,
    // gridRow: `${y + 1}`,
    //position x=0 et y=0 de la tondeuse
    gridColumn: 1,
    gridRow: 1,
    transform: "rotate(-90deg)",
  };

  if (data) {
    const instructionsList = instructionsRun(data);
    console.log("instructionsList", instructionsList);

    //transformer instructionsList en deux tableaux un pour la premiere tondeuse et un pour la deuxieme en fonction de la liste des instructions
    //pour la premiere tondeuse
    const instructionsListMower1 = instructionsList.filter((item, index) => {
      return index % 2 === 0;
    });
    console.log("instructionsListMower1", instructionsListMower1);
    //pour la deuxieme tondeuse
    const instructionsListMower2 = instructionsList.filter((item, index) => {
      return index % 2 !== 0;
    });
    console.log("instructionsListMower2", instructionsListMower2);
  }

  return (
    <div>
      <div style={gridStyle}>
        {data && (
          <div style={gridItemStyle}>
            <span>1</span>
            <img src={mowerImage} alt="mower" style={{ height: "30px" }} />
            <span>
              x:{x} y:{y}
            </span>
          </div>
        )}
      </div>
      <button>Run</button>
    </div>
  );
};

export default Area;
