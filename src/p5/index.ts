import p5 from 'p5';
import { sketch } from './sketch';

export const bootstrap = (parentId: string = 'app-p5') => {
  const parentEl = document.getElementById(parentId);
  if (!parentEl) return;
  new p5(sketch, parentEl);
};
