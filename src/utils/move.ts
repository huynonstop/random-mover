import { inRange } from '../point';
import { randInt } from './random';

export const moveRandom = (
  v: number,
  min: number = 0,
  max: number,
  step: number = 1,
) => {
  const randV = v + randInt(-step, step);
  if (!inRange(randV, min, max)) return v;
  return randV;
};

export const moveTo = (
  v: number,
  target: number,
  min: number = 0,
  max: number,
  step: number = 1,
) => {
  if (v === target) return moveRandom(v, min, max, step);
  const newV = v + ((target - v) * step) / Math.abs(target - v);
  if (!inRange(newV, min, max)) return v;
  return newV;
};
