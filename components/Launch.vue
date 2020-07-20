<template>
  <div class="Launch"></div>
</template>

<script>
export default {
  name: "Launch",
  mounted() {
    window.setTimeout(o => {
      this.$el.classList.add('hide');
    }, 600);
  }
};
</script>

<style lang="stylus" scoped>
.Launch
  zIndex(-99999)
  position fixed
  top 0
  left 0
  width 100%
  height 100vh
  background var(--launch-bg)
  transition opacity 0.6s
  &:before
    content ''
    position absolute
    top calc(50vh - 33vmin)
    left calc(50% - 33vmin)
    width 66vmin
    height @width
    background url('/assets/img/avatar.png')
    background-size cover
    border-radius 50%
  &.hide
    pointer-events none
    opacity 0
</style>