<template>
  <div class="Ext"></div>
</template>

<script>
export default {
  name: "Ext"
};
</script>

<style lang="stylus" scoped>
.Ext
  zIndex(31)
  position fixed
  top $headerHeight
  left 0
  width 100%
  height s('calc(100vh - %s)', $headerHeight)
  background var(--bg)
</style>