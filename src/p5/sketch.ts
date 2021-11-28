import p5 from 'p5';
import { Mover } from './mover';

export const sketch = (p: p5) => {
  const HEIGHT = 720;
  const WIDTH = 720;
  const mover = new Mover(WIDTH, HEIGHT);

  p.setup = () => {
    const canvas = p.createCanvas(WIDTH, HEIGHT);
    canvas.id('p5');

    p.background('white');
    p.stroke(0);
    p.strokeWeight(1);
    p.noFill();
    p.rect(0, 0, WIDTH, HEIGHT);

    mover.render(p);
  };

  p.draw = () => {
    mover.moveRandom();
    mover.render(p);
  };
};
