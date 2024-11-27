function convertSize(sizeObject, canvasWide) {
  const multiplier = 3000;
  let acc = {};
  if (!canvasWide) return null;
  for (const [key, value] of Object.entries(sizeObject)) {
    acc = {
      ...acc,
      [key]: (value / canvasWide) * multiplier,
    };
  }
  return { ...acc };
}

const dimensionChangeHandler = (e, dimension, dimensionKey, setFunc) => {
  setFunc({
    ...dimension,
    [dimensionKey]: e?.target.valueAsNumber,
  });
};

export { convertSize, dimensionChangeHandler };
