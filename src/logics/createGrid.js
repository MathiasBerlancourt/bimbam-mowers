export const createGrid = (rows, columns, mowerX, mowerY) => {
  const grid = [];

  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let j = 0; j < columns; j++) {
      row.push(" ");
      if (j === mowerX - 1 && i === mowerY - 1) {
        row.splice(-1, 1, "M");
      }
    }

    grid.push(row);
  }

  return grid;
};

console.log(createGrid(5, 5, 3, 2));
