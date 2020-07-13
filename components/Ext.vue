<template>
  <div :class="`Ext ${$store.getters.drawer}-active`">
    <div class="inner">
      <a
        target="_blank"
        v-for="(ext, i) in $themeConfig.exts"
        :key="i"
        :href="ext.link"
        :title="ext.link"
      >
        <div class="icon" :style="{backgroundImage: `url('${ext.icon}')`}"></div>
        <div class="name">{{ext.name}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ext"
};
</script>

<style lang="stylus" scoped>
.Ext
  user-select none
  overflow-x auto
  overflow-y hidden
  height 0
  padding 0 $headerMinHeight
  opacity 0
  transition height 0.3s, padding 0.3s, opacity 0.3s
  background-color var(--clr-bg-dark)
  position relative

.ext-active
  height $headerMinHeight * 4 + 3rem
  padding $headerMinHeight
  opacity 1

.inner
  height $headerMinHeight * 2 + 3rem
  display grid
  grid-auto-flow column
  gap $headerMinHeight
  justify-items center

a
  display block
  width $headerMinHeight * 2
  text-align center
  color var(--clr-bg)
  transition filter 0.2s
  &:hover
    filter drop-shadow(0 0 0.25rem)
  &:before
    display none
  &:last-child
    padding-right $headerMinHeight

.icon
  height $headerMinHeight * 2
  background-position center
  background-size cover
  background-repeat no-repeat
  background-color var(--clr-bg)
  border-radius 25%

.name
  line-height 3rem
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
</style>