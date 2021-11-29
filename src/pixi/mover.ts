import * as PIXI from 'pixi.js';

import { randInt } from '../utils/random';
import { createPoint, Point } from '../point';

export class Mover {
  cord: Point;
  W: number;
  H: number;
  gr: PIXI.Graphics;
  constructor(W: number, H: number) {
    this.cord = createPoint(randInt(0, W), randInt(0, H));
    this.gr = new PIXI.Graphics();
    this.W = W;
    this.H = H;
  }

  moveRandom() {
    this.cord.x = moveRandom(this.cord.x, 0, this.W - 1);
    this.cord.y = moveRandom(this.cord.y, 0, this.H - 1);
  }

  render() {
    this.gr.beginFill(0x000000, 0.3);
    this.gr.drawRect(this.cord.x, this.cord.y, 1, 1);
    this.gr.endFill();
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
