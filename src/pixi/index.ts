import { Application, Graphics } from 'pixi.js';
import { Point } from '../point';
import { Mover } from './mover';

export const bootstrap = (parentId: string = 'app-pixi') => {
  const parentEl = document.getElementById(parentId);
  if (!parentEl) return;

  const W = 720;
  const H = 720;

  const scale = 10;
  const P_WIDTH = Math.floor(W / scale);
  const P_HEIGHT = Math.floor(H / scale);

  const app = new Application({
    width: W,
    height: H,
    backgroundColor: 0xffffff,
  });
  parentEl.appendChild(app.view);

  const mover = new Mover(P_WIDTH, P_HEIGHT, scale);
  app.stage.addChild(mover.gr);

  const border = new Graphics();
  border.lineStyle(1, 0x000000).drawRect(1, 0, W - 1, H - 1);
  app.stage.addChild(border);

  app.ticker.add((_) => {
    const mousePos: Point = app.renderer.plugins.interaction.mouse.global;
    mover.moveTo(mousePos);
    mover.render();
  });
};
