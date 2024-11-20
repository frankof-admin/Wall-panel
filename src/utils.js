function convertSize(sizeObject, panelWrapperCssWide) {
  const multiplier = 4000;
  let acc = {};
  if (!panelWrapperCssWide) return null;
  for (const [key, value] of Object?.entries(sizeObject)) {
    acc = {
      ...acc,
      [key]: (value / panelWrapperCssWide) * multiplier,
    };
  }
  return { ...acc };
}

const dimensionChangeHandler = (e, dimension, dimensionKey, setFunc) => {
  setFunc({
    ...dimension,
    [dimensionKey]: e?.target.value,
  })
}

export { convertSize, dimensionChangeHandler };