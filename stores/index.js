import lang from "./lang";
import skin from "./skin";

const combine = (...stores) => {
  const result = {};
  stores.forEach(store => {
    for (const key in store) {
      if (!result[key]) {
        result[key] = {};
      }
      Object.assign(result[key], store[key]);
    }
  });
  return result;
};

export default Vuex => {
  return new Vuex.Store(combine({
    state: {}
  }, lang, skin)); // Add-in here
}