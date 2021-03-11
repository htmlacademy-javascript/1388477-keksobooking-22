export const debounceEvent = (callback, time) => {
  let interval;
  return (...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      interval = null;
      callback(...args);
    }, time);
  };
};

export const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};
