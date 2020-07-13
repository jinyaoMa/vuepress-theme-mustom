<template>
  <div class="Topper">
    <div class="inner"></div>
    <router-link class="avatar" :to="$withBase('/')"></router-link>
    <div class="pointdown" @click="mustom$Scroll2Header">
      <i class="fas fa-angle-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topper"
};
</script>

<style lang="stylus" scoped>
.Topper
  position relative
  height $topperHeight
  overflow hidden
  user-select none

.inner
  background-color var(--clr-bg)
  height s('calc(%s - %s)', $topperInnerSize, $pointdownHeight * 2)
  width @height
  position absolute
  top s('calc(50% - %s + %s)', ($topperInnerSize / 2), ($pointdownHeight / 2))
  left s('calc(50% - %s + %s)', ($topperInnerSize / 2), $pointdownHeight)
  border-radius 50%
  overflow hidden
  transform scale(1)
  animation topper-inner_appear 1.2s ease-out

.avatar
  display block
  background-image url('/assets/img/avatar.topper.png')
  background-position center
  background-size cover
  height s('calc(%s - %s)', $topperAvatarSize, $pointdownHeight * 2)
  width @height
  position absolute
  top s('calc(50% - %s + %s)', ($topperAvatarSize / 2), ($pointdownHeight / 2))
  left s('calc(50% - %s + %s)', ($topperAvatarSize / 2), $pointdownHeight)
  border-radius 50%
  overflow hidden
  animation topper--avatar_appear 1.2s ease-out
  transition transform 0.6s
  &:hover
    transform scale(1.02)

.pointdown
  background-color var(--clr-bg)
  height $pointdownHeight
  width @height
  position absolute
  bottom $pointdownHeight
  left s('calc(50% - %s)', ($pointdownHeight / 2))
  line-height $pointdownHeight * 1.125
  font-size $pointdownHeight * 0.5
  text-align center
  border-radius 50%
  cursor pointer
  i
    transition color 0.6s, filter 0.2s
  &:hover i
    color var(--clr-txt-dark)
    filter drop-shadow(0 0 1px)
</style>