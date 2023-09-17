let timeoutId = 0;
export const debounce = (func, interval) => {
  return () => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(func, interval);
  };
};
