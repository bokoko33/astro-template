import { BREAKPOINT } from '~/scripts/modules/constants';

/**
 * モバイルブラウザのスクロール時の上下リサイズを無視するresizeイベント
 */
let prevInnerWidth = 0;
export const addEventOptimizedResize = (callback) => {
  const handler = () => {
    const isMobile = window.innerWidth < BREAKPOINT;
    const sameWidth = window.innerWidth === prevInnerWidth;

    if (!(isMobile && sameWidth)) {
      callback();
    }

    prevInnerWidth = window.innerWidth;
  };

  prevInnerWidth = window.innerWidth;
  window.addEventListener('resize', handler);

  // cleanup関数を返す
  return () => {
    window.removeEventListener('resize', handler);
  };
};
