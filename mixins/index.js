import Vue from "vue";
import nprogress from 'nprogress';
import smoothscroll from 'smoothscroll-polyfill';
import { jsonp } from "../utils";

export default {
  data() {
    return {
      mustom$Busuanzi: {
        pv: '∞',
        uv: '∞'
      }
    };
  },
  mounted() {
    // configure progress bar
    nprogress.configure({
      parent: '.Header'
    })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(o => {
      nprogress.done()

      // Busuanzi
      this.mustom$InitBusuanzi();
    })

    // smoothscroll
    smoothscroll.polyfill();
  },
  methods: {
    mustom$Scroll2Header() {
      if (typeof window === 'undefined') return;
      window.scrollTo(0, window.innerHeight);
    },
    mustom$Scroll2Top() {
      if (typeof window === 'undefined') return;
      window.scrollTo(0, 0);
    },
    mustom$Scroll2Bottom() {
      if (typeof window === 'undefined' || typeof document === 'undefined') return;
      const target = this.$root.$el ? this.$root.$el : document.body.scrollHeight;
      window.scrollTo(0, target.offsetHeight);
    },
    mustom$InitBusuanzi() {
      jsonp(
        "//busuanzi.ibruce.info/busuanzi",
        {
          jsonpCallback:
            "BusuanziCallback_" + Math.floor(1099511627776 * Math.random())
        },
        result => {
          this.mustom$Busuanzi.pv = result.site_pv;
          this.mustom$Busuanzi.uv = result.site_uv;
        },
        true
      );
    }
  },
  computed: {
    mustom$SiteTotalWords() {
      let result = 0;
      this.$site.pages
        .filter(p => p.id === "post" || p.frontmatter.layout.toLowerCase() === "page")
        .forEach(page => {
          result += page.frontmatter.wordcount;
        });
      if (result >= 1000) {
        result = Math.round(result / 100) / 10 + "k";
      }
      return result;
    },
    mustom$SiteTotalPosts() {
      return this.$site.pages.filter(p => p.id === "post").length;
    },
    mustom$SiteTotalCategoriess() {
      return this.$categories.length;
    },
    mustom$SiteTotalTags() {
      return this.$tags.length;
    }
  }
}