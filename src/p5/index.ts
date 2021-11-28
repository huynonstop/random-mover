import p5 from 'p5';
import { sketch } from './sketch';

export const bootstrap = (parentId: string = 'app') => {
  const app = document.getElementById(parentId);
  if (!app) return;
  new p5(sketch, app);
};
