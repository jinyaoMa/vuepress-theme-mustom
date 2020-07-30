<template>
  <div class="Drawer">
    <brand />
    <Menu />
    <Skin v-if="!mustom$IsMobile" />
    <Settings />
  </div>
</template>

<script>
import Brand from "./parts/Brand";
import Menu from "./parts/Menu";
import Skin from "./parts/Skin";
import Settings from "./parts/Settings";

export default {
  name: "Drawer",
  components: {
    Brand,
    Menu,
    Skin,
    Settings,
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
.Drawer
  zIndex(50)
  position fixed
  top $headerHeight
  height s('calc(100vh - %s)', $headerHeight)
  width $sideWidth
  overflow hidden

@media (max-width $smallWidth)
  .Drawer
    position initial
    height auto
    width 100%
</style>