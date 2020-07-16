<template>
  <div class="Header">
    <div></div>
    <div class="sitename" v-html="mustom$Locale.sitename"></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="stylus" scoped>
.Header
  zIndex(30)
  position fixed
  top 0
  left 0
  width 100%
  height $headerHeight
  background var(--header-bg)
  box-shadow 0 0 $gap * 0.5 1px var(--txt)
  display grid
  grid-template-columns $headerHeight auto $headerHeight
  grid-template-rows $headerHeight

.sitename
  text-align center
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
  line-height $headerHeight
  font-size $headerHeight * 0.25
</style>