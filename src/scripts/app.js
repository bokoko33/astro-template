import { defineViewportUnits } from '~/scripts/modules/viewportUnits';

export const initApp = () => {
  console.log('init');
  defineViewportUnits();

  // TODO 非同期遷移するならremoveしないと
  window.addEventListener('resize', defineViewportUnits);
};
