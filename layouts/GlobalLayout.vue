<template>
  <div :class="`GlobalLayout skin-${$store.getters.skin}`">
    <Header />
  </div>
</template>

<script>
import Header from "@theme/components/Header";

export default {
  name: "GlobalLayout",
  components: {
    Header
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
  min-height 100vh
  background var(--img-global-bg)
</style>