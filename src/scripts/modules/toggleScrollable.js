let savedBodyStyle = null;
let savedScroll = null;

const saveScrollingState = () => {
  const htmlEl = document.documentElement;
  const bodyEl = document.body;
  if (savedBodyStyle === null) {
    savedBodyStyle = {
      position: window.getComputedStyle(bodyEl).position,
      top: window.getComputedStyle(bodyEl).top,
      left: window.getComputedStyle(bodyEl).left,
    };
    savedScroll = {
      top: htmlEl.scrollTop || bodyEl.scrollTop,
      left: htmlEl.scrollLeft || bodyEl.scrollLeft,
    };
  }
};

const restoreScrollingState = () => {
  if (!savedBodyStyle || !savedScroll) return;
  const bodyEl = document.body;
  bodyEl.style.position = savedBodyStyle.position;
  bodyEl.style.top = savedBodyStyle.top;
  bodyEl.style.left = savedBodyStyle.left;
  window.scrollTo(savedScroll.left, savedScroll.top);
  savedBodyStyle = null;
  savedScroll = null;
};

const makeUnscrollable = () => {
  if (!savedBodyStyle || !savedScroll) return;
  const bodyEl = document.body;
  bodyEl.style.position = 'fixed';
  bodyEl.style.top = `${-savedScroll.top}px`;
  bodyEl.style.left = `${-savedScroll.left}px`;
};

let scrollable = true;

/**
 * Toggle between scrollable and unscrollable
 */
export const toggleScrollable = (newScrollable) => {
  if (!savedBodyStyle || !savedScroll) saveScrollingState();
  scrollable = typeof newScrollable === 'boolean' ? newScrollable : !scrollable;
  if (scrollable) {
    restoreScrollingState();
  } else {
    saveScrollingState();
    makeUnscrollable();
  }
};
