<template>
  <div class="Skin nav-card">
    <div class="nav-card-caption">
      <i class="fas fa-tshirt fa-fw"></i>
      {{$store.getters.locale.skins.caption}}
    </div>
    <div class="nav-card-inner">
      <div
        v-for="(skin, i) in $themeConfig.skins"
        :key="i"
        :title="$store.getters.locale.skins.names[skin.name]"
        :style="{background:skin.color}"
        :class="$store.getters.skin === skin.name ? 'active' : ''"
        @click="$store.dispatch('setSkin', skin.name)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skin"
};
</script>

<style lang="stylus" scoped>
.nav-card-inner
  padding $gap
  line-height 1
  display grid
  grid-template-columns 1fr 1fr 1fr 1fr
  justify-items center
  gap $gap
  > div
    display inline-block
    height s('calc((%s - %s) / 4)', $navCardWidth, $gap * 5)
    width @height
    border-radius 50%
    cursor pointer
    transition box-shadow 0.3s
    position relative
    &:after
      content ''
      position absolute
      top 25%
      left @top
      width 50%
      height @width
      border-radius 50%
      transition background-color 0.3s, border 0.3s
    &.active:after
      background-color var(--clr-txt)
      border 0.35rem solid var(--clr-bg)
</style>