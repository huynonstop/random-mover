import p5 from 'p5';
import { Mover } from './mover';

export const sketch = (p: p5) => {
  const WIDTH = 720;
  const HEIGHT = 720;

  const scale = 10;
  const P_WIDTH = Math.floor(WIDTH / scale);
  const P_HEIGHT = Math.floor(HEIGHT / scale);

  const mover = new Mover(P_WIDTH, P_HEIGHT, scale);
  const mode = 0;

  p.setup = () => {
    const canvas = p.createCanvas(WIDTH, HEIGHT);
    canvas.id('p5');
    p.background('white');

    p.stroke(0, 255);
    p.strokeWeight(1);
    p.rect(0, 0, WIDTH - 1, HEIGHT - 1);

    // Grid
    // for (let i = 0; i <= P_WIDTH; i++) {
    //   p.line(i * scale, 0, i * scale, HEIGHT - 1);
    // }

    // for (let j = 0; j <= P_HEIGHT; j++) {
    //   p.line(0, j * scale, WIDTH - 1, j * scale);
    // }

    mover.render(p, mode);
  };

  p.draw = () => {
    mover.moveToMouse(p);
    mover.render(p, mode);
  };
};
