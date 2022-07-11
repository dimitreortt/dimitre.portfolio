export const getSvgString = () => {
  const startingX = 15;
  const startingY = 13;

  const sX = () => {
    return startingX.toString() + " ";
  };

  const sY = () => {
    return startingY.toString() + " ";
  };

  const width = () => {
    //   const width = "20 ";
    const w = 13;
    return (w + startingX).toString() + " ";
  };

  const h = 10;

  const height = () => {
    return (h + startingY).toString() + " ";
  };

  const height2 = () => {
    return (h * 2 + startingY).toString() + " ";
  };

  return `M${
    sX() + sY()
  } C${sX()} ${sY()} ${width()}${sY()}${width()}${height()} C${width()}${height()}${width()}${height2()}${sX()}${height2()}Z`;
};
