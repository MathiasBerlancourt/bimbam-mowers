export const mowerMovments = (data) => {
  const instructions = data.slice(3, data.length);
  const tabInstructions = instructions.split("\n");

  const mowersData = [
    {
      x: tabInstructions[0][0],
      y: tabInstructions[0][1],
      orientation: tabInstructions[0][3],
      instructions: tabInstructions[1],
    },
    {
      x: tabInstructions[2][0],
      y: tabInstructions[2][1],
      orientation: tabInstructions[2][3],
      instructions: tabInstructions[3],
    },
  ];

  const mower1 = mowersData[0];
  const mower2 = mowersData[1];

  for (let i = 0; i < mower1.length; i++) {}
  return mowersData;
};
