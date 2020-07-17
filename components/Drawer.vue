<template>
  <div class="Drawer">
    <brand />
    <Menu />
    <Skin />
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
    Settings
  }
};
</script>

<style lang="stylus" scoped>
.Drawer
  zIndex(40)
  position fixed
  top $headerHeight
  height s('calc(100vh - %s)', $headerHeight)
  width $sideWidth
  overflow hidden
  overflow-y scroll

@media (max-width: $smallWidth)
  .Drawer
    position initial
    height auto
    width 100%
</style>