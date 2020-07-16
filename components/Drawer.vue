<template>
  <div class="Drawer">
    <brand />
  </div>
</template>

<script>
import Brand from "./parts/Brand";

export default {
  name: "Drawer",
  components: {
    Brand
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

@media (max-width: $smallWidth)
  .Drawer
    position initial
    height auto
    width 100%
</style>