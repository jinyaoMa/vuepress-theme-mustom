import Vuex from "vuex";
import stores from "./stores";
import mixins from "./mixins";
import "@fortawesome/fontawesome-free/css/all.css";
import "nprogress/nprogress.css";
import "github-markdown-css";
import "@vuepress/theme-default/styles";

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

      return {
        selector: to.hash,
        offset: {
          x: 0,
          y: 80
        }
      }
    } else {
      return false;
    }
  }
}