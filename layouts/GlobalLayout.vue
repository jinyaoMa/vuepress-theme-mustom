<template>
  <div :class="`GlobalLayout skin-${mustom$Skin}${mustom$IsNight ? ' nightshift' : ''}${mustom$Ext !== '' ? ' fixed': ''}`">
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
          <component :is="layout" />
          <Empty />
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
    Ext
  },
  data() {
    return {
      scrollDiff: 1.2
    };
  },
  computed: {
    layout: function() {
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
    }
  },
  mounted() {
    console.log(this);
    window.addEventListener("resize", this.onResize);
    document.addEventListener("scroll", this.onScroll);
    window.setTimeout(o => {
      this.onResize();
      window.setTimeout(o => {
        this.mustom$FixHeight();
      }, 0);
    }, 600);

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !this.$vuepress.getVueComponent(to.name)) {
        this.$refs.spinner.start();
      }
      next();
    });
    this.$router.afterEach(o => {
      window.setTimeout(o => {
        this.$refs.spinner.stop();
      }, 200);
    });
  },
  methods: {
    onResize() {
      if (window.innerWidth > 1360) {
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
    }
  }
};
</script>

<style lang="stylus" scoped>
@font-face
  font-family 'Source Han Sans CN'
  src url('../assets/SourceHanSansCN.otf')

.slide-fade-enter-active
  transition all 0.3s ease

.slide-fade-leave-active
  transition all 0.3s ease

.slide-fade-enter, .slide-fade-leave-to
  transform translate3d(0, -100%, 0)
  opacity 0

.GlobalLayout
  font-family 'Source Han Sans CN'
  background var(--bg-global)
  background-attachment fixed
  min-width $minWidth
  width 100%
  &.fixed
    position fixed

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
  grid-template-rows min-content auto

.drawer
  grid-area drawer

.aside
  grid-area aside

.footer
  grid-area footer

@media (max-width: $smallWidth)
  .main
    grid-template-columns auto $sideWidth
    grid-template-rows auto auto min-content
    grid-template-areas 'drawer aside' 'center aside' 'footer aside'
  .drawer, .center, .footer
    padding 0 $gap 0 0

@media (max-width: $smallerWidth)
  .main
    grid-template-columns auto
    grid-template-rows auto auto auto auto
    grid-template-areas 'drawer' 'center' 'aside' 'footer'
  .drawer, .center, .footer
    padding 0

@media (max-width: $smallestWidth)
  .frame
    padding $headerHeight 0 0
</style>