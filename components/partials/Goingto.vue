<template>
  <div class="Goingto">
    <div class="btn" @click="mustom$Scroll2Top">
      <i class="fas fa-arrow-up"></i>
    </div>
    <div class="btn" @click="mustom$Scroll2Bottom">
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
  position absolute
  right 0
  user-select none

.btn
  margin $gap
  height $floatButtonHeight
  width $floatButtonHeight
  font-size ($floatButtonHeight / 3)
  line-height $floatButtonHeight
  text-align center
  background-color var(--clr-bg)
  border-radius $borderRadius
  cursor pointer
  i
    transition color 0.3s
  &:hover i
    color var(--clr-underline)
</style>