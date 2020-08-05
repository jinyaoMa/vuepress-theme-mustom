<template>
  <div class="Skin card">
    <div class="caption">
      <span class="icon">
        <i class="fas fa-tshirt fa-fw"></i>
      </span>
      <span v-html="mustom$Locale.skins.caption"></span>
    </div>
    <div class="inner">
      <div
        v-for="(skin, i) in $themeConfig.skins"
        :key="i"
        :title="mustom$Locale.skins.names[skin.name]"
        :style="{ background: skin.color }"
        :class="`color ${mustom$Skin === skin.name ? 'active' : ''}`"
        @click="mustom$SetSkin(skin.name)"
      ></div>
    </div>
    <div class="minimize" @click="mustom$ToggleMinimize"></div>
  </div>
</template>

<script>
export default {
  name: "Skin"
};
</script>

<style lang="stylus" scoped>
.inner
  padding 1rem
  display flex
  flex-flow row
  > div
    width 3rem
    height @width
    border-radius $borderRadius
    cursor pointer
    position relative
    line-height 1
    transition filter 0.2s
    &:hover
      filter brightness(1.2)
    &:not(:last-child)
      margin-right 1rem
    &.active:after
      content '✔'
      position absolute
      right 0
      bottom 0
      padding 0.25rem
      color var(--bg)

@media (max-width $smallestWidth)
  .Skin
    display none
</style>