import p5 from 'p5';
import { randInt } from '../utils/random';
import { createPoint, inRange, Point } from '../point';
import { moveRandom, moveTo } from '../utils/move';

export class Mover {
  cord: Point;
  W: number;
  H: number;
  scale: number;
  step: number = 1;

  constructor(W: number, H: number, scale: number = 1) {
    this.cord = createPoint(randInt(0, W), randInt(0, H));
    this.scale = scale;
    this.W = W;
    this.H = H;
  }

  moveRandom() {
    this.cord.x = moveRandom(this.cord.x, 0, this.W);
    this.cord.y = moveRandom(this.cord.y, 0, this.H);
  }

  moveToMouse(p: p5) {
    const mX = Math.floor(p.mouseX / 10);
    const mY = Math.floor(p.mouseY / 10);
    if (!inRange(mX, 0, this.W - 1) || !inRange(mY, 0, this.H - 1))
      return this.moveRandom();
    this.cord.x = moveTo(this.cord.x, mX, 0, this.W);
    this.cord.y = moveTo(this.cord.y, mY, 0, this.H);
  }

  render(p: p5, mode: number = 0) {
    p.scale(this.scale);
    if (mode === 0) {
      p.stroke(0, 30);
      p.strokeWeight(1);
      p.point(this.cord.x, this.cord.y);
    } else if (mode === 1) {
      p.noStroke();
      p.fill(0, 30);
      p.square(this.cord.x, this.cord.y, 1);
    }
  }
}
