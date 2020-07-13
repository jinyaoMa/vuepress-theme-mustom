<template>
  <div class="Menu nav-card">
    <div class="nav-card-caption">
      <span v-html="menu.icon"></span>
      {{$store.getters.locale.menus.captions[menu.caption]}}
    </div>
    <div class="nav-card-inner">
      <router-link v-for="(item, i) in menu.items" :key="i" :to="item.link">
        <span v-html="item.icon"></span>
        {{$store.getters.locale.menus.texts[item.text]}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: ["menu"]
};
</script>

<style lang="stylus" scoped>
a
  display block
  font-size 1.25rem
  line-height 3
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
  padding 0 $gap
  color var(--clr-txt)
  transition background 0.3s
  position relative
  span
    margin-right $gap * 0.5
  &:hover
    background-color var(--clr-highlight)
  &.router-link-exact-active
    background-color var(--clr-txt)
    color var(--clr-bg)
    &:after
      content ''
      height 1.25rem
      width @height
      position absolute
      right $gap
      top @height
      border-radius 50%
      background-color var(--clr-bg)
</style>