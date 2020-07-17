<template>
  <div class="Menu">
    <div class="card" v-for="(menu, i) in $themeConfig.menus" :key="i">
      <div class="caption">
        <span class="icon" v-html="menu.icon"></span>
        <span v-html="mustom$Locale.menus.captions[menu.caption]"></span>
      </div>
      <div class="inner">
        <router-link v-for="(item, j) in menu.items" :key="j" :to="item.link">
          <span class="icon" v-html="item.icon"></span>
          <span v-html="mustom$Locale.menus.texts[item.text]"></span>
        </router-link>
      </div>
      <div class="minimize"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style lang="stylus" scoped>
.Menu
  user-select none

.inner
  padding 0.5rem 0

a
  display block
  padding 1rem
  line-height 1
  color var(--txt)
  &:before
    display none
  &:hover
    background var(--highlight)
  &.router-link-exact-active
    background var(--txt)
    color var(--bg)
</style>