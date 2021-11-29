import * as PIXI from 'pixi.js';
import { Mover } from './mover';

export const bootstrap = (parentId: string = 'app-pixi') => {
  const parentEl = document.getElementById(parentId);
  if (!parentEl) return;

  const W = 720;
  const H = 720;
  const app = new PIXI.Application({
    width: W,
    height: H,
    backgroundColor: 0xffffff,
  });
  parentEl.appendChild(app.view);

  const mover = new Mover(W, H);
  app.stage.addChild(mover.gr);

  const border = new PIXI.Graphics();
  border.lineStyle(1, 0x000000).drawRect(1, 0, W - 1, H - 1);
  app.stage.addChild(border);

  app.ticker.add((delta) => {
    mover.moveRandom();
    mover.render();
  });
};
