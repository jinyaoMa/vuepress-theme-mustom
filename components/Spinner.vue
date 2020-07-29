<template>
  <div :class="`Spinner ${mustom$IsSpinning ? '' : 'hide'}`"></div>
</template>

<script>
export default {
  name: "Spinner",
  mounted() {
    this.mustom$SetSpin(false);
  },
};
</script>

<style lang="stylus" scoped>
.Spinner
  zIndex(20)
  position fixed
  top 0
  left 0
  width 100%
  height 100vh
  background var(--spinner-bg)
  transition opacity 0.2s
  &:before
    content ''
    position absolute
    top s('calc(50vh - %s)', $spinnerSize * 0.5)
    left s('calc(50% - %s)', $spinnerSize * 0.5)
    width $spinnerSize
    height @width
    border $spinnerborderSize solid var(--spinner)
    border-top $spinnerborderSize solid transparent
    border-radius 50%
    animation spin 1.2s linear infinite
  &.hide
    pointer-events none
    opacity 0
</style>