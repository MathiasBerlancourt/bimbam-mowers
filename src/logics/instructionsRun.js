export const instructionsRun = (data) => {
  const lines = data.split("\n");
  const maxX = parseInt(lines[0][0]);
  const maxY = parseInt(lines[0][1]);
  const mowersHistory = [];

  const mowersData = [
    {
      x: parseInt(lines[1][0]),
      y: parseInt(lines[1][1]),
      orientation: lines[1][3],
      instructions: lines[2],
    },
    {
      x: parseInt(lines[3][0]),
      y: parseInt(lines[3][1]),
      orientation: lines[3][3],
      instructions: lines[4],
    },
  ];

  const processInstructions = (mower) => {
    const mowerHistory = [];
    for (let i = 0; i < mower.instructions.length; i++) {
      const mowerCopy = { ...mower };
      mowerHistory.push(mowerCopy);

      if (mower.instructions[i] === "L") {
        if (mower.orientation === "N") {
          mower.orientation = "W";
        } else if (mower.orientation === "W") {
          mower.orientation = "S";
        } else if (mower.orientation === "S") {
          mower.orientation = "E";
        } else if (mower.orientation === "E") {
          mower.orientation = "N";
        }
      } else if (mower.instructions[i] === "R") {
        if (mower.orientation === "N") {
          mower.orientation = "E";
        } else if (mower.orientation === "E") {
          mower.orientation = "S";
        } else if (mower.orientation === "S") {
          mower.orientation = "W";
        } else if (mower.orientation === "W") {
          mower.orientation = "N";
        }
      } else if (mower.instructions[i] === "F") {
        let newX = mower.x;
        let newY = mower.y;

        if (mower.orientation === "N") {
          newY++;
        } else if (mower.orientation === "E") {
          newX++;
        } else if (mower.orientation === "S") {
          newY--;
        } else if (mower.orientation === "W") {
          newX--;
        }

        if (newX < 0) {
          mower.x = 0;
        } else if (newX > maxX) {
          mower.x = maxX;
        } else {
          mower.x = newX;
        }

        if (newY < 0) {
          mower.y = 0;
        } else if (newY > maxY) {
          mower.y = maxY;
        } else {
          mower.y = newY;
        }
      }

      mowerCopy.x = mower.x;
      mowerCopy.y = mower.y;
      mowerCopy.orientation = mower.orientation;
    }
    mowersHistory.push(mowerHistory);
  };

  for (let j = 0; j < mowersData.length; j++) {
    const mower = mowersData[j];

    processInstructions(mower);
  }

  return mowersHistory;
};
