<template>
  <div :class="`GlobalLayout skin-${mustom$Skin}`">
    <Launch />
    <Spinner />
    <Header />
    <div class="frame">
      <div class="main">
        <div class="drawer">
          <Drawer />
        </div>
        <div class="center">
          <div></div>
        </div>
        <div class="aside">
          <Aside />
        </div>
        <div class="footer">
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Launch from "@theme/components/Launch";
import Spinner from "@theme/components/Spinner";
import Header from "@theme/components/Header";
import Drawer from "@theme/components/Drawer";
import Aside from "@theme/components/Aside";

export default {
  name: "GlobalLayout",
  components: {
    Launch,
    Spinner,
    Header,
    Drawer,
    Aside
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
  }
};
</script>

<style lang="stylus" scoped>
@font-face
  font-family 'Source Han Sans CN'
  src url('../assets/SourceHanSansCN.otf')

.GlobalLayout
  font-family 'Source Han Sans CN'
  background var(--bg-global)
  background-attachment fixed
  min-width $minWidth
  width 100%

.frame
  padding $headerHeight $floatingSize 0
  width 100%

.main
  max-width $maxWidth
  margin 0 auto
  min-height 100vh
  display grid
  grid-template-columns $sideWidth auto $sideWidth
  grid-template-areas 'drawer center aside' 'drawer footer aside'

.center, .footer
  padding 0 $gap

.center
  grid-area center

.drawer
  grid-area drawer

.aside
  grid-area aside

.footer
  grid-area footer

@media (max-width: $smallWidth)
  .main
    grid-template-columns auto $sideWidth
    grid-template-areas 'drawer aside' 'center aside' 'footer aside'
  .drawer, .center, .footer
    padding 0 $gap 0 0

@media (max-width: $smallerWidth)
  .main
    grid-template-columns auto
    grid-template-areas 'drawer' 'center' 'aside' 'footer'
  .drawer, .center, .footer
    padding 0

@media (max-width $smallestWidth)
  .frame
    padding $headerHeight 0 0
</style>