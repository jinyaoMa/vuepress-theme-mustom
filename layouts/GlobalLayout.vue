<template>
  <div :class="`GlobalLayout skin-${$store.getters.skin}`">
    <Topper />
    <Header />
    <Botter />
    <Ext />
    <Nav />
    <div class="main">
      <div class="inner"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Topper from "@theme/components/Topper";
import Header from "@theme/components/Header";
import Footer from "@theme/components/Footer";
import Botter from "@theme/components/Botter";
import Ext from "@theme/components/Ext";
import Nav from "@theme/components/Nav";

export default {
  name: "GlobalLayout",
  components: {
    Topper,
    Header,
    Footer,
    Botter,
    Ext,
    Nav
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
.GlobalLayout
  background-image var(--img-global-bg)
  background-attachment fixed

.main
  min-height 100vh
  max-width $maxWidth
  padding $sidePadding $sidePadding $pointupHeight * 2 + $sidePadding
  margin 0 auto

.inner
  min-height 100vh
  background-color var(--clr-bg)
  border-radius $borderRadius
  padding $borderRadius 0
</style>