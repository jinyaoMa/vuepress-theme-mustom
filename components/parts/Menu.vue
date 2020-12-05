<template>
  <div class="Menu">
    <div class="card" v-for="(menu, i) in $themeConfig.menus" :key="i">
      <div class="caption">
        <span class="icon" v-html="menu.icon"></span>
        <span v-html="menu.caption[mustom$LangIndex]"></span>
      </div>
      <div class="inner">
        <router-link v-for="(item, j) in menu.items" :key="j" :to="item.link">
          <span class="icon" v-html="item.icon"></span>
          <span v-html="item.text[mustom$LangIndex]"></span>
        </router-link>
      </div>
      <div class="minimize" @click="mustom$ToggleMinimize"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style lang="stylus" scoped>
.Menu
  user-select none

.inner
  padding 0.5rem 0
  @media (min-width $smallestWidth) and (max-width $smallerWidth)
    padding 0.5rem 1rem

a
  display block
  padding 1rem
  line-height 1
  color var(--txt)
  position relative
  &:before
    display none
  @media (min-width $smallestWidth)
    &:hover
      background var(--highlight)
  &:after
    content ''
    height 1rem
    width @height
    position absolute
    top 1rem
    right 1rem
    border-radius $borderRadius
  &.router-link-exact-active
    background var(--txt)
    color var(--bg)
    &:after
      background var(--underline)
      border 2px solid
  @media (min-width $smallestWidth) and (max-width $smallerWidth)
    display inline-block
    border-radius $borderRadius
    margin-right 0.5rem
    margin-bottom 0.5rem
    padding 0.5rem
    &.router-link-exact-active
      background var(--txt)
      color var(--bg)
      &:after
        display none
    .icon
      display none
</style>