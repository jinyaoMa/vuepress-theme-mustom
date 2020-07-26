import lang from "./lang";
import skin from "./skin";
import nightshift from "./nightshift";
import ext from "./ext";
import canvas from "./canvas";
import trigger from "./trigger";

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
  }, lang, skin, nightshift, ext, canvas, trigger)); // Add-in here
}