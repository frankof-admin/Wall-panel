const BASE_SCALE = 0.1;

function convertSize(sizeObject, scale) {
  let acc = {};
  for (const [key, value] of Object.entries(sizeObject)) {
    acc[key] = value * BASE_SCALE * scale;
  }
  return acc;
}

const dimensionChangeHandler = (e, dimension, dimensionKey, setFunc) => {
  setFunc({
    ...dimension,
    [dimensionKey]: e?.target.valueAsNumber,
  });
};

export { convertSize, dimensionChangeHandler };
