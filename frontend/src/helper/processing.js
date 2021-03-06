import * as d3 from 'd3';

export const chunkify = (data, size) => {
  const temp = [];
  for (let i = 0; i < data.length - size; i += size) {
    const subTemp = [];
    for (let j = 0; j < size; j++) {
      subTemp.push(data[i + j]);
    }
    temp.push(subTemp);
  }
  return temp;
};

export const isNumerical = data => data.every(d => !isNaN(d));

export const scale = (data, type, max = 1, min = -1, center = 0) => {
  if (!isNumerical(data)) {
    return null;
  }
  return data.map(d => {
    switch (type) {
      case 'logistic':
        return (max - min) / (1 + Math.E ** (-1 * (d - center))) - 1 + (max + min) / 2;
      case 'tanh':
        return (max - min) * Math.tanh(d - center) + (max + min) / 2;
      case 'arctan':
        return (max - min) * 2 / Math.PI * Math.atan(d - center) + (max + min) / 2;
      case 'sign':
        return (max - min) * Math.sign(d - center) + (max + min) / 2;
      default:
        return d;
    }
  });
};

export const removeOutliers = data => {
  const first = d3.quantile(data, 0.25);
  const third = d3.quantile(data, 0.75);
  const temp = [];
  data.forEach(d => {
    if (!(d < 1.5 * first || d > 1.5 * third)) {
      temp.push(d);
    }
  });
  return temp;
};
