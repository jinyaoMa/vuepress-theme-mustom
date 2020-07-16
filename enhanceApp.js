import Vuex from "vuex";
import stores from "./stores";
import mixins from "./mixins";
import "@fortawesome/fontawesome-free/css/all.css";
import "nprogress/nprogress.css";

// fork from vue-router@3.0.2
// src/util/scroll.js
function getElementPosition(el) {
  const docEl = document.documentElement;
  const docRect = docEl.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top,
  };
}

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Vuex);
  Object.assign(options, {
    store: stores(Vuex)
  });
  
  Vue.mixin(mixins(Vue, Vuex));

  /**
   * Another: https://github.com/vuejs/vue-router/blob/dev/examples/scroll-behavior/app.js
   */
  router.options.scrollBehavior = function (to, from, savedPosition) {
    if (savedPosition) {
      return window.scrollTo({
        top: savedPosition.y,
        behavior: 'smooth',
      });
    } else if (to.hash) {
      if (Vue.$vuepress.$get('disableScrollBehavior')) {
        return;
      }
      const targetElement = document.querySelector(to.hash);
      if (targetElement) {
        return window.scrollTo({
          top: getElementPosition(targetElement).y,
          behavior: 'smooth',
        });
      }
    } else {
      return false;
    }
  }
}