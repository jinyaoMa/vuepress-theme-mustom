<template>
  <div class="Launch">
    <div
      :class="$themeConfig.maximizeLaunch ? 'avatar maximize' : 'avatar'"
      :style="{ backgroundImage: `url('${$withBase('/assets/img/avatar.png')}')` }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Launch",
  mounted() {
    window.setTimeout((o) => {
      this.$el.classList.add("hide");
    }, 1000);
  },
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
  &.hide
    pointer-events none
    opacity 0

.avatar
  position absolute
  top calc(50vh - 33vmin)
  left calc(50% - 33vmin)
  width 66vmin
  height @width
  background-size auto 100%
  border-radius 50%
  &.maximize
    top 0
    left 0
    width 100vw
    height 100vh
    border-radius 0
</style>