<template>
  <div class="Aside">
    <Panel />
    <Audioplayer />
    <Clustrmaps
      v-if="
        $themeConfig.clustrmaps &&
        $themeConfig.clustrmaps.id &&
        $themeConfig.clustrmaps.src
      "
    />
    <transition name="fade">
      <Toc v-if="$page.id === 'post' && !mustom$IsMobile" />
    </transition>
  </div>
</template>

<script>
import Panel from "./parts/Panel";
import Audioplayer from "./parts/Audioplayer";
import Toc from "./parts/Toc";
import Clustrmaps from "./parts/Clustrmaps";

export default {
  name: "Aside",
  components: {
    Panel,
    Audioplayer,
    Toc,
    Clustrmaps,
  },
  methods: {
    height() {
      return this.$el.scrollHeight;
    },
    scrollTo(y) {
      this.$el.scrollTo(0, y);
    },
  },
};
</script>

<style lang="stylus" scoped>
.Aside
  zIndex(60)
  position fixed
  top $headerHeight
  height s('calc(100vh - %s)', $headerHeight)
  width $sideWidth
  overflow hidden

@media (max-width $smallWidth)
  .Aside
    position relative
    top auto
    height auto
    width 100%
</style>