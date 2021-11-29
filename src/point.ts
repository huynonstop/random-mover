export interface Point {
  x: number;
  y: number;
}

export const createPoint = (x: number, y: number): Point => {
  return { x, y };
};

export const inRange = (v: number, min: number, max: number) => {
  return v >= min && v <= max;
};
