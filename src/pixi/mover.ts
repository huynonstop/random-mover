import { Graphics } from 'pixi.js';

import { randInt } from '../utils/random';
import { createPoint, inRange, Point } from '../point';
import { moveRandom, moveTo } from '../utils/move';

export class Mover {
  cord: Point;
  W: number;
  H: number;
  gr: Graphics;

  constructor(W: number, H: number, scale: number = 1) {
    this.cord = createPoint(randInt(0, W), randInt(0, H));
    this.gr = new Graphics();
    this.gr.scale.set(scale);
    this.W = W;
    this.H = H;
  }

  moveRandom() {
    this.cord.x = moveRandom(this.cord.x, 0, this.W - 1);
    this.cord.y = moveRandom(this.cord.y, 0, this.H - 1);
  }

  moveTo(canvasPos: Point) {
    const mX = Math.floor(canvasPos.x / 10);
    const mY = Math.floor(canvasPos.y / 10);
    if (!inRange(mX, 0, this.W - 1) || !inRange(mY, 0, this.H - 1))
      return this.moveRandom();
    this.cord.x = moveTo(this.cord.x, mX, 0, this.W - 1);
    this.cord.y = moveTo(this.cord.y, mY, 0, this.H - 1);
  }

  render() {
    this.gr.beginFill(0x000000, 0.3);
    this.gr.drawRect(this.cord.x, this.cord.y, 1, 1);
    this.gr.endFill();
  }
}
