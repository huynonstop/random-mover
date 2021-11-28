import p5 from 'p5';
import { randInt } from '../utils/random';
import { createPoint, Point } from './point';

export class Mover {
  cord: Point;
  W: number;
  H: number;
  constructor(W: number, H: number) {
    this.cord = createPoint(randInt(0, W), randInt(0, H));
    this.W = W;
    this.H = H;
  }

  moveRandom() {
    this.cord.x = moveRandom(this.cord.x, 0, this.W - 1);
    this.cord.y = moveRandom(this.cord.y, 0, this.H - 1);
  }

  render(p: p5) {
    p.stroke(0, 30);
    p.point(this.cord.x, this.cord.y);
  }
}

export const moveRandom = (
  v: number,
  min: number = 0,
  max: number,
  step: number = 1,
) => {
  const randV = v + randInt(-step, step);
  if (randV < min || randV > max) return v;
  return randV;
};
