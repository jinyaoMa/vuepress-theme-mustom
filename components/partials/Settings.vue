<template>
  <div class="Settings nav-card">
    <div class="nav-card-caption">
      <i class="fas fa-cog fa-fw"></i>
      {{$store.getters.locale.settings.caption}}
    </div>
    <div class="nav-card-inner">
      <div v-for="(setting, i) in $themeConfig.settings" :key="i">
        <span v-html="setting.icon"></span>
        {{$store.getters.locale.settings.names[setting.name]}}
        <div class="switch">
          <div class="before"></div>
          <div class="after"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings"
};
</script>

<style lang="stylus" scoped>
.nav-card-inner > div
  font-size 1.25rem
  line-height 3
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
  padding 0 $gap
  transition background 0.3s
  position relative
  cursor pointer
  span
    margin-right $gap * 0.5
  &:hover
    background-color var(--clr-highlight)
  &.active
    .switch
      .before
        transform scale(3)
      .after
        background-color var(--clr-bg)
        transform scale(0.5)
        z-index 2

.switch
  height 1.75rem
  width @height * 2
  position absolute
  top 1rem
  right $gap
  overflow hidden
  border-radius $borderRadius
  transition border-radius 0.2s
  .before
    content ''
    position absolute
    top 0
    left 0
    height 1.75rem
    width @height
    border-radius $borderRadius
    background-color var(--clr-txt)
    transition transform 0.2s
    transform scale(0.5)
    z-index 2
  .after
    content ''
    position absolute
    top 0
    right 0
    height 1.75rem
    width @height
    border-radius $borderRadius
    background-color var(--clr-highlight)
    transition transform 0.2s
    transform scale(3)
    z-index 1
</style>