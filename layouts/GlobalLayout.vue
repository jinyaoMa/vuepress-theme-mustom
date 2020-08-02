<template>
  <div
    :class="`GlobalLayout ${extraClass}`"
    :style="mustom$Skin === 'default' && !mustom$IsNight ? { backgroundImage: `url('${backgroundImage}')` } : {}"
  >
    <transition name="fade">
      <Canvas v-if="mustom$Skin === 'default' && !mustom$IsMobile && !mustom$NoCanvas" />
    </transition>
    <Launch />
    <Spinner ref="spinner" />
    <Header />
    <Goingto />
    <transition name="slide-fade">
      <Ext v-if="mustom$Ext !== ''" />
    </transition>
    <div class="frame">
      <div class="main" ref="main">
        <div class="drawer">
          <Drawer ref="drawer" />
        </div>
        <div :class="`center ${$themeConfig.noEmpty ? 'noEmpty' : ''}`">
          <Translate
            v-if="!mustom$IsMobile"
            :isHighlight="isHighlight"
            :isTranslated="isTranslated"
            ref="translate"
          />
          <div ref="partial">
            <component :is="layout" />
          </div>
          <Empty v-if="!$themeConfig.noEmpty && !mustom$IsMobile" />
        </div>
        <div class="aside">
          <Aside ref="aside" />
        </div>
        <div class="footer">
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Launch from "@theme/components/Launch";
import Spinner from "@theme/components/Spinner";
import Header from "@theme/components/Header";
import Goingto from "@theme/components/Goingto";
import Drawer from "@theme/components/Drawer";
import Aside from "@theme/components/Aside";
import Footer from "@theme/components/Footer";
import Empty from "@theme/components/Empty";
import Ext from "@theme/components/Ext";
import Canvas from "@theme/components/Canvas";
import Translate from "@theme/components/Translate";

export default {
  name: "GlobalLayout",
  components: {
    Launch,
    Spinner,
    Header,
    Goingto,
    Drawer,
    Aside,
    Footer,
    Empty,
    Ext,
    Canvas,
    Translate,
  },
  data() {
    return {
      scrollDiff: 1.2,
      isMousedownTranslate: false,
      isMousedownPartial: false,
      isHighlight: false,
      isTranslated: false,
      backgroundImageIndex: 0,
      headerElements: [],
    };
  },
  computed: {
    layout() {
      if (this.$page.path) {
        const layout = this.$frontmatter.layout;
        if (
          layout &&
          (this.$vuepress.getLayoutAsyncComponent(layout) ||
            this.$vuepress.getVueComponent(layout))
        ) {
          return layout;
        }
        return "Layout";
      }
      return "NotFound";
    },
    backgroundImage() {
      return this.$themeConfig.customBackgrounds &&
        this.$themeConfig.customBackgrounds.length
        ? this.$themeConfig.customBackgrounds[this.backgroundImageIndex]
        : "#";
    },
    extraClass() {
      let c = `skin-${this.mustom$Skin}`;
      if (this.mustom$IsNight) {
        c += ' nightshift';
      }
      if (this.mustom$Ext !== '' || this.mustom$Readmode) {
        c += ' fixed';
      }
      if (this.mustom$Skin === 'default' && this.mustom$NoCanvas) {
        c += ' bg-transparent';
      }
      return c;
    }
  },
  watch: {
    mustom$TriggerResize() {
      if (!this.mustom$IsMobile) {
        this.onResize();
      }
    },
  },
  mounted() {
    console.log(this);
    if (!this.mustom$IsMobile) {
      const bgSwitcher = window.setInterval((o) => {
        let tempIndex = this.backgroundImageIndex + 1;
        if (this.$themeConfig.customBackgrounds) {
          if (tempIndex === this.$themeConfig.customBackgrounds.length) {
            tempIndex = 0;
          }
          this.backgroundImageIndex = tempIndex;
        } else {
          window.clearInterval(bgSwitcher);
        }
      }, 6000);
      window.addEventListener("resize", this.onResize);
      document.addEventListener("scroll", this.onScroll);
      window.setTimeout((o) => {
        this.onResize();
      }, 600);
      this.$refs.translate.$el.addEventListener(
        "mousedown",
        this.onMousedownTranslate
      );
      this.$refs.partial.addEventListener("mousedown", this.onMousedownPartial);
      document.addEventListener("mouseup", this.onMouseup);
      this.gotoHash();
    }
    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !this.$vuepress.getVueComponent(to.name)) {
        this.mustom$SetSpin(true);
      }
      next();
    });
    this.$router.afterEach((o) => {
      window.setTimeout((o) => {
        this.mustom$SetSpin(false);
      }, 200);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
    document.removeEventListener("scroll", this.onScroll);
    this.$refs.translate.$el.removeEventListener(
      "mousedown",
      this.onMousedownTranslate
    );
    this.$refs.partial.removeEventListener(
      "mousedown",
      this.onMousedownPartial
    );
    document.removeEventListener("mouseup", this.onMouseup);
  },
  methods: {
    gotoHash() {
      this.wrapHeaderElements();
      if (this.$route.hash) {
        for (let i = 0; i < this.headerElements.length; i++) {
          const el = this.headerElements[i];
          if (el.hash === this.$route.hash) {
            window.scrollTo(0, el.top);
            break;
          }
        }
      }
    },
    wrapHeaderElements() {
      this.headerElements = [];
      this.$el.querySelectorAll(".header-anchor").forEach((el) => {
        this.headerElements.push({
          self: el,
          top: this.getOffsetTop(el),
          hash: el.hash,
        });
      });
    },
    getOffsetTop(el) {
      const docEl = document.documentElement;
      const docRect = docEl.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      return elRect.top - docRect.top - 80; // 80 = 64px for header + 16px for 1rem
    },
    onMousedownTranslate() {
      this.isMousedownTranslate = true;
    },
    onMousedownPartial() {
      this.isMousedownPartial = true;
      window.getSelection().empty();
    },
    onMouseup() {
      if (this.isMousedownPartial) {
        const query = window.getSelection().toString().trim();
        if (query.length > 0) {
          this.isHighlight = true;
        } else {
          this.isHighlight = false;
        }
        this.isTranslated = false;
      } else if (this.isMousedownTranslate) {
        this.isTranslated = true;
      } else {
        this.isHighlight = false;
        this.isTranslated = false;
      }
      this.isMousedownTranslate = false;
      this.isMousedownPartial = false;
    },
    onResize() {
      if (window.innerWidth > 1328) {
        // equal to $smallWidth in palette.styl
        // manual measured
        const drawerHeight = this.$refs.drawer.height() * this.scrollDiff;
        const asideHeight = this.$refs.aside.height() * this.scrollDiff;
        this.$refs.main.style.minHeight =
          (drawerHeight > asideHeight ? drawerHeight : asideHeight) + "px";
      } else if (window.innerWidth > 1080) {
        // manual measured
        const asideHeight = this.$refs.aside.height() * this.scrollDiff;
        this.$refs.main.style.minHeight = asideHeight + "px";
      } else {
        this.$refs.main.style.minHeight = "100vh";
      }
      this.onScroll();
    },
    onScroll() {
      this.$refs.drawer.scrollTo(
        window.scrollY /
          (this.scrollDiff +
            (this.$refs.drawer.height() * (this.scrollDiff - 1)) /
              this.$refs.drawer.height())
      );
      this.$refs.aside.scrollTo(
        window.scrollY /
          (this.scrollDiff +
            (this.$refs.aside.height() * (this.scrollDiff - 1)) /
              this.$refs.aside.height())
      );
      if (this.$page.id === "post") {
        this.wrapHeaderElements();
        for (let i = 0; i < this.headerElements.length; i++) {
          const el = this.headerElements[i];
          if (
            el.top >= window.scrollY &&
            el.top < window.scrollY + window.innerHeight - 160 // 160 = (64px for header + 16px for 1rem) * 2
          ) {
            if (el.hash !== this.$route.hash) {
              this.$vuepress.$set("disableScrollBehavior", true);
              this.$router.replace(decodeURIComponent(el.hash), () => {
                this.$nextTick(() => {
                  this.$vuepress.$set("disableScrollBehavior", false);
                });
              });
            }
            break;
          }
        }
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
/*
@font-face
  font-family 'Source Han Sans CN'
  src url('../statics/SourceHanSansCN.otf')
*/
.GlobalLayout
  // font-family 'Source Han Sans CN', -apple-system, Helvetica, Arial, sans-serif
  font-family -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  background var(--bg-global)
  background-attachment fixed
  min-width $minWidth
  width 100%
  &.fixed
    position fixed

>>> .markdown-body
  // font-family 'Source Han Sans CN', -apple-system, Helvetica, Arial, sans-serif
  font-family -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji
  -webkit-font-smoothing antialiased
  color var(--txt)
  a
    color var(--link-markdown)
    &:before
      display none
  table
    color var(--txt)
    tr
      background-color var(--bg)
      &:nth-child(2n)
        background-color var(--highlight)
  img
    display block
    + em
      display block
      font-size 0.75rem
      line-height 2rem
      padding 0 0.625rem
      color var(--txt)
      background var(--highlight)

.frame
  padding $headerHeight $floatingSize 0
  width 100%

.main
  max-width $maxWidth
  margin 0 auto
  min-height 100vh
  display grid
  grid-template-columns $sideWidth auto $sideWidth
  grid-template-rows auto min-content
  grid-template-areas 'drawer center aside' 'drawer footer aside'

.center, .footer
  padding 0 $gap

.center
  grid-area center
  display grid
  grid-template-rows min-content min-content auto
  &.noEmpty
    grid-template-rows min-content min-content
  gap $gap
  padding-top $gap !important
  padding-bottom $gap !important
  @media (max-width $smallWidth)
    padding-top 0 !important
  @media (max-width $smallerWidth)
    padding-bottom 0 !important
  @media (max-width $smallestWidth)
    gap 0
  >>> .card
    margin 0

.drawer
  grid-area drawer

.aside
  grid-area aside

.footer
  grid-area footer

@media (max-width $smallWidth)
  .main
    grid-template-columns auto $sideWidth
    grid-template-rows auto auto min-content
    grid-template-areas 'drawer aside' 'center aside' 'footer aside'
  .drawer, .center, .footer
    padding 0 $gap 0 0

@media (max-width $smallerWidth)
  .main
    grid-template-columns auto
    grid-template-rows min-content min-content min-content min-content
    grid-template-areas 'drawer' 'center' 'aside' 'footer'
    min-height auto
  .drawer, .center, .footer
    padding 0

@media (max-width $smallestWidth)
  .frame
    padding $headerHeight 0 0
</style>