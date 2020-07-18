<template>
  <div class="Goingto">
    <div class="top" @click="mustom$Scroll2Top">
      <i class="fas fa-arrow-up"></i>
    </div>
    <div class="bottom" @click="mustom$Scroll2Bottom">
      <i class="fas fa-arrow-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goingto"
};
</script>

<style lang="stylus" scoped>
.Goingto
  zIndex(40)
  position fixed
  right 0
  bottom 0
  width $headerHeight
  height $headerHeight * 1.75
  user-select none
  transition transform 0.6s
  @media (max-width: $smallestWidth)
    transform s('translate3d(%s, 0, 0)', $headerHeight)

.top, .bottom
  width $headerHeight * 0.5
  line-height @width
  margin $headerHeight * 0.25
  text-align center
  background var(--bg)
  border-radius $borderRadius
  cursor pointer
  transition background 0.6s, color 0.6s
  &:hover
    color var(--underline)
</style>