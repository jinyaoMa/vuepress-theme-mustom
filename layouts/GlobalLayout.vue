<template>
  <div
    :class="`GlobalLayout skin-${mustom$Skin}${mustom$IsNight ? ' nightshift' : ''}${mustom$Ext !== '' ? ' fixed': ''}`"
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
        <div class="center">
          <Translate
            v-if="!mustom$IsMobile"
            :isHighlight="isHighlight"
            :isTranslated="isTranslated"
            ref="translate"
          />
          <div ref="partial">
            <component :is="layout" />
          </div>
          <Empty v-if="!mustom$IsMobile" />
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
    };
  },
  computed: {
    layout: function () {
      if (this.$page.path) {
        const layout = this.$frontmatter.layout;
        if (
          layout &&
          (this.$vuepress.getLayoutAsyncComponent(layout) ||
            this.$vuepress.getVueComponent(layout))
        ) {
          return layout;
        }
        return "Home";
      }
      return "NotFound";
    },
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
  methods: {
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
    :before
      display none

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