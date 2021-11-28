export interface Point {
  x: number;
  y: number;
}

export const createPoint = (x: number, y: number): Point => {
  return { x, y };
};
