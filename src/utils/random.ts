export const randInt = (min: number = 0, max: number = 1) => {
  return Math.round(randRange(min, max));
};

export const randRange = (min: number = 0, max: number = 1) => {
  return Math.random() * (max - min) + min;
};
