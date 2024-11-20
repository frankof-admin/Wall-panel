function convertSize(sizeObject, panelWrapperWide) {
  const multiplier = 4000;
  let acc = {};
  if (!panelWrapperWide) return null;
  for (const [key, value] of Object.entries(sizeObject)) {
    acc = {
      ...acc,
      [key]: (value / panelWrapperWide) * multiplier,
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
