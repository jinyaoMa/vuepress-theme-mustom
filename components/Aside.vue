<template>
  <div class="Aside">
    <Panel />
    <Audioplayer />
    <transition name="fade">
      <Toc v-if="$page.id === 'post' && !mustom$IsMobile" />
    </transition>
  </div>
</template>

<script>
import Panel from "./parts/Panel";
import Audioplayer from "./parts/Audioplayer";
import Toc from "./parts/Toc";

export default {
  name: "Aside",
  components: {
    Panel,
    Audioplayer,
    Toc,
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

@media (max-width $smallerWidth)
  .Aside
    position initial
    height auto
    width 100%
</style>