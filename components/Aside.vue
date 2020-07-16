<template>
  <div class="Aside"></div>
</template>

<script>
export default {
  name: "Aside"
};
</script>

<style lang="stylus" scoped>
.Aside
  zIndex(50)
  position fixed
  top $headerHeight
  height s('calc(100vh - %s)', $headerHeight)
  width $sideWidth
  overflow hidden

@media (max-width: $smallerWidth)
  .Aside
    position initial
    height auto
    width 100%
</style>