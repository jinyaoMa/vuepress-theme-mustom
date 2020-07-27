const KEY = o => {
  if (typeof window === 'undefined') return;
  return window.btoa(window.location.host);
}

const get = o => {
  if (typeof window === 'undefined') return;
  let value = window.localStorage.getItem(KEY());
  if (value) {
    try {
      value = JSON.parse(value);
    } catch (error) {
      if (!isNaN(value)) {
        value = parseFloat(value);
      }
    }
  } else {
    value = {};
    set(value);
  }
  return value;
};

const set = value => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(KEY(), JSON.stringify(value));
  } catch (error) {
    window.localStorage.setItem(KEY(), value);
  }
};

const clear = o => {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(KEY());
};

export default {
  KEY,
  get,
  set,
  clear
}